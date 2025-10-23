import { Mail, MapPin, User, Clock, Download } from 'lucide-react';
import luqmanFormal from '@/assets/luqman-formal.jpg';
import { Button } from '@/components/ui/button';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-none">
              <div className="relative group">
                <div className="bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-xl shadow-2xl shadow-primary/20 transition-all duration-500 group-hover:shadow-3xl group-hover:shadow-primary/40 group-hover:scale-105">
                  <img src={luqmanFormal} alt="Luqman Formal Profile" className="w-72 h-80 lg:w-80 lg:h-96 rounded-xl object-cover border border-border/10 transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-none">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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