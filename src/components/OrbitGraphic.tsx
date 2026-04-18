import logo from "@/assets/cosmos8-logo.png";

/** A surprise decorative orbit graphic — three rings, planet nodes, central logo */
const OrbitGraphic = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative aspect-square ${className}`}>
      {/* outer ring */}
      <div className="absolute inset-0 rounded-full border border-water/30 animate-spin-slow">
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-water shadow-[0_0_12px_hsl(var(--water))]" />
        <span className="absolute top-1/3 -right-1.5 w-2 h-2 rounded-full bg-water/70" />
      </div>

      {/* middle ring */}
      <div className="absolute inset-[12%] rounded-full border border-nexus/40 animate-spin-reverse">
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-nexus shadow-[0_0_12px_hsl(var(--nexus))]" />
        <span className="absolute -bottom-1 left-1/4 w-2 h-2 rounded-full bg-nexus/70" />
      </div>

      {/* inner ring */}
      <div className="absolute inset-[26%] rounded-full border border-fire/40 animate-spin-slow">
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-fire shadow-[0_0_12px_hsl(var(--fire))]" />
        <span className="absolute top-1/4 -left-1 w-2 h-2 rounded-full bg-fire/70" />
      </div>

      {/* dotted ticks */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
        {[...Array(36)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="2"
            x2="50"
            y2="5"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.3"
            transform={`rotate(${i * 10} 50 50)`}
          />
        ))}
      </svg>

      {/* core logo */}
      <div className="absolute inset-[36%] flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-water/20 blur-2xl animate-pulse-glow" />
          <div className="absolute inset-0 rounded-full bg-fire/20 blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          <img src={logo} alt="" className="relative w-full h-full object-contain animate-float-y" />
        </div>
      </div>
    </div>
  );
};

export default OrbitGraphic;
