import type { Metadata } from "next";
import { env } from "@/lib/env";

export const SITE = {
  name: "Nirav Thakur",
  title: "Nirav Thakur — Frontend Developer & UI/UX Designer",
  description:
    "Frontend developer and UI/UX designer in Mumbai, India, building fast, modern web experiences with Next.js, React, and TypeScript.",
  shortDescription:
    "Scalable, delightful web experiences. Engineering + design + UI/UX.",
  locale: "en_IN",
  email: "niravthakur@icloud.com",
  jobTitle: "Frontend Developer & UI/UX Designer",
  location: { city: "Mumbai", country: "IN" },
  keywords: [
    "Nirav Thakur",
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Mumbai",
  ],
  socials: [
    "https://github.com/Niravcanvas",
    "https://www.linkedin.com/in/nirav-thakur-9b5892225/",
    "https://www.figma.com/@Niravcanvas",
    "https://www.instagram.com/blurrredcanvas/",
    "https://in.pinterest.com/blurredoutframes/",
    "https://www.behance.net/Niravcanvas",
  ],
} as const;

/** Absolute site origin, resolved once from validated env. */
export function siteUrl(): string {
  return env().NEXT_PUBLIC_SITE_URL;
}

/**
 * Root metadata applied on the layout. Per-page titles use the template
 * (`"%s · Nirav Thakur"`); the home page inherits the default.
 */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl()),
    title: { default: SITE.title, template: `%s · ${SITE.name}` },
    description: SITE.description,
    keywords: [...SITE.keywords],
    authors: [{ name: SITE.name, url: siteUrl() }],
    creator: SITE.name,
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "website",
      url: siteUrl(),
      siteName: SITE.name,
      title: SITE.title,
      description: SITE.shortDescription,
      locale: SITE.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.title,
      description: SITE.shortDescription,
    },
  };
}

/** Per-page metadata helper (for future routes). */
export function buildMeta(opts: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
}): Metadata {
  const { title, description, path = "/", keywords, noindex } = opts;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url: path,
      title: title ?? SITE.title,
      description: description ?? SITE.shortDescription,
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE.title,
      description: description ?? SITE.shortDescription,
    },
  };
}

/** JSON-LD: the person this portfolio represents. */
export function personLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: siteUrl(),
    jobTitle: SITE.jobTitle,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressCountry: SITE.location.country,
    },
    sameAs: [...SITE.socials],
  };
}

/** JSON-LD: the website itself. */
export function websiteLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: siteUrl(),
  };
}
