import { useState } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certificates = [
  {
    name: "PG Certification in Data Science & AI",
    platform: "IIT Roorkee & Intellipaat",
    domain: "Data Science & AI",
    link: "https://tih.iitr.ac.in/certificate/intellipaat/IPTIH2504456.jpg",
    color: "bg-blush",
  },
  {
    name: "Python Certificate",
    platform: "HackerRank",
    domain: "Programming",
    link: "https://www.hackerrank.com/certificates/iframe/604e3fef82e0",
    color: "bg-lavender",
  },
  {
    name: "Problem Solving Certificate",
    platform: "HackerRank",
    domain: "Problem Solving",
    link: "https://www.hackerrank.com/certificates/9ee0d39f49bf",
    color: "bg-soft-blue",
  },
  {
    name: "Power BI Certification",
    platform: "Intellipaat",
    domain: "Business Intelligence",
    link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEzNDIxJnU9MjM1MzM3JmV4dD0x",
    color: "bg-blush",
  },
  {
    name: "Data Science Certification",
    platform: "Intellipaat",
    domain: "Data Science",
    link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEyMzgwJnU9MjM1MzM3JmV4dD0x",
    color: "bg-lavender",
  },
  {
    name: "MS SQL Certification",
    platform: "Intellipaat",
    domain: "Database",
    link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEzMTY3JnU9MjM1MzM3JmV4dD0x",
    color: "bg-soft-blue",
  },
];

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple rounded-full mx-auto" />
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {certificates.map((cert, index) => (
                  <div key={cert.name} className="w-full flex-shrink-0 px-2">
                    <CertificateCard cert={cert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/20 hover:bg-primary/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/20 hover:bg-primary/5"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({ cert }: { cert: typeof certificates[0] }) => (
  <Card className="bg-card hover:shadow-xl transition-all duration-300 border-primary/10 rounded-2xl overflow-hidden group hover:-translate-y-1">
    <div className={`h-2 ${cert.color}`} />
    <CardContent className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${cert.color}`}>
          <Award className="w-6 h-6 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
            {cert.name}
          </h3>
          <p className="text-muted-foreground text-sm">{cert.platform}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="bg-muted text-muted-foreground rounded-full">
          {cert.domain}
        </Badge>
        <Badge className="bg-green-100 text-green-700 border-0 rounded-full text-xs">
          Verified
        </Badge>
      </div>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="w-full mt-4 rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary"
      >
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Certificate
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default CertificatesSection;
