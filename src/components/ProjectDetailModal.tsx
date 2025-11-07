import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Layers, Lightbulb, Target, Code2, Database, Server, Cloud, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export interface ProjectDetail {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  category: string;
  highlights: string[];
  icon: React.ReactNode;
  architecture?: {
    overview: string;
    keyComponents: string[];
    designPatterns: string[];
    infrastructure?: string[];
  };
  conception?: {
    problem: string;
    solution: string;
    approach: string;
  };
  achievements?: {
    businessValue: string[];
    technicalAchievements: string[];
    impact: string;
  };
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl border-glass-border shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-primary/20">
              {project.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                {project.category}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overview */}
          <div>
            <p className="text-foreground/90 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {highlight}
              </Badge>
            ))}
          </div>

          <Separator />

          {/* Architecture Section */}
          {project.architecture && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Architecture & Design</h3>
              </div>
              
              <div className="pl-7 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground/90">Overview</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.architecture.overview}</p>
                </div>

                {project.architecture.keyComponents && project.architecture.keyComponents.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      Key Components
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-4">
                      {project.architecture.keyComponents.map((component, idx) => (
                        <li key={idx}>{component}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.architecture.designPatterns && project.architecture.designPatterns.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Design Patterns
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.architecture.designPatterns.map((pattern, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {pattern}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {project.architecture.infrastructure && project.architecture.infrastructure.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90 flex items-center gap-2">
                      <Cloud className="w-4 h-4" />
                      Infrastructure
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.architecture.infrastructure.map((infra, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {infra}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Conception Section */}
          {project.conception && (
            <>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Project Conception</h3>
                </div>
                
                <div className="pl-7 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90">The Problem</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.conception.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90">The Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.conception.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90">Approach</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.conception.approach}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Achievements Section */}
          {project.achievements && (
            <>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Impact & Achievements</h3>
                </div>
                
                <div className="pl-7 space-y-4">
                  {project.achievements.businessValue && project.achievements.businessValue.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground/90">Business Value</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-4">
                        {project.achievements.businessValue.map((value, idx) => (
                          <li key={idx}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.achievements.technicalAchievements && project.achievements.technicalAchievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground/90">Technical Achievements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-4">
                        {project.achievements.technicalAchievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.achievements.impact && (
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground/90">Overall Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.achievements.impact}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground/90 flex items-center gap-2">
              <Database className="w-4 h-4" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            {project.demo !== '#' && (
              <Button
                className="flex-1 bg-gradient-to-r from-primary to-accent"
                onClick={() => window.open(project.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

