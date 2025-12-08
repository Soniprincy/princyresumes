import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "PG Certification in Data Science & AI",
    institution: "IIT Roorkee & Intellipaat",
    period: "2024 – 2025",
    color: "bg-primary",
  },
  {
    degree: "Masters of Arts, Economics",
    institution: "MCBU Chhatarpur",
    period: "2023 – 2025",
    color: "bg-purple",
  },
  {
    degree: "Bachelor of Arts, Economics",
    institution: "MCBU Chhatarpur",
    period: "2020 – 2023",
    color: "bg-soft-blue",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="bg-card hover:shadow-xl transition-all duration-300 border-primary/10 rounded-2xl overflow-hidden hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-1 ${edu.color}`} />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${edu.color}/10`}>
                    <GraduationCap className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
