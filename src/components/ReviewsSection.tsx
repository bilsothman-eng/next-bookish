import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Mother of 2",
    rating: 5,
    text: "This book transformed how my 10-year-old thinks about business. She started her own lemonade stand with a twist - selling herbal teas! The personality matching was spot on.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Father & Entrepreneur", 
    rating: 5,
    text: "As a business owner myself, I was impressed by how Othie breaks down complex concepts for kids. My son is now planning his first 'company' at age 8!",
    avatar: "MC"
  },
  {
    name: "Lisa Thompson",
    role: "Educator",
    rating: 5,
    text: "I use this with my students aged 7-12. The way it connects personality types to business ideas is brilliant. It's educational and incredibly engaging.",
    avatar: "LT"
  },
  {
    name: "David Rodriguez",
    role: "Parent & Coach",
    rating: 5,
    text: "Perfect for building confidence in shy kids. My daughter was hesitant at first, but now she's passionate about her pet-sitting business idea.",
    avatar: "DR"
  },
  {
    name: "Amanda Wilson",
    role: "Homeschool Mom",
    rating: 5,
    text: "This is now part of our curriculum! Real-world skills like budgeting and customer service, presented in a way kids actually enjoy.",
    avatar: "AW"
  },
  {
    name: "James Parker",
    role: "Father of 3",
    rating: 5,
    text: "All three of my kids found ideas that matched their personalities perfectly. From creative arts to tech solutions - there's something for every child.",
    avatar: "JP"
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of families who have discovered their child's entrepreneurial potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-accent" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 500+ verified reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

