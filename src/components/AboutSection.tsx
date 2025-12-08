import { MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/10 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Passionate About Data & Technology
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I am deeply passionate about the world of <span className="text-primary font-medium">Data Engineering</span> and <span className="text-primary font-medium">Data Science</span>, where I get to combine technical expertise with creative problem-solving. My journey has taken me through building robust ETL pipelines, designing insightful analytics dashboards, and developing machine learning models that drive real business value.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With hands-on experience in <span className="text-primary font-medium">Cloud platforms</span> like Azure and GCP, I specialize in creating scalable data solutions that transform raw information into actionable insights. I thrive on tackling complex data challenges and am constantly exploring new technologies in the ML and AI space to stay at the forefront of innovation.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                What excites me most is the intersection of data and business strategy — understanding how well-architected data systems can empower organizations to make smarter, faster decisions. I believe in writing clean, maintainable code and building solutions that not only work today but scale for tomorrow.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Chhatarpur, India</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
