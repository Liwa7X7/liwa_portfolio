import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ScrollFadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollFadeIn({ children, direction = 'up' }: ScrollFadeInProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  const getTransform = () => {
    switch (direction) {
      case 'up': return { y: isVisible ? 0 : 50 };
      case 'down': return { y: isVisible ? 0 : -50 };
      case 'left': return { x: isVisible ? 0 : 50 };
      case 'right': return { x: isVisible ? 0 : -50 };
    }
  };

  const spring = useSpring({
    ...getTransform(),
    opacity: isVisible ? 1 : 0,
    config: { tension: 280, friction: 20 },
  });

  return (
    <animated.div ref={elementRef} style={spring}>
      {children}
    </animated.div>
  );
}