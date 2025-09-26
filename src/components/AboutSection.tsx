import { Mail, MapPin, User, Clock } from 'lucide-react';
import luqmanFormal from '@/assets/luqman-formal.jpg';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative animate-fade-in">
                <img 
                  src={luqmanFormal} 
                  alt="Luqman Formal Profile" 
                  className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl object-cover shadow-2xl border border-border/20" 
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                  Web Developer & UI Designer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate web developer with 5 years of experience creating beautiful, functional, and 
                  user-centered digital experiences. I am always looking to learn new technologies and 
                  improve my skills.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  With a strong foundation in front-end development and a keen eye for design, I create 
                  websites that not only look great but also provide exceptional user experiences. I'm 
                  dedicated to writing clean, optimized code and using modern development practices.
                </p>
              </div>
              
              {/* Info Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
                  <p className="text-sm text-primary font-medium mb-2">Name:</p>
                  <p className="text-foreground font-semibold">Luqman Aprianto Darmawan</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
                  <p className="text-sm text-primary font-medium mb-2">Email:</p>
                  <p className="text-foreground font-semibold text-sm">luqmanfn17@gmail.com</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
                  <p className="text-sm text-primary font-medium mb-2">Location:</p>
                  <p className="text-foreground font-semibold">Jakarta, Indonesia</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300">
                  <p className="text-sm text-primary font-medium mb-2">Availability:</p>
                  <p className="text-foreground font-semibold">Freelance / Full-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;