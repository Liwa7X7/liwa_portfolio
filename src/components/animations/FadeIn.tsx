import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  const props = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay,
    config: { tension: 280, friction: 20 },
  });

  return <animated.div style={props}>{children}</animated.div>;
}