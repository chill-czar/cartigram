import Header from "~/components/Header";
import FooterSection from "~/components/FooterSection";
import ScrollToTop from "~/components/ScrollToTop";
import ServicesList from "~/components/ServicesList";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <ServicesList />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
