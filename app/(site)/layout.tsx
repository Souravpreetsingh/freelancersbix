import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-space-sm focus:left-space-sm focus:z-[60] focus:rounded-lg focus:bg-whiteout focus:px-space-md focus:py-space-sm focus:font-label-lg focus:text-label-lg focus:text-ink"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
