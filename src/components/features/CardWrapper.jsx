import { useState } from 'react';

export default function CardWrapper({ children, className = "" }) {
  // Touch devices don't trigger :hover reliably, so mirror it with a pressed state
  const [pressed, setPressed] = useState(false);
  const press = () => setPressed(true);
  const release = () => setPressed(false);

  return (
    <div
      data-pressed={pressed}
      onTouchStart={press}
      onTouchEnd={release}
      onTouchCancel={release}
      className={`relative group p-[2px] overflow-hidden bg-slate-200 transition-all duration-500 flex flex-col z-10 rounded-none ${className}`}
    >

      {/* Rainbow Layer - Only visible on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-data-[pressed=true]:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
        <div className="animate-rainbow-glow" />
      </div>

      <div className="relative h-full w-full bg-white overflow-hidden flex flex-col z-10 rounded-none">
        {children}
      </div>
    </div>
  );
}
