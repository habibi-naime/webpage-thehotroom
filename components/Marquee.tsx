type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className }: Props) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className={`marquee ${className ?? ""}`} aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="display-section text-5xl md:text-7xl lg:text-8xl text-cream"
          >
            {item}
            <span className="text-ember mx-12 inline-block">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
