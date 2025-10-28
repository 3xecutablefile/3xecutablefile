import { TerminalSection } from "./TerminalSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, GitFork, Filter } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch("https://api.github.com/users/3xecutablefile/repos?sort=updated&per_page=6");
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
};

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const placeholderRepos: GitHubRepo[] = [
    {
      name: "RustMap",
      description: "Advanced reconnaissance automation toolkit built in Rust",
      html_url: "https://github.com/3xecutablefile/RustMap",
      language: "Rust",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString()
    },
    {
      name: "openCTF",
      description: "Terminal-based AI assistant for CTF challenges and writeups",
      html_url: "https://github.com/3xecutablefile/openCTF",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString()
    },
    {
      name: "terminal-ui",
      description: "Modular TUI framework for building terminal applications",
      html_url: "https://github.com/3xecutablefile/terminal-ui",
      language: "Rust",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString()
    },
    {
      name: "ESP32-Firmware",
      description: "Embedded systems experiments and firmware projects",
      html_url: "https://github.com/3xecutablefile/ESP32-Firmware",
      language: "C++",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString()
    }
  ];

  const displayRepos = error || !repos ? placeholderRepos : repos.slice(0, 6);
  
  const allLanguages = Array.from(new Set(displayRepos.map(repo => repo.language).filter(Boolean)));
  const filteredRepos = selectedFilter === 'all' 
    ? displayRepos 
    : displayRepos.filter(repo => repo.language === selectedFilter);

  return (
    <TerminalSection command="ls -la projects/" id="projects" typing>
      {isLoading && (
        <p className="text-muted-foreground text-sm">Loading repositories...</p>
      )}
      
      {error && (
        <p className="text-muted-foreground text-sm mb-4">
          GitHub API rate limit reached. Showing placeholders. Visit{" "}
          <a href="https://github.com/3xecutablefile" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/3xecutablefile
          </a>{" "}
          for live repos.
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Filter className="h-4 w-4" />
          <span>Filter by language:</span>
        </div>
        <Button
          variant={selectedFilter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedFilter('all')}
          className="text-xs"
        >
          All ({displayRepos.length})
        </Button>
        {allLanguages.map(lang => (
          <Button
            key={lang}
            variant={selectedFilter === lang ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter(lang)}
            className="text-xs"
          >
            {lang} ({displayRepos.filter(repo => repo.language === lang).length})
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepos.map((repo, idx) => (
          <Card key={idx} className="p-4 bg-card border-border hover:border-accent/50 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-2">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2 group-hover:underline"
              >
                {repo.name}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <p className="text-foreground/70 text-sm mb-3 line-clamp-2">
              {repo.description || "No description available"}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              {repo.language && (
                <Badge variant="secondary" className="font-mono text-xs">
                  {repo.language}
                </Badge>
              )}
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="h-3 w-3" /> {repo.forks_count}
              </span>
              <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a 
          href="https://github.com/3xecutablefile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:text-primary transition-colors text-sm font-semibold inline-flex items-center gap-2"
        >
          View all repositories on GitHub <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </TerminalSection>
  );
};
