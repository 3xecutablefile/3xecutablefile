import { Hero } from "@/components/Hero";
import { Whoami } from "@/components/Whoami";
import { Capabilities } from "@/components/Capabilities";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Roadmap } from "@/components/Roadmap";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Hero />
        
        <main className="space-y-12">
          <Whoami />
          <Capabilities />
          <Projects />
          <Stack />
          <Roadmap />
          <Contact />
        </main>

        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} 3xecutablefile. All tooling is for authorized testing and ethical research only.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
