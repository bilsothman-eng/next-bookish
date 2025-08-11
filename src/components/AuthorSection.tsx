import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AuthorSection = () => {
  return (
    <section id="author" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              📖 Meet the Author
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Othie Farrow
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate advocate for youth empowerment and creativity
            </p>
          </div>

          <Card className="bg-card border-border shadow-warm">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20 shadow-glow">
                    <img
                      src="/lovable-uploads/4bccbba9-5620-4c23-b980-9aee3f179278.png"
                      alt="Author portrait holding the book"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-card-foreground leading-relaxed mb-6">
                    <strong>Othie Farrow</strong> is a passionate advocate for youth empowerment and creativity. 
                    A father of three and former educator turned entrepreneur, he has spent over a decade 
                    helping families foster confidence, independence, and innovation in their children.
                  </p>
                  
                  <p className="text-card-foreground leading-relaxed mb-6">
                    Blending his background in business with a deep understanding of childhood development, 
                    Othie writes with warmth, clarity, and vision. "Raising Young CEOs" is his call to action 
                    for a new generation of purpose-driven kids — and the parents who believe in their potential.
                  </p>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Othie's Mission:</h4>
                    <p className="text-muted-foreground italic">
                      "Every child has unique gifts waiting to be discovered. My goal is to help parents 
                      and educators unlock that potential through practical, engaging activities that build 
                      real-world skills and unshakeable confidence."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;

