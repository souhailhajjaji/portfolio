import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'C++',
    'Python',
    'JavaScript',
    'HTML/CSS',
    'React.js',
    'UML',
    'Linux',
    'Jira Software',
    'MantisHub',
    'TestFlight',
    'Software Testing',
    'Network Administration',
    'Leadership',
    'Autonomy',
    'Motivation'
  ];

  const experiences = [
    {
      title: "Allianz Maroc",
      period: "Juin – Juillet 2024",
      role: "Testeur d'application mobile",
      description: "Tests sur application mobile avec TestFlight. Suivi des anomalies via MantisHub. Collaboration avec l’équipe de développement pour améliorer la qualité du produit."
    },
    {
      title: "4D Logiciel",
      period: "Mars – Avril 2024",
      role: "Stagiaire Quality Assurance",
      description: "Tests manuels sur un site web. Utilisation de Jira Software pour la gestion des cas de test et anomalies. Développement de compétences en qualité logicielle et gestion agile."
    },
    {
      title: "CDG Développement",
      period: "Juillet – Août 2023",
      role: "Stagiaire Administration Réseau",
      description: "Participation à la maintenance et au dépannage réseau. Configuration et optimisation des équipements. Acquisition de compétences en administration réseau."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Me</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Engineering Student at EMSI Rabat with experience in software quality.
          </p>
        </div>

        <div className="mb-16">
          <Card className="bg-muted/50 border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground">
                I'm a 5th-year Computer Engineering student at EMSI Rabat, passionate about development 
                and software quality. I love creating performant and reliable software solutions 
                that respond to users' needs.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                My objective is to strengthen my technical skills in web development (React.js) and 
                software testing to pursue a career as a software engineer. I'm dedicated to continuous learning 
                and applying best practices in software engineering.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="px-4 py-2 text-base"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Experience</span>
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="p-4 border-l-4 border-blue-500 bg-muted/30 rounded-r-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="font-medium text-primary">{exp.role}</p>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;