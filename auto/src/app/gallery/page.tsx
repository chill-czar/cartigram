import Header from "~/components/Header";
import FooterSection from "~/components/FooterSection";
import ScrollToTop from "~/components/ScrollToTop";
import GalleryGrid from "~/components/GalleryGrid";
import VideoSection from "~/components/VideoSection";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <GalleryGrid />
      <VideoSection />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
