import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    {
      label: "Projects Completed",
      value: 17,
      icon: "🚀"
    },
    {
      label: "Certifications Earned", 
      value: 10,
      icon: "📜"
    },
    {
      label: "Awards",
      value: 4,
      icon: "🏆"
    }
  ];

  const CounterAnimation = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      const startTime = Date.now();
      const timer = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-card/30 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-primary mb-2">
                  <CounterAnimation end={stat.value} />
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;