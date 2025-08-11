import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Target, BookOpen } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "50 Curated Business Ideas",
    description: "From creative arts to tech solutions, each idea is designed to match different personality types and interests."
  },
  {
    icon: Users,
    title: "Personality-Based Matching",
    description: "Whether your child is outgoing or introverted, hands-on or imaginative, we help them find their perfect business fit."
  },
  {
    icon: Target,
    title: "Real-World Skills",
    description: "Learn essential life skills like communication, budgeting, problem-solving, and customer service through practical application."
  },
  {
    icon: BookOpen,
    title: "Self-Discovery Journey",
    description: "More than business ideas - it's a path to building confidence, independence, and leadership in young minds."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📚 What's Inside
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            More Than Just a Summer Activity Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Raising Young CEOs" is a launchpad for self-discovery, confidence, and leadership. 
            Inside, kids will find 50 carefully curated business ideas tailored to different personality types.
          </p>
        </div>

        {/* Visual preview image */}
        <figure className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto">
          <img
            src="/lovable-uploads/4bccbba9-5620-4c23-b980-9aee3f179278.png"
            alt="Families exploring the Raising Young CEOs book together"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </figure>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Perfect for Ages 7-14
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Whether your child is outgoing or introverted, hands-on or imaginative, this book helps them 
            discover their unique strengths and turn them into action. Each idea is practical, fun, and 
            easy to start, encouraging kids to explore what they're good at while learning real-world skills.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              Communication Skills
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              Budgeting & Finance
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              Problem Solving
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              Customer Service
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              Leadership
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

