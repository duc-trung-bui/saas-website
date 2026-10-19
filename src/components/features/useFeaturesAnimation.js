import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Section fade-in on scroll, plus the orbit rotation on desktop only
export default function useFeaturesAnimation(containerRef, contentRef) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia(containerRef);

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
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
        isHovered = true;
        if (timeoutCall) timeoutCall.kill();
        const targets = [".col-1", ".col-2", ".col-3", ".col-4", ".feature-card-content"];
        gsap.killTweensOf(targets);
        gsap.set(targets, { clearProps: "all" });
        cards.forEach(card => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      };
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [containerRef, contentRef]);
}
