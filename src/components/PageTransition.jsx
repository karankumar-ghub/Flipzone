import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const wrapperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // GSAP Animation: Fade in and slide up slightly on every route change
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: 20, scale: 0.99 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          ease: "power3.out",
          clearProps: "all" 
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return <div ref={wrapperRef} className="w-full">{children}</div>;
};

export default PageTransition;