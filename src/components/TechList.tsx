import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechListProps {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function TechList({
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechListProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch {
        setError("Unable to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return (
      <section
        id="technologies"
        className="bg-[#f8fafc] px-5 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm text-[#8190a5]">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="technologies"
        className="bg-[#f8fafc] px-5 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-[1120px]">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="bg-[#f8fafc] px-5 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1120px]">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#172033] sm:text-[38px]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#ec4f82] to-[#b737b8] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#8190a5] sm:text-[15px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Sidebar */}
        <div className="grid items-start gap-5 lg:grid-cols-[1fr_245px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                onAdd={onAdd}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}
          </div>

          {/* Your Stack */}
          <aside className="rounded-xl border border-[#e5ebf2] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03)] lg:sticky lg:top-24">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-[#172033]">
                  Your Stack
                </h3>

                <p className="mt-1 text-[10px] text-[#a0adbc]">
                  {stack.length} Selected
                </p>
              </div>
            </div>

            {stack.length === 0 ? (
              <div className="mt-4 rounded-lg border border-dashed border-[#dfe5ec] px-3 py-7 text-center">
                <p className="text-[10px] text-[#94a0af]">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <div className="mt-3 space-y-2">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-2 rounded-lg border border-[#e3e9f0] bg-white px-2.5 py-2"
                  >
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      className="h-7 w-7 object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-semibold text-[#172033]">
                        {technology.name}
                      </p>

                      <p className="text-[8px] text-[#94a0af]">
                        {technology.category}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemove(technology.id)}
                      className="text-lg leading-none text-[#9aa7b7] transition hover:text-[#ff4d5e]"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={onRemoveAll}
              disabled={stack.length === 0}
              className={`mt-4 w-full rounded-md border py-2.5 text-[10px] font-semibold transition ${
                stack.length === 0
                  ? "cursor-not-allowed border-[#e5eaf0] text-[#b6bfca]"
                  : "border-[#ff8996] bg-white text-[#ff4d5e] hover:bg-[#fff5f6]"
              }`}
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default TechList;