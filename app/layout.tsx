import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navigation } from "@/components/Navigation";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { SmoothScroll } from "@/components/SmoothScroll";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://alejandro-lozano-lab.calivallelozano.chatgpt.site",
  ),
  title: {
    default: "Alejandro Lozano | Software, Automatización e IA",
    template: "%s | Alejandro Lozano",
  },
  description:
    "Portafolio de Alejandro Lozano Restrepo, Analista de Sistemas y Desarrollador de Software especializado en automatización, Python, RPA, APIs, QA e inteligencia artificial.",
  keywords: [
    "Alejandro Lozano",
    "desarrollador de software Cali",
    "automatización de procesos",
    "Python",
    "RPA",
    "Power Automate",
    "Zoho Creator",
    "integración de APIs",
    "QA automation",
    "AI Agents",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "es_CO",
    title: "Alejandro Lozano — Software, Automatización e IA",
    description:
      "Diseño soluciones digitales, automatizo procesos y conecto sistemas.",
    url: "/",
    siteName: "Alejandro Lozano Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Lozano — Software, Automatización e IA",
    description:
      "Desarrollo de software, automatización, integraciones y soluciones con IA.",
    images: ["/og.png"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070708",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressCountry: "CO",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "Desarrollo de software",
      "Automatización de procesos",
      "Python",
      "RPA",
      "Integración de APIs REST",
      "Quality Assurance",
      "AI Agents",
    ],
  };

  return (
    <html lang="es" className={`${geist.variable} ${mono.variable} ${display.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <LoadingScreen />
        <SmoothScroll />
        <ScrollAnimations />
        <Navigation />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
