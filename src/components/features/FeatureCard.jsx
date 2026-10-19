import { ArrowRight } from "lucide-react";
import CardWrapper from "./CardWrapper";

export default function FeatureCard({ item }) {
  return (
    <CardWrapper className="w-full max-w-[350px] mx-auto shadow-sm">
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 group-data-[pressed=true]:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow transition-transform duration-500 ease-out group-hover:-translate-y-2 group-data-[pressed=true]:-translate-y-2">
        <div className="inline-flex p-2.5 bg-slate-50 rounded-none mb-4 w-fit border border-slate-100 transition-colors duration-500 group-hover:bg-white group-data-[pressed=true]:bg-white">
          {item.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>

        <button className="inline-flex items-center text-sm font-bold text-blue-600 group/btn mt-auto">
          Learn more
          <ArrowRight className="ml-2 mt-[2px] w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </CardWrapper>
  );
}
