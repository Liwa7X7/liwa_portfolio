import React from 'react';

export default function Education() {
  const education = [
    {
      title: 'Licence en Sciences Informatique',
      period: '2022 - 2025',
      description: 'Développement de plusieurs formulaires interactifs pour un site web, utilisant PHP pour le traitement des données et MySQL pour la gestion des enregistrements'
    },
    {
      title: 'Baccalauréat en Science informatique',
      period: '2018 - 2022',
      description: 'Développement de logiciels, Algorithmes et structures de données, Bases de données. Création d\'un site web personnel en HTML5, CSS, JavaScript, avec intégration d\'un formulaire de contact et d\'une base de données MySQL.'
    }
  ];

  return (
    <section className="py-16" id="education">
      <h2 className="section-title">FORMATION</h2>
      <div className="space-y-8">
        {education.map((item, index) => (
          <div key={index} className="card">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-red-400">{item.title}</h3>
              <span className="text-red-500">{item.period}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}