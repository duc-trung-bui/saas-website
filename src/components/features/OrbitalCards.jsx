import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function OrbitalCards() {
  return (
    <div className="flex flex-col gap-8 lg:block lg:absolute lg:top-[58%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[877px] lg:h-[877px] z-10">

      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[842px] h-[842px] rounded-full border border-blue-200/90 animate-glow-ring shadow-[0_0_35px_rgba(59,130,246,0.1)]" />
      </div>

      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className={`col-${num} lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:origin-center pointer-events-none`}
        >
          <div className="feature-card-content pointer-events-auto lg:-translate-y-[448px]">
            <FeatureCard item={features[num - 1]} />
          </div>
        </div>
      ))}

    </div>
  );
}
