import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react'; // Import the Plus icon

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How does the AI integration actually work?",
    answer: "Our platform connects directly to the APIs of major providers like OpenAI and Nvidia. We handle the authentication, data formatting, and response parsing, so you just get the clean output ready for your application."
  },
  {
    question: "Is my data used to train the models?",
    answer: "No. We use the enterprise-tier APIs for all our partners (OpenAI, Anthropic, Google), which explicitly state that input data is not used for model training. Your data remains private and ephemeral."
  },
  {
    question: "Can I switch between different AI models?",
    answer: "Absolutely. You can hot-swap models (e.g., switch from GPT-4 to Claude 3.5 Sonnet) with a single line of config code. This allows you to optimize for speed, cost, or reasoning capability on the fly."
  },
  {
    question: "What happens if an API provider goes down?",
    answer: "We have built-in redundancy. If your primary provider experiences an outage, our system can automatically reroute your request to a fallback model of equivalent capability to ensure zero downtime."
  },
  {
    question: "Do you offer on-premise deployment?",
    answer: "Yes, for enterprise clients, we offer a containerized version of our orchestration layer that can be deployed within your own VPC or on-premise servers for maximum security and compliance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 73%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="pb-40 bg-slate-50">
      <div
        ref={containerRef}
        className="max-w-[50%] mx-auto px-6 opacity-0 will-change-transform"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* Question Header */}
                <div className="flex justify-between items-center py-4">
                  <h3 className={`text-lg md:text-xl transition-colors duration-200 ${isOpen ? 'text-slate-900 font-semibold' : 'text-slate-800 font-medium'}`}>
                    {faq.question}
                  </h3>

                  {/* Icon Container */}
                  <div className="relative ml-4">
                    <Plus
                      className={`w-6 h-6 text-slate-500 transition-all duration-300 ease-out 
                        ${isOpen ? 'rotate-90' : 'rotate-0'}
                      `}
                      strokeWidth={isOpen ? 1.9 : 1.5}
                    />
                  </div>
                </div>

                {/* Accordion Answer Animation */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-700 text-md leading-relaxed pb-6 pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}