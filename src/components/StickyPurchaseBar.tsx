"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const StickyPurchaseBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://cdn.lemonsqueezy.com/lemon.js"]'
    );
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://cdn.lemonsqueezy.com/lemon.js";
      s.defer = true;
      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-hero border-t border-white/20 shadow-2xl transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/100f4029-4c77-46f0-b622-bcb68622441e.png"
              alt="Raising Young CEOs book cover thumbnail"
              className="w-12 h-16 object-cover rounded shadow-md"
              loading="lazy"
            />
            <div>
              <h3 className="font-bold text-primary-foreground text-sm lg:text-base">
                Raising Young CEOs
              </h3>
              <div className="flex items-center gap-2 text-primary-foreground/80 text-xs lg:text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-current text-yellow-300"
                    />
                  ))}
                </div>
                <span>4.9/5 • 500+ reviews</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-primary-foreground/80 text-sm line-through">
                $29.99
              </div>
              <div className="text-primary-foreground font-bold text-lg">
                $15.00
              </div>
            </div>

            <a
              href="https://raisingyoungceos.lemonsqueezy.com/buy/d4edfe9f-87de-4501-8b8c-02d26a066912"
              data-ls-modal="true"
              aria-label="Buy Raising Young CEOs for $15"
            >
              <Button
                variant="cta"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Get Your Copy</span>
                <span className="sm:hidden">Buy Now</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPurchaseBar;

