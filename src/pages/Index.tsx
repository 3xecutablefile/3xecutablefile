import { Hero } from "@/components/Hero";
import { Whoami } from "@/components/Whoami";
import { Capabilities } from "@/components/Capabilities";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Roadmap } from "@/components/Roadmap";
import { Contact } from "@/components/Contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Hero />
        
        <main className="space-y-12">
          <ScrollReveal delay={100}>
            <Whoami />
          </ScrollReveal>
          <ScrollReveal delay={200} direction="left">
            <Capabilities />
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <InteractiveTerminal />
          </ScrollReveal>
          <ScrollReveal delay={300} direction="right">
            <Projects />
          </ScrollReveal>
          <ScrollReveal delay={400} direction="up">
            <Stack />
          </ScrollReveal>
          <ScrollReveal delay={500} direction="left">
            <Roadmap />
          </ScrollReveal>
          <ScrollReveal delay={600} direction="up">
            <Contact />
          </ScrollReveal>
        </main>

        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} 3xecutablefile. All tooling is for authorized testing and ethical research only.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
