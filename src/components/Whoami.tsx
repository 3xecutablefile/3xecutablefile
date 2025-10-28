import { TerminalSection } from "./TerminalSection";

export const Whoami = () => {
  return (
    <TerminalSection command="whoami" id="whoami">
      <div className="space-y-3 text-foreground/90">
        <p>
          Developer building automation tooling, AI-assisted workflows, and experimenting with offensive security concepts in controlled lab environments. Recent achievements include 3rd place at Code Battle 2025 UAE Inter-School Hackathon and finalist at Dubai Police CTFAE Cyber Challenge.
        </p>
        <p>
          Terminal-first development workflow. Primary focus on Rust and TypeScript for building automation pipelines, reconnaissance tools, and integrating AI capabilities into security research and CTF participation.
        </p>
        <p>
          All offensive tooling and testing is lab-only, used for learning, CTF competitions, and ethical research. Committed to responsible disclosure and defensive improvement through hands-on experimentation.
        </p>
      </div>
    </TerminalSection>
  );
};
