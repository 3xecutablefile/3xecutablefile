import { TerminalSection } from "./TerminalSection";

export const Roadmap = () => {
  const roadmapItems = [
    "PT1 → OSCP certification pipeline (Q2-Q3 2025)",
    "RustMap: Advanced port scanner with ML-based service detection",
    "PurpleOps: Integrated purple team platform (attack simulation + defense validation)",
    "DFIR-AI: LLM-powered incident triage and report generation toolkit",
    "Open-source contributions to memory forensics and red team frameworks",
    "Research: AI-assisted adversary emulation and automated playbook generation"
  ];

  return (
    <TerminalSection command="cat roadmap.md" id="roadmap">
      <div className="space-y-2">
        {roadmapItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 text-foreground/90 text-sm">
            <span className="text-accent font-bold flex-shrink-0">[ ]</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </TerminalSection>
  );
};
