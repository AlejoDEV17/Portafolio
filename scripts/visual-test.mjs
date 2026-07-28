import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.PORTFOLIO_URL ?? "http://127.0.0.1:3000";
const executablePath =
  process.env.BROWSER_PATH ??
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const output = ".tmp-visual";

await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  executablePath,
  headless: true,
});

const results = [];
for (const scenario of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({
    viewport: { width: scenario.width, height: scenario.height },
    deviceScaleFactor: 1,
  });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  const response = await page.goto(baseUrl, {
    waitUntil: "networkidle",
    timeout: 45_000,
  });
  await page.waitForTimeout(1_800);

  const title = await page.title();
  const h1Text = await page.locator("h1, .hero__title").first().innerText();
  const sections = await page.locator("main section").count();
  const cvStatus = await page
    .request
    .get(`${baseUrl}/hoja-de-vida-alejandro-lozano.pdf`)
    .then((res) => res.status());
  const bodyWidth = await page.locator("body").evaluate((body) => body.scrollWidth);

  const pageHeight = await page.locator("body").evaluate((body) => body.scrollHeight);
  for (let y = 0; y < pageHeight; y += Math.max(520, scenario.height * 0.72)) {
    await page.evaluate((position) => window.scrollTo(0, position), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(350);

  await page.screenshot({
    path: `${output}/${scenario.name}-full.png`,
    fullPage: true,
  });

  await page.locator("#proyectos").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `${output}/${scenario.name}-projects.png`,
    fullPage: false,
  });

  if (scenario.name === "mobile") {
    await page.locator(".nav__menu").click();
    const mobileMenuVisible = await page.locator(".mobile-menu").isVisible();
    results.push({ scenario: scenario.name, mobileMenuVisible });
  }

  results.push({
    scenario: scenario.name,
    status: response?.status(),
    title,
    h1Text: h1Text.replaceAll("\n", " "),
    sections,
    cvStatus,
    viewportWidth: scenario.width,
    bodyWidth,
    horizontalOverflow: bodyWidth > scenario.width,
    consoleErrors,
  });
  await page.close();
}

await browser.close();
process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
