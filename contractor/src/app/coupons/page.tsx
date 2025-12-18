import Header from "~/components/Header";
import FooterSection from "~/components/FooterSection";
import ScrollToTop from "~/components/ScrollToTop";
import CouponsSection from "~/components/CouponsSection";

export default function CouponsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <CouponsSection />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
