import { TerminalSection } from "./TerminalSection";

export const Whoami = () => {
  return (
    <TerminalSection command="whoami" id="whoami">
      <div className="space-y-3 text-foreground/90">
        <p>
          Security engineer and offensive developer focused on Red Team operations, 
          Digital Forensics & Incident Response (DFIR), and AI-assisted automation. 
          Building custom tooling for reconnaissance, post-exploitation, and forensic analysis.
        </p>
        <p>
          Terminal-first workflow. Rust and TypeScript for implant frameworks and automation pipelines. 
          Integrating LLMs into security workflows for faster triage, report generation, and threat intelligence.
        </p>
        <p>
          Committed to ethical research and responsible disclosure. All offensive work is lab-confined 
          and designed to strengthen defensive postures.
        </p>
      </div>
    </TerminalSection>
  );
};
