import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Rendered only when NEXT_PUBLIC_GA_ID is set, so local and preview builds stay
 * script-free. Loaded with `afterInteractive` so it never blocks hydration. The
 * CSP in next.config.ts opens the required Google origins under the same env
 * var, so the policy stays strict whenever GA is not configured.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
