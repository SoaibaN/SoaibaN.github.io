/**
 * Horizontally scrolling skills marquee (pure CSS, no JS animation lib).
 *
 * - Each row duplicates its items so the -50% keyframe loops seamlessly.
 * - Pauses on hover; freezes to a static, scrollable strip under
 *   prefers-reduced-motion (see globals.css).
 */

type Row = {
  label: string;
  items: string[];
  reverse?: boolean;
  duration?: string;
};

function MarqueeRow({ items, reverse, duration }: Row) {
  // Duplicate the list so translateX(-50%) wraps seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="marquee marquee-mask overflow-hidden">
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: duration ?? "40s" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className="skill-chip mx-2 my-2 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee({ rows }: { rows: Row[] }) {
  return (
    <div className="flex flex-col gap-3">
      {rows.map((row, i) => (
        <MarqueeRow
          key={row.label}
          {...row}
          reverse={i % 2 === 1}
          duration={i % 2 === 1 ? "52s" : "44s"}
        />
      ))}
    </div>
  );
}
