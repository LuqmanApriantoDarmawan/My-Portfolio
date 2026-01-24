import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Github } from "lucide-react";
import Portfolio from "@/assets/Portfolio-Main.png";
import RadarTeknologi from "@/assets/Radar-Teknologi.png";
import Restaurant from "@/assets/Restaurant.png";
import Traveloka from "@/assets/Traveloka.png";
import ECommerce from "@/assets/E-Commerce.png";
import Data from "@/assets/Data.png";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Web",
      description: "Website portfolio pribadi yang menampilkan semua project dan kemampuan saya dengan design modern dan responsif.",
      image: Portfolio,
      category: "Website",
      techStack: ["TypeScript", "React", "Tailwind CSS"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
        {
      title: "Computer Service Web",
      description: "Website portfolio pribadi yang menampilkan semua project dan kemampuan saya dengan design modern dan responsif.",
      image: RadarTeknologi,
      category: "Website",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
        {
      title: "Restaurant Web",
      description: "Website portfolio pribadi yang menampilkan semua project dan kemampuan saya dengan design modern dan responsif.",
      image: Restaurant,
      category: "Website",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
        {
      title: "Travel-Booking Platform",
      description: "Website portfolio pribadi yang menampilkan semua project dan kemampuan saya dengan design modern dan responsif.",
      image: Traveloka,
      category: "Web App",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "E-Commerce", 
      description: "Penelitian tentang dampak AI dalam masyarakat dengan visualisasi data dan analisis mendalam.",
      image: ECommerce,
      category: "Web App",
      techStack: ["Python", "TensorFlow", "React"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Data Visualizations",
      description: "Platform manajemen acara kampus yang memudahkan organisasi dan partisipasi mahasiswa.",
      image: Data,
      category: "UI/UX",
      techStack: ["Node.js", "MongoDB", "React"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    }
  ];

  const categories = ["All", "Web App", "Website", "UI/UX"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechBadgeVariant = (tech: string) => {
    const variants: { [key: string]: "default" | "secondary" | "outline" } = {
      "React": "default",
      "TypeScript": "secondary", 
      "Tailwind CSS": "outline",
      "Python": "default",
      "TensorFlow": "secondary",
      "Node.js": "outline",
      "MongoDB": "default"
    };
    return variants[tech] || "outline";
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
              My Projects
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              Kumpulan project yang menunjukkan kemampuan dan passion saya dalam teknologi
            </p>
            
            {/* Filter Buttons - scrollable on mobile */}
            <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 px-2 -mx-2 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  className={`flex-shrink-0 transition-all duration-300 ${
                    activeFilter === category 
                      ? "shadow-lg shadow-primary/25" 
                      : "hover:shadow-md"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>

                <CardContent className="p-4 sm:p-6">
                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant={getTechBadgeVariant(tech)}
                        className="text-[10px] sm:text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs sm:text-sm h-8 sm:h-9"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs sm:text-sm h-8 sm:h-9"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;