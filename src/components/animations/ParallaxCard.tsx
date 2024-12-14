import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ParallaxCardProps {
  children: React.ReactNode;
}

export default function ParallaxCard({ children }: ParallaxCardProps) {
  const [props, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const calc = (x: number, y: number) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <animated.div
      className="card transition-shadow duration-300"
      onMouseMove={({ clientX: x, clientY: y }) => api.start({ xys: calc(x, y) })}
      onMouseLeave={() => api.start({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.to((x, y, s) => trans(x, y, s))
      }}
    >
      {children}
    </animated.div>
  );
}