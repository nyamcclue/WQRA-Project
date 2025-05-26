import React, { useEffect, useRef, useState } from 'react';

const FloatOnScroll = ({ children, className = '', style = {} }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
      style={{
        ...style,
        animationDelay: style.animationDelay || '0ms',
        animationDuration: style.animationDuration || '0.8s',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FloatOnScroll;
