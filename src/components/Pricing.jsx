import { Check, Building2, User } from "lucide-react";
import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Pricing() {
  const [planType, setPlanType] = useState("individual");
  
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const revealGroupRef = useRef(null); // Ref for Toggle + Cards

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Title/Subtitle fades in first
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );

      // 2. Toggle and Cards reveal ALL AT ONCE
      // We target the children of revealGroupRef (the toggle div and the cards grid)
      gsap.fromTo(".reveal-element",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0, // Set to 0 to ensure they appear at once
          ease: "power2.out",
          scrollTrigger: {
            trigger: revealGroupRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []); // Only run on mount to keep entrance clean

  const individualPlans = [
    { name: "Starter", price: "0", period: "/mo", description: "Perfect for individuals and hobbyists", features: ["50 AI Generations / mo", "Standard Resolution", "Basic Style Library", "Email support", "Personal Use License", "Mobile access"], mostPopular: false },
    { name: "Professional", price: "39.99", period: "/mo", description: "Best for creators and influencers", features: ["Unlimited Generations", "4K Ultra-HD Resolution", "Advanced Style Consistency", "Priority Rendering", "Commercial License", "Custom Style Training", "Background Removal", "Priority Support"], mostPopular: true },
    { name: "Enterprise", price: "99.99", period: "/mo", description: "For studios and large teams", features: ["Everything in Professional", "API Access for Apps", "Custom Model Fine-tuning", "Dedicated GPU Servers", "Team Collaboration Tools", "Advanced security & SSO", "Dedicated Account Manager", "Custom SLA"], mostPopular: false },
  ];

  const enterprisePlans = [
    { name: "Team Starter", price: "99", period: "/user", description: "Collaborative tools for small teams.", features: ["Everything in Professional", "Centralized Billing", "Team Folder Sharing", "Admin Management Console", "Standard SLA", "3 Team Seats Included"], mostPopular: false },
    { name: "Studio Pro", price: "149", period: "/user", description: "High-fidelity pipeline for game studios.", features: ["8K Ultra-HD Textures", "Unreal Engine 5 Integration", "Direct .uasset Export", "3D Mesh Generation", "Dedicated GPU Clusters", "Priority 24/7 Support"], mostPopular: true },
    { name: "Organization", price: "Custom", period: "", description: "For large scale deployment & security.", features: ["Everything in Studio Pro", "SSO (SAML/Okta)", "On-Premise Deployment", "Audit Logs", "Dedicated Success Manager", "Custom Contract & invoicing"], mostPopular: false },
  ];

  const currentPlans = planType === "individual" ? individualPlans : enterprisePlans;

  return (
    <section ref={containerRef} id="pricing" className="pt-24 pb-12 px-8 sm:px-12 lg:px-20 relative bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header - Animates Independently */}
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] sm:leading-[1.05]">
            <span className="text-slate-900">Simple, Transparent</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pricing Plans</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Choose the perfect plan for digital identity creation of modern times.
          </p>
        </div>

        {/* Reveal Group: Toggle + Cards Grid */}
        <div ref={revealGroupRef} className="space-y-20">
          
          {/* Toggle Switch - Now part of the reveal group */}
          <div className="reveal-element flex justify-center opacity-0">
            <div className="relative bg-slate-200/50 p-0.5 rounded-lg flex items-center border border-slate-200 w-fit">
              <div
                className="absolute h-[calc(100%-4px)] top-0.5 rounded-md bg-white shadow-sm transition-all duration-300 ease-in-out"
                style={{
                  width: "calc(50% - 4px)",
                  left: planType === "individual" ? "4px" : "calc(50%)",
                }}
              />
              <button onClick={() => setPlanType("individual")} className={`relative z-10 flex items-center space-x-2 px-6 py-2 rounded-md text-sm font-bold transition-colors ${planType === "individual" ? "text-blue-600" : "text-slate-500"}`}>
                <User className="w-4 h-4" /> <span>Individual</span>
              </button>
              <button onClick={() => setPlanType("enterprise")} className={`relative z-10 flex items-center space-x-2 px-6 py-2 rounded-md text-sm font-bold transition-colors ${planType === "enterprise" ? "text-blue-600" : "text-slate-500"}`}>
                <Building2 className="w-4 h-4" /> <span>Enterprise</span>
              </button>
            </div>
          </div>

          {/* Pricing Grid - Now part of the reveal group */}
          <div className="reveal-element grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch opacity-0">
            {currentPlans.map((plan, key) => (
              <div
                key={`${planType}-${key}`}
                className={`relative flex flex-col bg-white rounded-lg transition-all duration-500 
                  ${plan.mostPopular ? "lg:scale-105 z-10 animate-glow shadow-[0_0_40px_rgba(59,130,246,0.2)] border-blue-200" : "border border-gray-100 hover:shadow-md"}`}
              >
                {plan.mostPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-blue-600 text-white text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1.5 rounded-lg shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 sm:px-10 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-slate-500 text-sm mt-1 h-10">{plan.description}</p>
                    <div className="mt-6 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight">{plan.price === "Custom" ? "Custom" : `$${plan.price}`}</span>
                      <span className="text-slate-400 ml-1 text-sm font-medium">{plan.period}</span>
                    </div>
                  </div>

                  <div className="pt-2 pb-8">
                    <button className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-blue-500/20 transition-all active:scale-95">
                      {plan.price === "Custom" ? "Contact Sales" : "Try Rosentte"}
                    </button>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm font-medium leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-lg font-medium">
            Need a custom solution? <a href="#" className="text-blue-600 hover:text-blue-700 font-bold">Contact Sales Team</a>
          </p>
        </div>
      </div>
    </section>
  );
}