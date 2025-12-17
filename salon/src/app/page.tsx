import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { SpecialPricing } from "../components/SpecialPricing";
import { Contact } from "../components/Contact";
import ScrollToTop from "~/components/ScrollToTop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <SpecialPricing />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
