import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypeWriterProps {
  text: string;
  className?: string;
}

export default function TypeWriter({ text, className = '' }: TypeWriterProps) {
  const displayText = useTypewriter(text);
  
  const spring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={spring} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </animated.div>
  );
}