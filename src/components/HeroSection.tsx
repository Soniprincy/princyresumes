import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import princyPhoto from "@/assets/princy-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blush/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-soft-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo with animated frame */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in">
            <div className="relative floating">
              <div className="photo-frame p-1.5 rounded-full">
                <div className="bg-card rounded-full p-1">
                  <img
                    src={princyPhoto}
                    alt="Princy Soni - Data Engineer"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-lavender rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-soft-blue rounded-full animate-pulse delay-500" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm Princy Soni
            </h1>
            <p
              className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Data Engineer & Analytics Enthusiast turning raw data into meaningful insights.
            </p>
            <p
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              I am a Data Engineer and Data Science enthusiast who loves transforming messy data into clear, meaningful business insights. I enjoy working across ETL pipelines, analytics dashboards, backend APIs, and machine learning models to deliver reliable, scalable and user-friendly data solutions.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#projects">View My Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary/5"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
