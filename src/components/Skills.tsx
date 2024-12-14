import React from 'react';
import ScrollFadeIn from './animations/ScrollFadeIn';
import { useSpring, animated } from '@react-spring/web';

export default function Skills() {
  const technicalSkills = [
    'PHP', 'JavaScript', 'Python', 'HTML5', 'CSS', 'Bootstrap',
    'C++', 'C#', 'JAVA', '.NET', 'SQL', 'JQuery', 'React.js'
  ];

  const languages = [
    { lang: 'Anglais', level: 'B2' },
    { lang: 'Arabe', level: 'Langue maternelle' },
    { lang: 'Français', level: 'B2' },
    { lang: 'Japonais', level: 'A1' }
  ];

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const onHover = () => {
    api.start({ x: 1, config: { tension: 300, friction: 10 } });
  };

  const onLeave = () => {
    api.start({ x: 0, config: { tension: 300, friction: 10 } });
  };

  return (
    <section className="py-16" id="skills">
      <ScrollFadeIn>
        <h2 className="section-title">COMPÉTENCES</h2>
      </ScrollFadeIn>
      
      <div className="grid md:grid-cols-2 gap-8">
        <ScrollFadeIn direction="left">
          <div className="card">
            <h3 className="text-xl font-semibold mb-6 text-red-400">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <animated.span
                  key={skill}
                  className="skill-tag hover:bg-red-800/30 cursor-default"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  style={{
                    scale: x.to({
                      range: [0, 0.5, 1],
                      output: [1, 1.1, 1],
                    }),
                  }}
                >
                  {skill}
                </animated.span>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn direction="right">
          <div className="card">
            <h3 className="text-xl font-semibold mb-6 text-red-400">Langues</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.lang} className="flex justify-between items-center">
                  <span className="text-lg">{lang.lang}</span>
                  <span className="skill-tag">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}