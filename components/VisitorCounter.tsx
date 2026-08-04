"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const counterEndpoint =
  "https://alejodev17-portfolio-counter.alejandro-lozano-portfolio.workers.dev";
const visitorKey = "alejandro-portfolio-visitor-counted-v1";
const cachedViewsKey = "alejandro-portfolio-views-cache-v1";

type CounterResponse = {
  count?: number;
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
    const alreadyCounted = window.localStorage.getItem(visitorKey) === "true";
    const shouldIncrement = !isLocal && !alreadyCounted;
    const cachedViewsRaw = window.localStorage.getItem(cachedViewsKey);
    const cachedViews =
      cachedViewsRaw === null ? null : Number(cachedViewsRaw);

    const controller = new AbortController();

    fetch(counterEndpoint, {
      method: shouldIncrement ? "POST" : "GET",
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Visitor counter unavailable");
        return response.json() as Promise<CounterResponse>;
      })
      .then((data) => {
        if (typeof data.count !== "number") {
          throw new Error("Invalid visitor counter response");
        }

        setViews(data.count);
        window.localStorage.setItem(cachedViewsKey, String(data.count));
        if (shouldIncrement) window.localStorage.setItem(visitorKey, "true");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        const hasValidCache =
          cachedViews !== null &&
          Number.isInteger(cachedViews) &&
          cachedViews >= 0;
        setViews(hasValidCache ? cachedViews : null);
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
