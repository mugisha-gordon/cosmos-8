/** Animated SVG constellation — connects "stars" with thin lines */
const Constellation = ({ className = "" }: { className?: string }) => {
  const points = [
    [10, 20], [30, 40], [55, 15], [75, 35], [90, 60],
    [70, 75], [45, 85], [20, 70], [40, 55], [60, 50],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--water))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--fire))" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {points.map((p, i) => {
        const next = points[(i + 1) % points.length];
        return (
          <line
            key={`l-${i}`}
            x1={p[0]} y1={p[1]} x2={next[0]} y2={next[1]}
            stroke="url(#line-grad)" strokeWidth="0.15" opacity="0.5"
          />
        );
      })}
      {points.map((p, i) => (
        <circle
          key={`c-${i}`}
          cx={p[0]} cy={p[1]} r="0.6"
          fill="hsl(var(--nexus))"
          className="animate-pulse-glow"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  );
};

export default Constellation;
