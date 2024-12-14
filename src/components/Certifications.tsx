import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Se préparer au métier de développeur/développeuse',
      issuer: 'Microsoft',
      date: 'September 2024',
      type: 'en ligne'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'FreeCodeCamp',
      date: 'November 2024',
      type: 'en ligne'
    }
  ];

  return (
    <section className="py-16" id="certifications">
      <h2 className="section-title">CERTIFICATIONS</h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-semibold text-red-400 mb-2">{cert.title}</h3>
            <div className="text-gray-300">
              <p className="mb-1">
                <span className="text-red-500">Organisme:</span> {cert.issuer}
              </p>
              <p className="mb-1">
                <span className="text-red-500">Type:</span> {cert.type}
              </p>
              <p>
                <span className="text-red-500">Date d'obtention:</span> {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}