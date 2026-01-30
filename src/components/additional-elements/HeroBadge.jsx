import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroBadge() {
  const badgeRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. SET INITIAL STATE
      gsap.set(badgeRef.current, { 
        opacity: 0, 
        y: 30 
      });
      // Content is at its final y-position, just invisible
      gsap.set(contentRef.current, { 
        opacity: 0 
      });

      const tl = gsap.timeline({ delay: 0.6 });

      // 2. THE ENTRANCE
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 20,
        duration: 0.6,
        ease: "power3.out", // Smooth, visible deceleration
        force3D: true,
      })
      .to(contentRef.current, {
        opacity: 1,
        duration: 0.8,
      }, "-=0.8"); // Starts fading in while badge is still rising

      // 3. FLOATING LOOP
      // We wait until the entrance finishes before starting the loop
      gsap.to(badgeRef.current, {
        y: "-=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2 
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={badgeRef}
      className="relative w-[340px] h-[90px] flex items-center shadow-2xl z-30"
      style={{
        borderRadius: '45px',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(255, 255, 255, 0.22)',
        willChange: 'transform, backdrop-filter',
      }}
    >
      {/* Content wrapper with its own ref to control fade independently of badge slide */}
      <div ref={contentRef} className="flex items-center px-6 w-full h-full z-10">
        
        {/* ICON SECTION */}
        <div className="relative shrink-0 w-14 h-14 flex items-center justify-center">
          <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-t from-blue-300 via-blue-500 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" 
                  fill="url(#sparkleGradient)" 
                />
                <defs>
                  <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 flex flex-col text-center">
          <span className="font-bold text-slate-900 text-lg leading-tight tracking-tight">
            4K AI Resolution
          </span>
          <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.15em] mt-1">
            Ultra-Realistic Avatar
          </span>
        </div>
      </div>
    </div>
  );
}