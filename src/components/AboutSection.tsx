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
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Download CV
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Reach Me
              </button>
            </div>
            
            {/* Skills Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-foreground">Skills & Expertise</h3>
              
              {/* Programming Languages */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Programming Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
                    { name: 'Python', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
                    { name: 'Java', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
                    { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
                    { name: 'C++', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' }
                  ].map((skill) => (
                    <span key={skill.name} className={`px-4 py-2 rounded-full border ${skill.color} font-medium`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Frameworks & Libraries */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'React', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
                    { name: 'Node.js', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
                    { name: 'Express', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
                    { name: 'Next.js', color: 'bg-white/20 text-white border-white/30' },
                    { name: 'Django', color: 'bg-green-600/20 text-green-400 border-green-600/30' }
                  ].map((skill) => (
                    <span key={skill.name} className={`px-4 py-2 rounded-full border ${skill.color} font-medium`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tools & Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Git', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
                    { name: 'Docker', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
                    { name: 'MongoDB', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
                    { name: 'PostgreSQL', color: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
                    { name: 'AWS', color: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30' },
                    { name: 'Firebase', color: 'bg-red-500/20 text-red-300 border-red-500/30' }
                  ].map((skill) => (
                    <span key={skill.name} className={`px-4 py-2 rounded-full border ${skill.color} font-medium`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Soft Skills */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Soft Skills</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Leadership', icon: '👥' },
                    { name: 'Problem Solving', icon: '🧩' },
                    { name: 'Team Work', icon: '🤝' },
                    { name: 'Communication', icon: '💬' }
                  ].map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="bg-card p-4 rounded-lg card-hover text-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <h5 className="font-medium text-foreground text-sm">{skill.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;