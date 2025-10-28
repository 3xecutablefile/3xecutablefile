import { TerminalSection } from "./TerminalSection";

export const Capabilities = () => {
  const capabilities = {
    "Offensive Development": [
      "Lab-based reconnaissance automation and OSINT pipelines",
      "CTF tooling and challenge automation frameworks",
      "Network scanning and service enumeration utilities",
      "Payload experimentation in isolated environments"
    ],
    "DFIR Research": [
      "Memory forensics and artifact analysis learning",
      "Log parsing and timeline reconstruction experiments",
      "Anomaly detection pipeline development",
      "Incident response automation prototypes"
    ],
    "Infrastructure & Automation": [
      "n8n workflow orchestration (IR, threat intel, data enrichment)",
      "Docker containerization for lab environments",
      "CI/CD for security tooling",
      "Infrastructure-as-Code for red team labs"
    ],
    "AI Integration": [
      "LLM workflows (report generation, threat summarization)",
      "Agent orchestration for automated analysis",
      "Prompt engineering for security use cases",
      "AI-assisted code review and vulnerability detection"
    ]
  };

  return (
    <TerminalSection command="cat capabilities.txt" id="capabilities">
      <div className="space-y-6">
        {Object.entries(capabilities).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
              [{category}]
            </h3>
            <ul className="space-y-1.5 ml-4">
              {items.map((item, idx) => (
                <li key={idx} className="text-foreground/80 text-sm">
                  <span className="text-accent">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TerminalSection>
  );
};
