import { ReactNode } from "react";
import { useTypingEffect } from "@/hooks/use-typing-effect";

interface TerminalSectionProps {
  command: string;
  children: ReactNode;
  id?: string;
  typing?: boolean;
}

export const TerminalSection = ({ command, children, id, typing = false }: TerminalSectionProps) => {
  const { displayedText, isTyping } = useTypingEffect(command, 30, 100);

  return (
    <section id={id} className="mb-12 animate-fade-in scroll-mt-20">
      <div className="mb-4">
        <span className="text-accent terminal-glow font-bold">$ </span>
        <span className="text-primary terminal-glow font-semibold">
          {typing ? displayedText : command}
          {isTyping && <span className="terminal-cursor">_</span>}
        </span>
      </div>
      <div className="pl-4 border-l-2 border-accent/30">{children}</div>
    </section>
  );
};
