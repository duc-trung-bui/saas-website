import { useRef } from 'react';
import OrbitalCards from './features/OrbitalCards';
import useFeaturesAnimation from './features/useFeaturesAnimation';

export default function Features() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useFeaturesAnimation(containerRef, contentRef);

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

        <OrbitalCards />
      </div>
    </section>
  );
}
