import { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from "lucide-react";
import HeroImage from "../assets/images/hero-image.png";
import HeroBadge from './additional-elements/HeroBadge';

export default function Hero() {

  const [showBadge, setShowBadge] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // 1. Trigger the Badge Shape to pop in
    const timer1 = setTimeout(() => setShowBadge(true), 100);
    
    // 2. Trigger the Text/Icon to fade in cleanly afterwards
    const timer2 = setTimeout(() => setTextVisible(true), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative w-full z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE: Content */}
          <div className="animate-hero-slide-up text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/5 border border-blue-600/10 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm text-blue-700 font-semibold tracking-wide uppercase">AI-Powered Identity</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Create Your Digital <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Persona in Seconds</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Unleash your creativity with our cutting-edge AI. Generate hyper-realistic or stylized, customizable avatars.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-blue-600 rounded-lg font-bold text-white flex items-center justify-center gap-2 hover:bg-blue-700 shadow-xl shadow-blue-600/25 transition-all active:scale-95">
                Start Creating <ArrowRight className="w-5 h-5" />
              </button>
              <button className="group px-8 py-4 bg-white border border-slate-200 rounded-lg font-bold text-slate-700 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm">
                <div className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Play className="w-4 h-4 fill-blue-600 text-blue-600" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Animated Badge */}
          <div className="relative w-full mt-24 lg:mt-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[75%] z-30 flex justify-center w-full">

              {/* The Pure SVG Badge */}
              <HeroBadge show={showBadge} textVisible={textVisible} />
            </div>

            {/* MAIN IMAGE */}
            <div className="animate-hero-slide-right relative z-10 rounded-[3rem] p-2 bg-white border border-slate-200 shadow-2xl">
              <img src={HeroImage} alt="AI Avatar" className="w-full h-auto object-cover rounded-[2.5rem]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}