import { TerminalSection } from "./TerminalSection";

export const Stack = () => {
  const stack = {
    languages: ["Rust", "TypeScript", "Python", "Go", "Bash"],
    domains: ["Red Team Operations", "Digital Forensics", "Incident Response", "Malware Analysis", "Threat Intelligence"],
    tools: ["Volatility", "Ghidra", "Burp Suite", "Metasploit", "Wireshark", "Docker", "n8n"],
    ai: ["OpenAI API", "Anthropic Claude", "LangChain", "Vector Databases"],
    platforms: ["Linux", "Windows", "macOS", "AWS", "GitHub Actions"]
  };

  return (
    <TerminalSection command="cat stack.json" id="stack">
      <pre className="text-foreground/90 text-sm overflow-x-auto">
        <code>
{JSON.stringify(stack, null, 2)}
        </code>
      </pre>
    </TerminalSection>
  );
};
