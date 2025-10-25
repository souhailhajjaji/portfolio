import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Allianz Maroc",
      description: "Tests sur application mobile avec TestFlight, suivi des anomalies via MantisHub, collaboration avec l’équipe de développement.",
      technologies: ["TestFlight", "MantisHub"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "4D Logiciel",
      description: "Tests manuels sur site web, gestion des cas de test et anomalies avec Jira, environnement Agile.",
      technologies: ["Jira", "Agile"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "CDG Développement",
      description: "Maintenance réseau, configuration et dépannage des équipements, administration IT.",
      technologies: ["Réseau", "Administration IT"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are my professional experiences that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-background border-0 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="border-blue-500 text-blue-500 flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                      Details
                    </div>
                  </Button>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" x2="21" y1="14" y2="3"/>
                      </svg>
                      View
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;