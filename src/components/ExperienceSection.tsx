import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Scientist Intern",
    company: "YoShops.com",
    period: "Sep 2025 – Nov 2025",
    achievements: [
      "Built Streamlit Cab Booking App with database integration and PDF invoice generation",
      "Developed Amazon Order Analytics & Power BI Dashboards for business insights",
      "Built Python Web Scraper and converted to standalone EXE application",
    ],
    color: "bg-primary",
  },
  {
    title: "Data Science Intern",
    company: "Intellipaat",
    period: "2023 – 2024",
    achievements: [
      "Developed Customer Churn Prediction Model achieving 88% accuracy",
      "Built MNIST Digit Recognition system with 91% accuracy",
      "Created BI Reports improving business decisions by ~87%",
      "Optimized data processing time by 40% through pipeline improvements",
    ],
    color: "bg-purple",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple to-primary/20 hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute hidden md:block w-4 h-4 rounded-full ${exp.color} border-4 border-background shadow-lg ${
                    index % 2 === 0 ? "right-0 md:-right-2" : "left-0 md:-left-2"
                  } top-6`}
                />

                <Card className="bg-card hover:shadow-xl transition-all duration-300 border-primary/10 rounded-2xl overflow-hidden">
                  <div className={`h-1 ${exp.color}`} />
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-xl ${exp.color}/10`}>
                        <Briefcase className="w-5 h-5 text-foreground" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
