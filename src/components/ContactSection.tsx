import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_tizmhah',
        'template_xrgmifq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Luqman',
        },
        'BMGmdpVzZbXOgoK-f'
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-teal mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for collaboration, project ideas, or a friendly chat!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Let's Connect</h3>
              
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'Email', value: 'luqmanfn17@gmail.com', link: 'mailto:luqmanfn17@gmail.com' },
                  { icon: '💼', label: 'LinkedIn', value: 'luqman-aprianto-darmawan', link: 'https://www.linkedin.com/in/luqman-aprianto-darmawan/' },
                  { icon: '🐙', label: 'GitHub', value: 'LuqmanApriantoDarmawan', link: 'https://github.com/LuqmanApriantoDarmawan' },
                  { icon: '📍', label: 'Location', value: 'Tangerang, Indonesia' }
                ].map((contact, index) => (
                  <div 
                    key={contact.label}
                    className="flex items-center space-x-4 p-4 bg-card rounded-lg card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-glow">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                
                <div className="animate-glow" style={{ animationDelay: '0.1s' }}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                
                <div className="animate-glow" style={{ animationDelay: '0.2s' }}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-teal hover:shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;