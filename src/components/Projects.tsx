import React from 'react';
import ScrollFadeIn from './animations/ScrollFadeIn';
import ParallaxCard from './animations/ParallaxCard';
import GlowingBorder from './animations/GlowingBorder';

export default function Projects() {
  const projects = [
    {
      title: "Application mobile de sensibilisation environnementale",
      date: "Sep 2023 – Dec 2023",
      tech: ".NET Framework",
      description: "Développement du front-end d'une application mobile visant à promouvoir la sensibilisation environnementale et à organiser des campagnes de nettoyage."
    },
    {
      title: "Site de gestion médicale",
      date: "Jan 2023",
      tech: "PHP, MySQL",
      description: "Conception et développement d'un site web permettant aux utilisateurs de consulter des informations sur diverses maladies, de créer et d'enregistrer de nouveaux dossiers médicaux."
    }
  ];

  return (
    <section className="py-16 relative" id="projects">
      <ScrollFadeIn>
        <h2 className="section-title">PROJETS</h2>
      </ScrollFadeIn>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ScrollFadeIn key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
            <GlowingBorder>
              <ParallaxCard>
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-between items-center">
                    <h3 className="text-xl font-semibold text-red-400">{project.title}</h3>
                    <span className="text-red-500">{project.date}</span>
                  </div>
                  <div className="mb-4">
                    <span className="skill-tag">{project.tech}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>
              </ParallaxCard>
            </GlowingBorder>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}