import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Code2, Cpu, Database, Globe } from 'lucide-react';

export default function FloatingIcons() {
  const icons = [Code2, Cpu, Database, Globe];
  
  const springs = icons.map((_, index) => 
    useSpring({
      loop: true,
      from: { y: 0 },
      to: [
        { y: -20 },
        { y: 0 }
      ],
      delay: index * 400,
      config: {
        tension: 300,
        friction: 10
      }
    })
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map((Icon, index) => (
        <animated.div
          key={index}
          style={{
            ...springs[index],
            position: 'absolute',
            left: `${25 * (index + 1)}%`,
            top: `${Math.random() * 70}%`
          }}
        >
          <Icon size={32} className="text-red-500" />
        </animated.div>
      ))}
    </div>
  );
}