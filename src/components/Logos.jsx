import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "OpenAI", logo: "/openai.png" },
  { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "Conscience", logo: "/conscience.png" },
  { name: "DeepSeek", logo: "/deepseek.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
];

export default function Logos() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    const section = sectionRef.current;
    if (!slider || !section) return;

    const ctx = gsap.context(() => {
      // 1. Fade-in Section Animation
      gsap.fromTo(section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Continuous Marquee Animation
      animationRef.current = gsap.fromTo(
        slider,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 20,
          ease: "none",
          repeat: -1,
          paused: true
        }
      );

      // 3. Control Marquee Playback based on Visibility
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => animationRef.current?.play(),
        onLeave: () => animationRef.current?.pause(),
        onEnterBack: () => animationRef.current?.play(),
        onLeaveBack: () => animationRef.current?.pause(),
      });
    }, sectionRef);

    return () => {
      ctx.revert(); // Clean up all GSAP and ScrollTriggers in one go
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-2xl font-bold tracking-widest bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 bg-clip-text text-transparent">
          Powered by AI Leaders
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div
          ref={sliderRef}
          className="flex w-max items-center whitespace-nowrap will-change-transform"
          onMouseEnter={() => animationRef.current?.pause()}
          onMouseLeave={() => animationRef.current?.play()}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-12 lg:px-16 h-10 lg:h-12"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
