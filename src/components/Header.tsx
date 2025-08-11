import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">YC</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Raising Young CEOs</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
          <a href="#author" className="text-muted-foreground hover:text-foreground transition-colors">
            Author
          </a>
        </nav>

        <Button asChild variant="cta" size="sm">
          <a
            href="https://raisingyoungceos.lemonsqueezy.com/buy/d4edfe9f-87de-4501-8b8c-02d26a066912"
            data-ls-modal="true"
            aria-label="Buy Raising Young CEOs for $15"
          >
            Get Your Copy
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;

