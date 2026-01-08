import { Sparkles, Layers, Zap, Download, ArrowRight } from "lucide-react";

import FeatureImage1 from "../assets/images/feature-01.png";
import FeatureImage2 from "../assets/images/feature-02.png";
import FeatureImage3 from "../assets/images/feature-03.png";
import FeatureImage4 from "../assets/images/feature-04.png";

const features = [
  {
    title: "Hyper-Realistic Generation",
    description: "Neural engine capturing skin texture and lighting for indistinguishable results.",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    image: FeatureImage1,
    column: 1
  },
  {
    title: "Style Consistency",
    description: "Maintain facial features across different outfits and poses seamlessly.",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
    image: FeatureImage2,
    column: 2
  },
  {
    title: "Advanced Compression",
    description: "Reducing file sizes up to 80% while retaining 4K detail for faster loads.",
    icon: <Zap className="w-5 h-5 text-cyan-600" />,
    image: FeatureImage4,
    column: 2
  },
  {
    title: "Pro-Grade Studio Exports",
    description: "4K resolution with automatic background removal for instant deployment.",
    icon: <Download className="w-5 h-5 text-blue-600" />,
    image: FeatureImage3,
    column: 3
  },
];

const CardWrapper = ({ children, className = "" }) => (
  <div className={`relative group p-[2px] overflow-hidden bg-slate-200 transition-all duration-500 flex flex-col z-10 rounded-none ${className}`}>

    {/* Rainbow Layer - Only visible on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
      <div className="animate-rainbow-glow" />
    </div>

    {/* The Content Box - Removed rounded-[10px] */}
    <div className="relative h-full w-full bg-white overflow-hidden flex flex-col z-10 rounded-none">
      {children}
    </div>
  </div>
);

const FeatureCard = ({ item }) => (
  <CardWrapper className="w-full max-w-[350px] mx-auto shadow-sm">
    <div className="aspect-video w-full overflow-hidden bg-slate-100">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Text lift effect from previous step */}
    <div className="p-8 flex flex-col flex-grow transition-transform duration-500 ease-out group-hover:-translate-y-2">
      <div className="inline-flex p-2.5 bg-slate-50 rounded-none mb-4 w-fit border border-slate-100 transition-colors duration-500 group-hover:bg-white">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>

      <button className="inline-flex items-center text-sm font-bold text-blue-600 group/btn mt-auto">
        Learn more
        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </CardWrapper>
);

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Symmetrical Connecting Ring */}
        <div className="absolute top-[56.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square hidden lg:block pointer-events-none z-0">
          <div className="w-full h-full rounded-full border animate-glow-ring" />
        </div>

        <div className="text-center mb-16 lg:mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Master Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Identity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center relative z-10">
          <div className="flex items-center justify-center">
            {features.filter(f => f.column === 1).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

          <div className="flex flex-col gap-12">
            {features.filter(f => f.column === 2).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            {features.filter(f => f.column === 3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}