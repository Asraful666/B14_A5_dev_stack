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
    <article className="flex min-h-[188px] flex-col rounded-xl border border-[#e8edf3] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(15,23,42,0.07)]">
      
      {/* Top Row */}
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

      {/* Name */}
      <h3 className="mt-2 text-[15px] font-bold text-[#172033]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 line-clamp-3 text-[10px] leading-[15px] text-[#8190a5]">
        {technology.description}
      </p>

      {/* Details */}
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

      {/* Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md py-2 text-[10px] font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-[#e9edf2] text-[#94a0af]"
            : "bg-[#0b1220] text-white hover:bg-[#172033]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechCard;