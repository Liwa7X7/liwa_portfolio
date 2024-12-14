import React from 'react';
import { Code2 } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import TypeWriter from './animations/TypeWriter';
import FadeIn from './animations/FadeIn';
import FloatingIcons from './animations/FloatingIcons';

export default function Header() {
  const imageSpring = useSpring({
    from: { opacity: 0, scale: 0.9, rotate: -10 },
    to: { opacity: 1, scale: 1, rotate: 0 },
    config: { tension: 200, friction: 20 },
  });

  const titleSpring = useSpring({
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    delay: 300,
    config: { tension: 280, friction: 20 },
  });

  return (
    <div className="bg-gradient-to-b from-red-900 to-black py-20 px-4  relative overflow-hidden">
      <FloatingIcons />
      <div className="container mx-auto max-w-5xl relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <animated.div 
            style={imageSpring}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-500/30 shadow-lg shadow-red-500/20 hover-lift"
          >
            <img
              src="liwa.jpeg"
              alt="Liwa Mokni"
              className="w-full h-full object-cover"
            />
          </animated.div>
          
          <div className="flex-1 text-center md:text-left">
            <animated.div 
              style={titleSpring}
              className="flex items-center gap-4 mb-6 justify-center md:justify-start"
            >
              <Code2 className="w-12 h-12 text-red-500 animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                LIWA MOKNI
              </h1>
            </animated.div>
            
            <TypeWriter 
              text="Développeur"
              className="text-2xl mb-6 text-red-300"
            />

            <FadeIn delay={600}>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-lg">
                <a 
                  href="tel:+21622332319" 
                  className="hover:text-red-400 transition-all duration-300 hover:scale-105"
                >
                  +216 22 332 319
                </a>
                <span className="text-red-500">•</span>
                <a 
                  href="mailto:liwaamoknii@gmail.com" 
                  className="hover:text-red-400 transition-all duration-300 hover:scale-105"
                >
                  liwaamoknii@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}