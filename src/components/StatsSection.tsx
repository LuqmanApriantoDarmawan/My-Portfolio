import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    {
      label: "Projects Completed",
      value: 12,
      icon: "🚀"
    },
    {
      label: "Organizations Joined", 
      value: 5,
      icon: "🏢"
    },
    {
      label: "Awards",
      value: 3,
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
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border animate-counter"
                style={{ animationDelay: `${index * 0.2}s` }}
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