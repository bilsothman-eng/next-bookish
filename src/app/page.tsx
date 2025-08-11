import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import AuthorSection from "@/components/AuthorSection";
import StickyPurchaseBar from "@/components/StickyPurchaseBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <AuthorSection />
      <StickyPurchaseBar />
    </div>
  );
}
