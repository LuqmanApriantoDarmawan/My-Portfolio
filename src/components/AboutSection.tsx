const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              About Me
            </h2>
            
            <div className="w-20 h-1 bg-gradient-teal mx-auto mb-12"></div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I am a passionate Informatics student who loves technology, history, and continuous learning. 
              Skilled in programming and active in campus organizations.
            </p>
            
            {/* Skills grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { name: 'Programming', icon: '💻' },
                { name: 'Research', icon: '🔬' },
                { name: 'Leadership', icon: '👥' },
                { name: 'Learning', icon: '📚' }
              ].map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-card p-6 rounded-lg card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;