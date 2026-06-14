import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Optional R2/CDN public host for images served from Cloudflare R2.
 * Derived from NEXT_PUBLIC_CDN_URL so the allowlist stays in sync across envs.
 */
const cdnHost = (() => {
  const url = process.env.NEXT_PUBLIC_CDN_URL;
  if (!url) return undefined;
  try {
    return new URL(url).hostname;
  } catch {
    return undefined;
  }
})();

// Content-Security-Policy.
// Production is strict: scripts are 'self' only (no unsafe-inline/eval).
// `style-src` is relaxed to 'unsafe-inline' because the UI uses React inline
// `style={{}}` attributes and Tailwind's injected styles — styles are far lower
// risk than scripts, which stay locked down. Dev needs eval/inline for HMR.
const csp = [
  `default-src 'self'`,
  `base-uri 'self'`,
  `frame-ancestors 'self'`,
  `object-src 'none'`,
  `form-action 'self'`,
  `img-src 'self' data: blob: https://cdn.jsdelivr.net https://simpleicons.org https://upload.wikimedia.org https://cdn.coollabs.io${cdnHost ? ` https://${cdnHost}` : ""}`,
  `font-src 'self' data:`,
  `connect-src 'self'`,
  `style-src 'self' 'unsafe-inline'`,
  isDev ? `script-src 'self' 'unsafe-inline' 'unsafe-eval'` : `script-src 'self'`,
  `worker-src 'self' blob:`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/gh/devicons/**" },
      { protocol: "https", hostname: "simpleicons.org", pathname: "/icons/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/wikipedia/**" },
      { protocol: "https", hostname: "cdn.coollabs.io", pathname: "/assets/**" },
      ...(cdnHost
        ? [{ protocol: "https" as const, hostname: cdnHost, pathname: "/**" }]
        : []),
    ],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
