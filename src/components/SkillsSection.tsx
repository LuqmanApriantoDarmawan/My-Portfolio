import { useState } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { 
  Code, 
  Palette, 
  Server,
  Database,
  GitBranch,
  Globe,
  Figma,
  Smartphone,
  Cloud,
  Terminal
} from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { 
          name: 'HTML/CSS', 
          level: 95, 
          icon: <Globe className="w-4 h-4" />,
          tooltip: 'Used in 50+ projects | Expert level'
        },
        { 
          name: 'JavaScript', 
          level: 90, 
          icon: <Code className="w-4 h-4" />,
          tooltip: 'ES6+, Modern JS | Advanced level'
        },
        { 
          name: 'React', 
          level: 85, 
          icon: <Code className="w-4 h-4" />,
          tooltip: 'Hooks, Context, Redux | Advanced level'
        },
        { 
          name: 'TypeScript', 
          level: 80, 
          icon: <Code className="w-4 h-4" />,
          tooltip: 'Type-safe development | Intermediate level'
        },
        { 
          name: 'Next.js', 
          level: 75, 
          icon: <Globe className="w-4 h-4" />,
          tooltip: 'SSR, SSG, API routes | Intermediate level'
        }
      ]
    },
    {
      title: 'UI/UX Design',
      color: 'from-purple-500 to-pink-500',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { 
          name: 'Figma', 
          level: 85, 
          icon: <Figma className="w-4 h-4" />,
          tooltip: 'Design systems, prototyping | Advanced level'
        },
        { 
          name: 'Responsive Design', 
          level: 90, 
          icon: <Smartphone className="w-4 h-4" />,
          tooltip: 'Mobile-first approach | Expert level'
        },
        { 
          name: 'Tailwind CSS', 
          level: 88, 
          icon: <Palette className="w-4 h-4" />,
          tooltip: 'Utility-first CSS | Advanced level'
        },
        { 
          name: 'UI Animation', 
          level: 75, 
          icon: <Smartphone className="w-4 h-4" />,
          tooltip: 'Framer Motion, CSS animations | Intermediate level'
        }
      ]
    },
    {
      title: 'Backend & Tools',
      color: 'from-green-500 to-teal-500',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { 
          name: 'Node.js', 
          level: 75, 
          icon: <Server className="w-4 h-4" />,
          tooltip: 'Express, API development | Intermediate level'
        },
        { 
          name: 'Git/GitHub', 
          level: 85, 
          icon: <GitBranch className="w-4 h-4" />,
          tooltip: 'Version control, CI/CD | Advanced level'
        },
        { 
          name: 'RESTful APIs', 
          level: 80, 
          icon: <Globe className="w-4 h-4" />,
          tooltip: 'API design, integration | Intermediate level'
        },
        { 
          name: 'Firebase', 
          level: 70, 
          icon: <Database className="w-4 h-4" />,
          tooltip: 'Authentication, database | Intermediate level'
        }
      ]
    }
  ];

  return (
    <TooltipProvider>
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                My <span className="text-primary">Skills</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are my skills and technologies I've been working with recently
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <div
                            className="group/skill cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="text-muted-foreground group-hover/skill:text-primary transition-colors duration-300">
                                  {skill.icon}
                                </div>
                                <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-sm font-bold text-primary">
                                {skill.level}%
                              </span>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform ${
                                  hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scale-105' : ''
                                }`}
                                style={{ 
                                  width: `${skill.level}%`,
                                  animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                                }}
                              ></div>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{skill.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default SkillsSection;