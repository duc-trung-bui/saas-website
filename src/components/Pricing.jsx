import { Check, Building2, User  } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [planType, setPlanType] = useState("individual");

  // Reordered: Index 1 is the Middle Plan (Most Popular)
  const individualPlans = [
    {
      name: "Starter",
      price: "0",
      period: "/mo",
      description: "Perfect for individuals and hobbyists",
      features: ["50 AI Generations / mo", "Standard Resolution", "Basic Style Library", "Email support", "Personal Use License", "Mobile access"],
      mostPopular: false,
    },
    {
      name: "Professional",
      price: "39.99",
      period: "/mo",
      description: "Best for creators and influencers",
      features: ["Unlimited Generations", "4K Ultra-HD Resolution", "Advanced Style Consistency", "Priority Rendering", "Commercial License", "Custom Style Training", "Background Removal", "Priority Support"],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      price: "99.99",
      period: "/mo",
      description: "For studios and large teams",
      features: ["Everything in Professional", "API Access for Apps", "Custom Model Fine-tuning", "Dedicated GPU Servers", "Team Collaboration Tools", "Advanced security & SSO", "Dedicated Account Manager", "Custom SLA"],
      mostPopular: false,
    },
  ];

  const enterprisePlans = [
    {
      name: "Team Starter",
      price: "99",
      period: "/user",
      description: "Collaborative tools for small teams.",
      features: ["Everything in Professional", "Centralized Billing", "Team Folder Sharing", "Admin Management Console", "Standard SLA", "3 Team Seats Included"],
      mostPopular: false,
    },
    {
      name: "Studio Pro",
      price: "149",
      period: "/user",
      description: "High-fidelity pipeline for game studios.",
      features: ["8K Ultra-HD Textures", "Unreal Engine 5 Integration", "Direct .uasset Export", "3D Mesh Generation", "Dedicated GPU Clusters", "Priority 24/7 Support"],
      mostPopular: true,
    },
    {
      name: "Organization",
      price: "Custom",
      period: "",
      description: "For large scale deployment & security.",
      features: ["Everything in Studio Pro", "SSO (SAML/Okta)", "On-Premise Deployment", "Audit Logs", "Dedicated Success Manager", "Custom Contract & invoicing"],
      mostPopular: false,
    },
  ];

  const currentPlans = planType === "individual" ? individualPlans : enterprisePlans;

  return (
    <section id="pricing" className="py-24 px-8 sm:px-12 lg:px-20 relative bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Header & Toggle */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-slate-900">Simple, Transparent</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-10">
            Choose the perfect plan for digital identity creation of modern times.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center">
            <div className="relative bg-slate-200/50 p-1 rounded-lg flex items-center border border-slate-200 w-fit mb-2">

              {/* THE SLIDING BACKGROUND */}
              <div
                className={`absolute h-[calc(100%-8px)] top-1 rounded-md bg-white shadow-sm transition-all duration-200 ease-in-out`}
                style={{
                  width: "calc(50% - 4px)",
                  left: planType === "individual" ? "4px" : "calc(50%)",
                }}
              />

              {/* INDIVIDUAL BUTTON */}
              <button
                onClick={() => setPlanType("individual")}
                className={`relative z-10 flex items-center justify-center space-x-2 px-6 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${planType === "individual" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                <User className="w-4 h-4" />
                <span>Individual</span>
              </button>

              {/* ENTERPRISE BUTTON */}
              <button
                onClick={() => setPlanType("enterprise")}
                className={`relative z-10 flex items-center justify-center space-x-2 px-6 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${planType === "enterprise" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Enterprise</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {currentPlans.map((plan, key) => (
            <div
              key={`${planType}-${key}`}
              className={`relative flex flex-col bg-white rounded-lg transition-all duration-500 
                ${plan.mostPopular ? "lg:scale-105 z-10 animate-glow" : "border border-gray-100 hover:shadow-md"}`}
            >
              {/* MOST POPULAR BADGE - Centered and slightly above */}
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-blue-600 text-white text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8 sm:px-10 flex flex-col h-full">
                {/* Info Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mt-1 h-10">{plan.description}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    <span className="text-slate-400 ml-1 text-sm font-medium">{plan.period}</span>
                  </div>
                </div>

                {/* VISUAL DIVIDER & CTA BLOCK */}
                <div className="pt-2 pb-8">
                  <button className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer bg-brand-gradient text-white"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Try Rosentte"}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-3 font-medium uppercase tracking-wider">
                    {plan.price === "0" ? "Get started instantly" : "First month free trial"}
                  </p>
                </div>

                {/* Features List Section */}
                <div className="pt-8 border-t border-slate-100 flex-grow">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's included:</p>
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

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-lg font-medium">
            Need a custom solution for your needs?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors font-bold decoration-2 underline-offset-4 hover:underline">
              Contact Sales Team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}