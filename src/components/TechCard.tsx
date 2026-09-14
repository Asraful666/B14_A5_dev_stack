import type { Technology } from "../types";

interface TechCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechCard({
  technology,
  onAdd,
  isAdded,
}: TechCardProps) {
  return (
    <article
      className={`flex min-h-[220px] flex-col rounded-xl bg-white p-5 transition duration-200 ${
        isAdded
          ? "border-2 border-[#ff4d6d]"
          : "border border-[#e8edf3] shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(15,23,42,0.07)]"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-[#eff8ff] px-2.5 py-1 text-[10px] font-semibold text-[#1593df]">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-2 text-[15px] font-bold text-[#172033]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 line-clamp-3 text-[10px] leading-[15px] text-[#8190a5]">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-auto flex items-center justify-between pt-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#f3f6fa] px-2 py-1 text-[9px] font-medium text-[#64748b]">
            {technology.category}
          </span>

          <span className="rounded bg-[#f3f6fa] px-2 py-1 text-[9px] font-medium text-[#64748b]">
            {technology.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-semibold text-[#526173]">
          <span className="text-[#f6b800]">★</span>
          {technology.rating}
        </div>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md py-2 text-[10px] font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-[#fff5f7] text-[#ff3f63]"
            : "bg-[#0b1220] text-white hover:bg-[#172033]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechCard;