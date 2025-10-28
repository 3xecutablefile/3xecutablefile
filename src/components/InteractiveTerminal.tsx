import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Terminal, Play, RotateCcw } from 'lucide-react';

const commands = [
  { cmd: 'whoami', output: '3xecutablefile (mrrobot) - Developer | Security Researcher | Automation Expert' },
  { cmd: 'ls skills/', output: 'rust/ typescript/ python/ security/ automation/ ai-tooling/' },
  { cmd: 'cat about.txt', output: 'Passionate about building secure, efficient tools and exploring the intersection of development and cybersecurity.' },
  { cmd: 'ps aux | grep projects', output: 'RustMap, openCTF, terminal-ui, ESP32-Firmware, and more...' },
];

export const InteractiveTerminal = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setIsRunning(true);
    setOutput(prev => [...prev, `$ ${trimmedCmd}`]);
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    setTimeout(() => {
      const foundCommand = commands.find(c => c.cmd === trimmedCmd);
      if (foundCommand) {
        setOutput(prev => [...prev, foundCommand.output]);
      } else if (trimmedCmd === 'help') {
        setOutput(prev => [...prev, 'Available commands: whoami, ls skills/, cat about.txt, ps aux | grep projects, clear']);
      } else if (trimmedCmd === 'clear') {
        setOutput([]);
      } else {
        setOutput(prev => [...prev, `Command not found: ${trimmedCmd}. Type 'help' for available commands.`]);
      }
      setIsRunning(false);
    }, 500 + Math.random() * 500);

    setCurrentCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    }
  };

  const runDemo = () => {
    setOutput([]);
    const demoCommands = ['whoami', 'ls skills/', 'cat about.txt'];
    let i = 0;
    
    const runNext = () => {
      if (i < demoCommands.length) {
        executeCommand(demoCommands[i]);
        i++;
        setTimeout(runNext, 2000);
      }
    };
    
    runNext();
  };

  return (
    <Card className="p-6 bg-black/90 border-green-500/30 text-green-400 font-mono text-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span className="text-xs">terminal@3xecutablefile:~$</span>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={runDemo}
            disabled={isRunning}
            className="text-xs h-6 px-2"
          >
            <Play className="h-3 w-3 mr-1" />
            Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setOutput([])}
            className="text-xs h-6 px-2"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Clear
          </Button>
        </div>
      </div>

      <div className="bg-black/50 rounded p-3 h-64 overflow-y-auto mb-3">
        {output.map((line, idx) => (
          <div key={idx} className="mb-1">
            {line.startsWith('$') ? (
              <span>
                <span className="text-green-500">$</span>
                <span className="ml-2">{line.slice(2)}</span>
              </span>
            ) : (
              <span className="text-green-300">{line}</span>
            )}
          </div>
        ))}
        {isRunning && (
          <div className="flex items-center">
            <span className="text-green-500">$</span>
            <span className="ml-2 terminal-cursor">_</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-500">$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-green-300 placeholder-green-600"
          placeholder="Type 'help' for available commands..."
          disabled={isRunning}
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
          Tab completion
        </Badge>
        <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
          ↑↓ History
        </Badge>
        <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
          help
        </Badge>
      </div>
    </Card>
  );
};