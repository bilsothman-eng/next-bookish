"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PreviewSampleButton() {
  const [currentImage, setCurrentImage] = useState(0);

  // Liste des images de preview dans /uploads
  const previewImages = [
    "/uploads/page1.png",
    "/uploads/page2.png",
    "/uploads/page3.png",
    "/uploads/page4.png"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % previewImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + previewImages.length) % previewImages.length);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20">
          Preview Sample
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[85vh] max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Book Preview - Page {currentImage + 1} of {previewImages.length}</DialogTitle>
        </DialogHeader>
        <div className="relative h-[calc(85vh-5rem)] flex items-center justify-center bg-gray-50">
          {/* Image actuelle */}
          <img
            src={previewImages[currentImage]}
            alt={`Book preview page ${currentImage + 1}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />

          {/* Bouton précédent */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevImage}
            disabled={previewImages.length <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Bouton suivant */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextImage}
            disabled={previewImages.length <= 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicateurs de pagination */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {previewImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground border-white/30">
              🚀 Empowering Young Entrepreneurs
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Raising Young CEOs
            </h1>

            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-2 font-medium">
              50 Business Ideas Matched to Your Child's
            </p>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 font-medium">
              Personality and Passions
            </p>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              More than just a summer activity guide — it's a launchpad for self-discovery,
              confidence, and leadership. Perfect for ages 7-14.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild variant="cta" size="lg" className="text-lg px-8 py-3">
                <a
                  href="https://raisingyoungceos.lemonsqueezy.com/buy/d4edfe9f-87de-4501-8b8c-02d26a066912"
                  data-ls-modal="true"
                  aria-label="Buy Raising Young CEOs for $15"
                >
                  Get Your Copy Now - $19.99
                </a>
              </Button>
              <PreviewSampleButton />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />
                ))}
              </div>
              <span className="text-sm">4.9/5 from 500+ parents</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/lovable-uploads/100f4029-4c77-46f0-b622-bcb68622441e.png"
                alt="Raising Young CEOs book cover"
                className="w-full max-w-md mx-auto shadow-2xl rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

