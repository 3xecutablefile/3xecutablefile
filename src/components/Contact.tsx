import { TerminalSection } from "./TerminalSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github as GitHub, Shield, Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <TerminalSection command='echo "contact"' id="contact" typing>
      <div className="space-y-6">
        <p className="text-foreground/90 text-sm">
          Reach out for collaboration, research inquiries, or responsible disclosure.
        </p>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-background/50"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-background/50"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="bg-background/50"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Message *
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                rows={4}
                className="bg-background/50 resize-none"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting || isSubmitted}
              className="w-full md:w-auto"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button 
            variant="default" 
            size="default"
            asChild
          >
            <a 
              href="https://github.com/3xecutablefile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GitHub className="h-4 w-4" />
              GitHub Profile
            </a>
          </Button>

          <Button 
            variant="secondary" 
            size="default"
            asChild
          >
            <a 
              href="https://tryhackme.com/p/Mrrobottt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              TryHackMe
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Mail className="h-3 w-3 mr-1" />
            Secure contact preferred
          </Badge>
          <Badge variant="outline" className="text-xs">
            Response time: 24-48 hours
          </Badge>
        </div>

        <p className="text-muted-foreground text-xs">
          For security issues or vulnerability reports, please open a private security advisory on relevant repositories.
        </p>
      </div>
    </TerminalSection>
  );
};
