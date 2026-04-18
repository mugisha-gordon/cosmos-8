interface MarqueeBandProps {
  items: string[];
}

const MarqueeBand = ({ items }: MarqueeBandProps) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-background/40 backdrop-blur-sm py-5">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
              {item}
            </span>
            <span className="text-fire text-2xl">✦</span>
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default MarqueeBand;
