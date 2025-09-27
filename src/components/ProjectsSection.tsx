import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Github } from "lucide-react";
import Portfolio from "@/assets/Portfolio-Main.png";
import RadarTeknologi from "@/assets/Radar-Teknologi.png";
import Restaurant from "@/assets/Restaurant.png";
import Traveloka from "@/assets/Traveloka.png";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Website",
      description: "Website portfolio pribadi yang menampilkan semua project dan kemampuan saya dengan design modern dan responsif.",
      image: Portfolio,
      category: "Website",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
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
      title: "Restaurant Website",
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
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "AI Research Dashboard", 
      description: "Penelitian tentang dampak AI dalam masyarakat dengan visualisasi data dan analisis mendalam.",
      image: Traveloka,
      category: "Web App",
      techStack: ["Python", "TensorFlow", "React"],
      codeUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Campus Event Platform",
      description: "Platform manajemen acara kampus yang memudahkan organisasi dan partisipasi mahasiswa.",
      image: Traveloka,
      category: "Web App",
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Kumpulan project yang menunjukkan kemampuan dan passion saya dalam teknologi
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={`transition-all duration-300 ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group animate-fade-in overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
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

                <CardContent className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant={getTechBadgeVariant(tech)}
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
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