import Link from "next/link";
import Hero from "~/components/Hero";
import AboutUs from "~/components/AboutUs";
import Services from "~/components/Services";
import MenuTabs from "~/components/MenuTabs";

export default function HomePage() {
  return <main className="min-h-screen">
    <Hero />
    <AboutUs />
    <Services />
    <MenuTabs />
  </main>;
}
