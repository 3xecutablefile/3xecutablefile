import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const Hero = () => {
  const badges = [
    { label: "Rust", variant: "default" as const },
    { label: "TypeScript", variant: "secondary" as const },
    { label: "n8n", variant: "default" as const },
    { label: "Red Team", variant: "destructive" as const },
    { label: "DFIR", variant: "secondary" as const },
    { label: "AI", variant: "default" as const },
  ];

  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="ascii-art text-primary text-[0.5rem] sm:text-xs md:text-sm mb-6 overflow-x-auto">
{`██████╗ ██╗  ██╗███████╗ ██████╗██╗   ██╗████████╗ █████╗ ██████╗ ██╗     ███████╗███████╗██╗██╗     ███████╗
╚════██╗╚██╗██╔╝██╔════╝██╔════╝██║   ██║╚══██╔══╝██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝██║██║     ██╔════╝
 █████╔╝ ╚███╔╝ █████╗  ██║     ██║   ██║   ██║   ███████║██████╔╝██║     █████╗  █████╗  ██║██║     █████╗  
 ╚═══██╗ ██╔██╗ ██╔══╝  ██║     ██║   ██║   ██║   ██╔══██║██╔══██╗██║     ██╔══╝  ██╔══╝  ██║██║     ██╔══╝  
██████╔╝██╔╝ ██╗███████╗╚██████╗╚██████╔╝   ██║   ██║  ██║██████╔╝███████╗███████╗██║     ██║███████╗███████╗
╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝`}
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-2 terminal-glow text-primary">
        3xecutablefile<span className="terminal-cursor">_</span>
      </h1>
      
      <p className="text-muted-foreground text-sm md:text-base mb-6">
        alias: <span className="text-accent">mrrobot</span> — Red Team | DFIR | AI-assisted automation
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {badges.map((badge, idx) => (
          <Badge key={idx} variant={badge.variant} className="font-mono">
            {badge.label}
          </Badge>
        ))}
        <a 
          href="https://tryhackme.com/p/Mrrobottt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Badge variant="outline" className="font-mono hover:bg-accent/20 transition-colors cursor-pointer">
            TryHackMe <ExternalLink className="ml-1 h-3 w-3" />
          </Badge>
        </a>
      </div>

      <div className="max-w-3xl mx-auto bg-destructive/10 border border-destructive/30 rounded p-4 text-sm text-left">
        <p className="text-destructive-foreground">
          <span className="font-bold text-destructive">⚠ Ethics Notice:</span> All offensive tooling and testing shown here is lab-only and used for ethical research, training, and defensive improvement. No unauthorized testing or exploitation. Responsible disclosure is followed.
        </p>
      </div>
    </div>
  );
};
