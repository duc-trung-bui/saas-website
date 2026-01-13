import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The hyper-realistic textures are mind-blowing. I use these avatars for my virtual fashion brand, and my followers can't believe they aren't real photos.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Maintaining style consistency was always my biggest hurdle with AI. This platform solved it. My avatar looks like 'me' across every single generation.",
  },
  {
    name: "Emily Watson",
    role: "Gaming Streamer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "I generated my 3D VTuber base here in seconds. The 4K export quality is professional-grade. It's completely changed my channel's branding.",
  },
  {
    name: "Michelle Lane",
    role: "Architectural Visualizer",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The precision and detail for architectural elements are unmatched. I can quickly iterate on designs with realistic textures, saving hours of work.",
  },
  {
    name: "Aisha Khan",
    role: "Fashion Designer",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Designing virtual apparel has never been easier. The fabric drapes and material fidelity are incredibly accurate, bringing my digital runway to life.",
  },
  {
    name: "Liam O'Connell",
    role: "Indie Game Developer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Creating diverse NPC models used to be a huge bottleneck. Now I can generate unique characters with consistent art styles quickly and efficiently.",
  },
];


// Mock creator images for the social proof section
const socialProofCreators = [
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=112",
  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=112",
  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=112",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrevious = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 px-6 relative bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            What our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">creators</span> are saying
          </h2>
        </div>

        {/* JOIN THOUSANDS SECTION */}
        <div className="flex flex-col items-center justify-center text-center gap-5 animate-in fade-in slide-in-from-bottom-4 duration-1000">

          {/* The -space-x-4 applies to the containers now */}
          <div className="flex -space-x-4 isolate">
            {socialProofCreators.map((src, i) => (
              <div
                key={i}
                className="relative w-14 h-14 rounded-full bg-white shadow-md"
                style={{ zIndex: socialProofCreators.length + i }}
              >
                {/* Inner mask */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-white">
                  <img
                    src={src}
                    alt="Social Creator"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            ))}

            {/* +5k badge */}
            <div className="relative z-20">
              <div className="w-14 h-14 rounded-full">
                <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  +5k
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-blue-900 font-bold text-xl md:text-2xl mb-2">
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Join a global community of 5,000+ creators
              </span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL CARDS */}

        <div className="relative h-[480px] flex items-center justify-center isolate">
          {testimonials.map((testimonial, index) => {
            let position = index - activeIndex;
            if (position < -Math.floor(testimonials.length / 2)) position += testimonials.length;
            if (position > Math.floor(testimonials.length / 2)) position -= testimonials.length;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1;

            return (
              <div
                key={index}
                className={`absolute w-full max-w-lg p-8 rounded-[2.5rem] border border-slate-100 testimonial-card
                  ${isActive ? "isActive shadow-2xl shadow-blue-500/10" : "isSide"}
                  ${!isVisible ? "isOffstage" : ""} 
                `}
                style={{
                  transform: `
                    translate3d(${position * 65}%, 0, ${isActive ? 0 : -1}px)
                    scale(${isActive ? 1 : 0.85})
                  `,
                  zIndex: isActive ? 30 : isVisible ? 20 : 10,
                }}

              >
                {/* The solid white background must be INSIDE the card to act as a shield */}
                <div className="absolute inset-0 bg-white rounded-[2.5rem] -z-10" />

                <div className="flex flex-col gap-6 relative">
                  <Quote className="w-10 h-10 text-blue-100 fill-current" />
                  <p className="text-slate-700 text-lg font-medium italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <img src={testimonial.image} className="w-12 h-12 rounded-full object-cover" alt="" />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500 font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Dimming overlay (only visible on non-active cards) */}
                <div className="card-dim-overlay pointer-events-none absolute inset-0 rounded-[2.5rem]" />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-10 testimonial-controls-container">
          <div className="flex items-center gap-8">
            <button onClick={goToPrevious} className="p-4 bg-white rounded-full border border-gray-100 text-slate-400 hover:text-blue-600 transition-all active:scale-90">
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer outline-none
                    ${i === activeIndex
                      ? "w-12 bg-blue-600 cursor-default"
                      : "w-2.5 bg-slate-200 hover:bg-slate-400"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={goToNext} className="p-4 bg-white rounded-full border border-gray-100 text-slate-400 hover:text-blue-600 transition-all active:scale-90">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}