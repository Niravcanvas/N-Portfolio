import localFont from "next/font/local";

// next/font/local statically analyses this array — `path` must be a plain
// string literal (no variables / template strings).
/** Self-hosted Helvetica Neue — exposed as the `--font-sans` theme variable. */
export const helvetica = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueThin.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueUltraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueUltraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueLight.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueLightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueRoman.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueMedium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueMediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueBold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueBoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueHeavy.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueHeavyItalic.woff2", weight: "800", style: "italic" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueBlack.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/HelveticaNeue/HelveticaNeueBlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});
