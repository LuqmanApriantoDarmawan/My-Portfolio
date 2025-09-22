const ProjectsSection = () => {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Personal branding and showcase.",
      icon: "🌐"
    },
    {
      name: "AI Research Paper", 
      desc: "Thesis on AI impact in society.",
      icon: "🤖"
    },
    {
      name: "Campus Event Platform",
      desc: "Organized orientation system.",
      icon: "🎓"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-teal mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className="group animate-fade-in card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card p-8 rounded-xl border border-border relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Details</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;