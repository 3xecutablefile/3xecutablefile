import { TerminalSection } from "./TerminalSection";
import { Button } from "@/components/ui/button";
import { Github, Shield } from "lucide-react";

export const Contact = () => {
  return (
    <TerminalSection command='echo "contact"' id="contact">
      <div className="space-y-4">
        <p className="text-foreground/90 text-sm mb-4">
          Reach out via GitHub for collaboration, research inquiries, or responsible disclosure.
        </p>

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
              <Github className="h-4 w-4" />
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

        <p className="text-muted-foreground text-xs mt-4">
          For security issues or vulnerability reports, please open a private security advisory on relevant repositories.
        </p>
      </div>
    </TerminalSection>
  );
};
