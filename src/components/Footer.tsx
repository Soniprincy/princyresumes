import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 – Developed with dedication by{" "}
            <span className="text-primary font-medium">Princy Soni</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
