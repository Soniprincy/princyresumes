import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, BarChart3, Server, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Data",
    icon: Code,
    color: "bg-blush",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "BeautifulSoup"],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    color: "bg-lavender",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "CNN", "TensorFlow", "Keras"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    color: "bg-soft-blue",
    skills: ["PySpark", "Azure Databricks", "Dataflow", "Cloud Composer", "Azure Data Factory", "BigQuery", "BigLake"],
  },
  {
    title: "BI & Data Visualization",
    icon: BarChart3,
    color: "bg-blush",
    skills: ["Power BI", "Tableau", "Looker", "DAX", "Power Query"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "bg-lavender",
    skills: ["FastAPI", "Flask", "Streamlit", "REST API"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "bg-soft-blue",
    skills: ["Azure", "GCP", "AWS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "bg-cream",
    skills: ["Git", "Docker", "CI/CD", "GitHub", "Jupyter"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end data solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card hover:shadow-xl transition-all duration-300 border-primary/10 rounded-2xl overflow-hidden group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className={`${category.color} p-4`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-card/80 rounded-xl">
                    <category.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <CardTitle className="text-base font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
