export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://alejandro-lozano-lab.calivallelozano.chatgpt.site";

export const assetPath = (path: string) => `${basePath}${path}`;
