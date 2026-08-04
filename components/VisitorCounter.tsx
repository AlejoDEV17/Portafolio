"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const counterEndpoint =
  "https://counterapi.com/api/alejodev17.github.io/view/portfolio";
const sessionKey = "alejandro-portfolio-view-counted";

type CounterResponse = {
  value?: number;
};

const formatViews = (value: number | null) => {
  if (value === null) return "------";
  return String(value).padStart(6, "0");
};

export function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const isLocal = ["localhost", "127.0.0.1"].includes(
      window.location.hostname,
    );
    const alreadyCounted = window.sessionStorage.getItem(sessionKey) === "true";
    const shouldIncrement = !isLocal && !alreadyCounted;
    const url = new URL(counterEndpoint);

    if (!shouldIncrement) url.searchParams.set("readOnly", "true");

    const controller = new AbortController();

    fetch(url, { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Visitor counter unavailable");
        return response.json() as Promise<CounterResponse>;
      })
      .then((data) => {
        if (typeof data.value !== "number") {
          throw new Error("Invalid visitor counter response");
        }

        setViews(data.value);
        if (shouldIncrement) window.sessionStorage.setItem(sessionKey, "true");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setViews(0);
      });

    return () => controller.abort();
  }, []);

  return (
    <div
      className="visitor-counter"
      aria-live="polite"
      aria-label={views === null ? "Cargando visitas" : `${views} visitas`}
    >
      <Eye aria-hidden="true" />
      <span>
        <small>PORTFOLIO VIEWS</small>
        <strong>{formatViews(views)}</strong>
      </span>
      <i aria-hidden="true" />
    </div>
  );
}
