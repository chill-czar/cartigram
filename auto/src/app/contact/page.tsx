import Header from "~/components/Header";
import FooterSection from "~/components/FooterSection";
import ScrollToTop from "~/components/ScrollToTop";
import ContactSection from "~/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <ContactSection />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
