import Header from "~/components/Header";
import FooterSection from "~/components/FooterSection";
import ScrollToTop from "~/components/ScrollToTop";
import ReviewsList from "~/components/ReviewsList";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <ReviewsList />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
