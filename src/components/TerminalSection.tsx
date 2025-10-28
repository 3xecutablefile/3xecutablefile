import { ReactNode } from "react";

interface TerminalSectionProps {
  command: string;
  children: ReactNode;
  id?: string;
}

export const TerminalSection = ({ command, children, id }: TerminalSectionProps) => {
  return (
    <section id={id} className="mb-12 animate-fade-in scroll-mt-20">
      <div className="mb-4">
        <span className="text-accent terminal-glow font-bold">$ </span>
        <span className="text-primary terminal-glow font-semibold">{command}</span>
      </div>
      <div className="pl-4 border-l-2 border-accent/30">{children}</div>
    </section>
  );
};
