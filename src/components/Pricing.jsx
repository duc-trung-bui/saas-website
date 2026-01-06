import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative group flex flex-col h-full transition-all duration-300 
                ${plan.mostPopular ? "lg:scale-105 z-10" : "z-0"}`}
            >
              {/* MOST POPULAR BADGE */}
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="flex items-center space-x-1 px-4 py-1.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* INNER WRAPPER */}
              <div
                className={`
                  relative flex-1 flex flex-col p-6 sm:p-8 rounded-2xl border backdrop-blur-sm overflow-hidden transition-colors duration-300
                  ${plan.mostPopular 
                    ? "border-blue-500 bg-slate-900/80 shadow-2xl shadow-blue-500/10" 
                    : "border-slate-800 bg-slate-900/50 hover:border-slate-700"}
                `}
              >
                {/* THE OVERLAY: Now safely trapped inside overflow-hidden */}
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />

                {/* Card Content Wrapper: Relative Z-index ensures text stays above overlay */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 ml-2 text-sm sm:text-base">/month</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 grow">
                    {plan.features.map((feature, featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-start space-x-3"
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base ${
                      plan.mostPopular
                        ? "bg-linear-to-b from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
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
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Contact Sales Team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}