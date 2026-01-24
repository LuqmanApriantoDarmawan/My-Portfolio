import { Mail, MapPin, User, Clock, Download } from 'lucide-react';
import luqmanFormal from '@/assets/luqman-formal.jpg';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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

  return <section id="about" ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Profile Image with fade-in from left */}
            <div 
              className={`flex justify-center lg:justify-center order-1 lg:order-none transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-16'
              }`}
            >
              <div className="relative group">
                <div className="bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-2xl shadow-2xl shadow-primary/20 transition-all duration-500 group-hover:shadow-3xl group-hover:shadow-primary/40 group-hover:scale-105">
                  {/* Mobile: 280x320, Tablet: 300x360, Desktop: 320x400 */}
                  <img 
                    src={luqmanFormal} 
                    alt="Luqman Formal Profile" 
                    className="w-[280px] h-[320px] sm:w-[300px] sm:h-[360px] lg:w-[320px] lg:h-[400px] rounded-2xl object-cover border border-border/10 transition-transform duration-500 group-hover:scale-[1.02]" 
                  />
                </div>
              </div>
            </div>
            
            {/* Content with fade-in from right */}
            <div 
              className={`space-y-6 lg:space-y-8 order-2 lg:order-none text-center lg:text-left transition-all duration-700 ease-out delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-16'
              }`}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Web Developer & UI Designer
              </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate web developer with 5 years of experience creating beautiful, functional, and 
                  user-centered digital experiences. I am always looking to learn new technologies and 
                  improve my skills.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in front-end development and a keen eye for design, I create 
                  websites that not only look great but also provide exceptional user experiences. I'm 
                  dedicated to writing clean, optimized code and using modern development practices.
                </p>
              </div>
              
              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <User className="text-primary w-5 h-5" />
                    <div>
                      <p className="text-sm text-primary font-medium">Name:</p>
                      <p className="text-foreground font-semibold">Luqman Aprianto Darmawan</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary w-5 h-5" />
                    <div>
                      <p className="text-sm text-primary font-medium">Email:</p>
                      <p className="text-foreground font-semibold">luqmanfn17@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary w-5 h-5" />
                    <div>
                      <p className="text-sm text-primary font-medium">Location:</p>
                      <p className="text-foreground font-semibold">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary w-5 h-5" />
                    <div>
                      <p className="text-sm text-primary font-medium">Availability:</p>
                      <p className="text-foreground font-semibold">Freelance / Full-time</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Let's Talk
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="/cv.pdf" download="Luqman_Darmawan_CV.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;