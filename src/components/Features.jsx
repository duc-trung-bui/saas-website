import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Sparkles, Layers, Zap, Download, ArrowRight } from "lucide-react";

import FeatureImage1 from "../assets/images/feature-01.png";
import FeatureImage2 from "../assets/images/feature-02.png";
import FeatureImage3 from "../assets/images/feature-03.png";
import FeatureImage4 from "../assets/images/feature-04.png";

const features = [
  {
    title: "Hyper-Realistic Generation",
    description: "Neural engine capturing skin texture and lighting for indistinguishable results.",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    image: FeatureImage1,
    column: 1
  },
  {
    title: "Style Consistency",
    description: "Maintain facial features across different outfits and poses seamlessly.",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
    image: FeatureImage2,
    column: 2
  },
  {
    title: "Advanced Compression",
    description: "Reducing file sizes up to 80% while retaining 4K detail for faster loads.",
    icon: <Zap className="w-5 h-5 text-cyan-600" />,
    image: FeatureImage4,
    column: 2
  },
  {
    title: "Pro-Grade Studio Exports",
    description: "4K resolution with automatic background removal for instant deployment.",
    icon: <Download className="w-5 h-5 text-blue-600" />,
    image: FeatureImage3,
    column: 3
  },
];

const CardWrapper = ({ children, className = "" }) => (
  <div className={`relative group p-[2px] overflow-hidden bg-slate-200 transition-all duration-500 flex flex-col z-10 rounded-none ${className}`}>

    {/* Rainbow Layer - Only visible on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
      <div className="animate-rainbow-glow" />
    </div>

    {/* The Content Box - Removed rounded-[10px] */}
    <div className="relative h-full w-full bg-white overflow-hidden flex flex-col z-10 rounded-none">
      {children}
    </div>
  </div>
);

const FeatureCard = ({ item }) => (
  <CardWrapper className="w-full max-w-[350px] mx-auto shadow-sm">
    <div className="aspect-video w-full overflow-hidden bg-slate-100">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Text lift effect from previous step */}
    <div className="p-8 flex flex-col flex-grow transition-transform duration-500 ease-out group-hover:-translate-y-2">
      <div className="inline-flex p-2.5 bg-slate-50 rounded-none mb-4 w-fit border border-slate-100 transition-colors duration-500 group-hover:bg-white">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>

      <button className="inline-flex items-center text-sm font-bold text-blue-600 group/btn mt-auto">
        Learn more
        <ArrowRight className="ml-2 mt-[2px] w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </CardWrapper>
);

export default function Features() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia(containerRef);

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 20 // Start slightly lower
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8, // 3. Set exact duration
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", // Animation starts when top of section hits 75% of viewport height
            toggleActions: "play none none none" // Plays once
          }
        }
      );
    });

    mm.add("(min-width: 1024px)", () => {
      let isHovered = false;
      let timeoutCall;

      gsap.set(".col-1", { rotation: -90 });
      gsap.set(".col-2", { rotation: 0 });
      gsap.set(".col-3", { rotation: 180 });
      gsap.set(".col-4", { rotation: 90 });

      gsap.set(".feature-card-content", {
        rotation: (i) => [90, 0, -180, -90][i]
      });

      let lastMoveWasBackward = false;

      const moveOrbit = () => {
        if (isHovered) return;
        const direction = lastMoveWasBackward ? 0 : Math.floor(Math.random() * 2);
        const moveAmount = direction === 0 ? 90 : -90;
        lastMoveWasBackward = (moveAmount < 0);

        const tl = gsap.timeline({
          onComplete: () => {
            if (!isHovered) timeoutCall = gsap.delayedCall(3, moveOrbit);
          }
        });

        tl.to([".col-1", ".col-2", ".col-3", ".col-4"], {
          rotation: `+=${moveAmount}`,
          duration: 1.4,
          ease: "power3.inOut",
        });

        tl.to(".feature-card-content", {
          rotation: `-=${moveAmount}`,
          duration: 1.4,
          ease: "power3.inOut",
        }, "<");
      };

      const cards = containerRef.current.querySelectorAll(".feature-card-content");
      const onEnter = () => { isHovered = true; if (timeoutCall) timeoutCall.kill(); };
      const onLeave = () => {
        isHovered = false;
        if (!gsap.isTweening(".col-1")) timeoutCall = gsap.delayedCall(2, moveOrbit);
      };

      cards.forEach(card => {
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
      });

      timeoutCall = gsap.delayedCall(1, moveOrbit);
      return () => {
        cards.forEach(card => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      };
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set([".col-1", ".col-2", ".col-3", ".col-4", ".feature-card-content"], { clearProps: "all" });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section id="features" ref={containerRef} className="pt-16 lg:pt-24 pb-8 lg:pb-12 mb-8 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div ref={contentRef} className="max-w-7xl mx-auto relative min-h-0 lg:min-h-[1485px]">

        <div className="text-center relative z-50">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8">
            Master Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Identity</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            Utilitize neural rendering to create a next level digital persona.
          </p>
        </div>

        {/* ORBITAL AREA */}
        <div className="flex flex-col gap-8 lg:block lg:absolute lg:top-[58%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[877px] lg:h-[877px] z-10">

          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[842px] h-[842px] rounded-full border border-blue-200/90 animate-glow-ring shadow-[0_0_35px_rgba(59,130,246,0.1)]" />
          </div>

          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`col-${num} lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:origin-center pointer-events-none`}
            >
              <div className="feature-card-content pointer-events-auto lg:-translate-y-[448px]">
                <FeatureCard item={features[num - 1]} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}