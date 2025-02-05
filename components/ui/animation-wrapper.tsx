import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimationWrapperProps {
  children: React.ReactNode;
}

const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
  const animationRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        animationRef.current,
        { opacity: 0, x: -240 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: animationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { dependencies: [] }
  );

  return (
    <div ref={animationRef} className="relative size-full">
      {children}
    </div>
  );
};

export default AnimationWrapper;
