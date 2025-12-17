import Link from "next/link";
import Hero from "~/components/Hero";
import AboutUs from "~/components/AboutUs";
import Services from "~/components/Services";
import MenuTabs from "~/components/MenuTabs";

import Gallery from "~/components/Gallery";
import CouponSection from "~/components/CouponSection";
import TestimonialSection from "~/components/TestimonialSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <MenuTabs />
      <Gallery />
      <CouponSection />
      <TestimonialSection />
    </main>
  );
}
