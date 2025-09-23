import { Button } from "@/components/ui/button";
import profileImage from "@/assets/luqman-profile.jpg";
const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }} />)}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="relative">
              <img src={profileImage} alt="Luqman Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-primary/30 shadow-glow" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse rounded-full my-0"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Luqman Darmawan</h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-foreground font-semibold mb-6">
            Informatics Student & Tech Enthusiast
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I build exceptional and accessible digital experiences for the web.
            <br />
            Specialized in creating modern, responsive applications with clean code.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="bg-gradient-teal hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base px-8 py-6 min-w-[140px]">
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-base px-8 py-6 min-w-[140px]">
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;