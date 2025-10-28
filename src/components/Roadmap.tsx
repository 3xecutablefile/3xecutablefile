import { TerminalSection } from "./TerminalSection";

export const Roadmap = () => {
  const roadmapItems = [
    "Finish TryHackMe PT1 → begin OSCP certification path",
    "Expand RustMap with passive reconnaissance capabilities",
    "Publish CTF writeups and automation scripts from recent competitions",
    "Build out openCTF with multi-model AI support for challenge solving",
    "Contribute to open-source security tooling and terminal UI projects",
    "Experiment with AI-assisted vulnerability research workflows"
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
