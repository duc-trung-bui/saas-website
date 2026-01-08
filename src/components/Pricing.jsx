import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and hobbyists",
    features: [
      "50 AI Generations / mo",
      "Standard Resolution",
      "Basic Style Library",
      "Email support",
      "Personal Use License",
      "Mobile access",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for creators and influencers",
    features: [
      "Unlimited Generations",
      "4K Ultra-HD Resolution",
      "Advanced Style Consistency",
      "Priority Rendering",
      "Commercial License",
      "Custom Style Training",
      "Background Removal",
      "Priority Support",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For studios and large teams",
    features: [
      "Everything in Professional",
      "API Access for Apps",
      "Custom Model Fine-tuning",
      "Dedicated GPU Servers",
      "Team Collaboration Tools",
      "Advanced security & SSO",
      "Dedicated Account Manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 px-6 lg:px-8 relative bg-slate-50 text-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-slate-900">Simple, Transparent</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Choose the perfect plan for your digital identity. All plans include a 14-day
            free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative group flex flex-col h-full transition-all duration-500 
                ${plan.mostPopular ? "lg:scale-105 z-10" : "z-0 hover:-translate-y-2"}`}
            >
              {/* MOST POPULAR BADGE */}
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="flex items-center space-x-1.5 px-4 py-1.5 bg-blue-600 rounded-full text-sm font-bold text-white shadow-xl shadow-blue-600/30">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* INNER WRAPPER */}
              <div
                className={`
                  relative flex-1 flex flex-col p-8 rounded-[2.5rem] border transition-all duration-300
                  ${plan.mostPopular
                    ? "border-blue-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                    : "border-slate-200 bg-white/50 hover:bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/50"}
                `}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-500 text-sm font-medium mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                        ${plan.price}
                      </span>
                      <span className="text-slate-400 ml-2 text-base font-medium">/mo</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10 grow">
                    {plan.features.map((feature, featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-start space-x-3"
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-blue-600 stroke-[3px]" />
                        </div>
                        <span className="text-slate-600 text-sm sm:text-base font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 mt-auto hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base ${plan.mostPopular
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                      }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-lg font-medium">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors font-bold decoration-2 underline-offset-4 hover:underline">
              Contact our Sales Team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}