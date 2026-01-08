import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import HeroImage from "../assets/images/hero-image.png";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
      {/* Soft Trendy Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Dynamic Mouse Follow Glow */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
      }} />

      <div className="max-w-7xl mx-auto relative w-full z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Content */}
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/5 border border-blue-600/10 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm text-blue-700 font-semibold tracking-wide uppercase">AI-Powered Identity</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Create Your Digital <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Persona in Seconds</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Unleash your creativity with our cutting-edge AI. Generate hyper-realistic or stylized,
              customizable avatars from simple prompts for gaming and social media.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-2xl font-bold text-white flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/25 active:scale-95">
                Start Creating <ArrowRight className="w-5 h-5" />
              </button>

              <button className="group w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm">
                <div className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Play className="w-4 h-4 fill-blue-600 text-blue-600" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Side: Image + Floating Card */}
          <div className="relative w-full mt-24 lg:mt-0">

            {/* THE FLOATING AVATAR CARD - Liquid Distortion Glass */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90%] max-w-[300px] animate-liquid-float">
              <div className="bg-white/40 backdrop-blur-[6px] backdrop-saturate-[180%] border border-white/60 p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center">

                {/* Icon Section */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center">
                  <p className="text-slate-900 font-bold text-sm tracking-tight">4K AI Render</p>
                  <p className="text-[10px] text-blue-700 font-bold uppercase tracking-widest mt-0.5">Ultra-Realistic</p>
                </div>

                {/* Refractive Inner Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/40 pointer-events-none rounded-[2rem]" />
              </div>
            </div>
            {/* Main Hero Image Container */}
            <div className="relative z-10 rounded-[3rem] p-2 bg-white border border-slate-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src={HeroImage}
                alt="AI Avatar Preview"
                className="w-full h-auto object-cover rounded-[2.5rem]"
              />
              {/* Soft Light Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}