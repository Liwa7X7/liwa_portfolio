import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface GlowingBorderProps {
  children: React.ReactNode;
}

export default function GlowingBorder({ children }: GlowingBorderProps) {
  const [{ glow }, api] = useSpring(() => ({
    glow: 0,
    config: { tension: 200, friction: 20 }
  }));

  return (
    <animated.div
      className="relative rounded-lg overflow-hidden"
      onMouseEnter={() => api.start({ glow: 1 })}
      onMouseLeave={() => api.start({ glow: 0 })}
      style={{
        boxShadow: glow.to(
          v => `0 0 ${20 * v}px ${10 * v}px rgba(220, 38, 38, ${0.2 * v})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}