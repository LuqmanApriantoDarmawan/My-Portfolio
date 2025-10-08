const JourneySection = () => {
  const journeySteps = [
    {
      year: "2021",
      event: "Studied Software Engineering at SMKN 5 Tangerang"
    },
    {
      year: "2021", 
      event: "Started building multiple web projects and exploring UI/UX design"
    },
    {
      year: "2022",
      event: "Completed an internship at Radar Teknologi Komputer as a Web Developer"
    },
    {
      year: "2023",
      event: "Earned a Certificate of Competence from BNSP in the Junior Office Operator category"
    },
    {
      year: "2023",
      event: "Began studying Information Systems at Gunadarma University"
    },
    {
      year: "2024",
      event: "Joined BEM FIKTI and Google Developer Groups on Campus"
    },
    {
      year: "2025",
      event: "Exploring AI & Big Data applications"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              My Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-teal mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-px timeline-line"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div 
                  key={step.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up group/journey`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-teal rounded-full flex items-center justify-center font-bold text-primary-foreground relative z-10 shadow-glow ml-0 md:ml-0 transition-all duration-500 group-hover/journey:scale-110 group-hover/journey:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
                    <span className="text-sm">{step.year}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  }`}>
                    <div className="bg-card p-6 rounded-lg card-hover border-2 border-primary/20 hover:border-primary/60 transition-all duration-500">
                      <p className="text-foreground/90 text-lg leading-relaxed font-medium">
                        {step.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;