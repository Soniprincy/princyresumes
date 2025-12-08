import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Chicken Disease Classification",
    subtitle: "90% Accuracy",
    description: "CNN model deployed on AWS EC2 using Docker & CI/CD for automated disease detection in poultry.",
    tech: ["TensorFlow", "Keras", "Docker", "AWS EC2", "CI/CD"],
    github: "https://github.com/Soniprincy/Chicken-Disease-Classification--Project",
    color: "bg-blush",
  },
  {
    title: "Cab Booking App",
    subtitle: "Full-Stack Application",
    description: "Streamlit-based cab booking application with customer database integration and PDF invoice download functionality.",
    tech: ["Streamlit", "Python", "Database", "PDF Generation"],
    github: "https://github.com/Soniprincy/Cab-Boking-System",
    color: "bg-lavender",
  },
  {
    title: "Uber Trip ETL Pipeline",
    subtitle: "Data Engineering",
    description: "Complete ETL pipeline with data validation and Power BI integration for trips analytics and insights.",
    tech: ["ETL", "Data Validation", "Power BI", "Python"],
    github: "https://github.com/Soniprincy/Uber_Data_Engineering",
    color: "bg-soft-blue",
  },
  {
    title: "Invoice Extractor using Gemini",
    subtitle: "AI-Powered",
    description: "Extract invoice values and perform Q&A using Google's Gemini Flash model for intelligent document processing.",
    tech: ["Gemini Flash", "Python", "AI/ML", "Document Processing"],
    github: "https://github.com/Soniprincy/Invoice-Extractor-using-Gemini-1.5-Flash",
    color: "bg-blush",
  },
  {
    title: "PDF QnA Analyzer",
    subtitle: "LLM Application",
    description: "Upload PDF documents and ask questions using LLM and LangChain for intelligent document understanding.",
    tech: ["LangChain", "LLM", "Python", "NLP"],
    github: "https://github.com/Soniprincy/PDF-QnA-Analyser",
    color: "bg-lavender",
  },
  {
    title: "Amazon Sales Analytics",
    subtitle: "₹89 Million Revenue",
    description: "Comprehensive BI dashboard with KPIs and revenue breakdown analysis for e-commerce insights.",
    tech: ["Power BI", "DAX", "Data Analytics", "KPIs"],
    github: "https://github.com/Soniprincy/Amazon_Sales_AnalysisDashboard",
    color: "bg-soft-blue",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of data engineering, machine learning, and analytics projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card hover:shadow-xl transition-all duration-300 border-primary/10 rounded-2xl overflow-hidden group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 ${project.color}`} />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium mt-1">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
