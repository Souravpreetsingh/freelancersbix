import { ChatBot } from "@/components/chat/ChatBot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/motion/PageTransition";

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
      <PageTransition>
        <main
          id="main-content"
          className="w-full pt-24 min-h-[calc(100vh-96px)] bg-[linear-gradient(to_bottom,#F6F0E4_0px,#F6F0E4_96px,#FBF8F1_96px)]"
        >
          {children}
        </main>
      </PageTransition>
      <Footer />
      <ChatBot />
    </>
  );
}
