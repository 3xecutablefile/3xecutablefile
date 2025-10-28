import { TerminalSection } from "./TerminalSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code, Shield, Cpu, Brain, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

export const Stack = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal<HTMLDivElement>();

  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Rust", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Go", level: 70 },
        { name: "Bash", level: 85 }
      ]
    },
    {
      title: "Security Domains",
      icon: <Shield className="h-5 w-5" />,
      skills: [
        { name: "Red Team Operations", level: 85 },
        { name: "Digital Forensics", level: 75 },
        { name: "Incident Response", level: 80 },
        { name: "Malware Analysis", level: 70 },
        { name: "Threat Intelligence", level: 75 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: "Volatility", level: 80 },
        { name: "Ghidra", level: 75 },
        { name: "Burp Suite", level: 85 },
        { name: "Metasploit", level: 80 },
        { name: "Docker", level: 85 },
        { name: "n8n", level: 90 }
      ]
    },
    {
      title: "AI & Automation",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "Anthropic Claude", level: 80 },
        { name: "LangChain", level: 75 },
        { name: "Vector Databases", level: 70 }
      ]
    },
    {
      title: "Platforms",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Linux", level: 90 },
        { name: "Windows", level: 80 },
        { name: "macOS", level: 75 },
        { name: "AWS", level: 70 },
        { name: "GitHub Actions", level: 85 }
      ]
    }
  ];

  return (
    <TerminalSection command="cat stack.json | jq" id="stack" typing>
      <div ref={skillsRef} className="space-y-6">
        {categories.map((category, categoryIdx) => (
          <ScrollReveal key={category.title} delay={categoryIdx * 100}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-accent">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skillsVisible ? skill.level : 0} 
                      className="h-2 bg-background/50"
                      style={{
                        transition: `all 0.8s ease-out ${skillIdx * 0.1}s`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={500}>
          <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-border">
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Overview</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">5+ Years Experience</Badge>
              <Badge variant="secondary" className="text-xs">Security-Focused</Badge>
              <Badge variant="secondary" className="text-xs">Full-Stack Development</Badge>
              <Badge variant="secondary" className="text-xs">Automation Expert</Badge>
              <Badge variant="secondary" className="text-xs">AI Integration</Badge>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </TerminalSection>
  );
};
