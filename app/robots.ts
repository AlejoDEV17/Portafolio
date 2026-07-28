import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://alejodev17.github.io/Mi_portafolio_web/sitemap.xml",
  };
}
