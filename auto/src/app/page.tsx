import Header from "~/components/Header";
import Hero from "~/components/Hero";
import AboutSection from "~/components/AboutSection";
import ServicesSection from "~/components/ServicesSection";
import MoreServicesSection from "~/components/MoreServicesSection";
import TestimonialsSection from "~/components/TestimonialsSection";
import FooterSection from "~/components/FooterSection";
import ScrollToTop from "~/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MoreServicesSection />
      <TestimonialsSection />
      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
