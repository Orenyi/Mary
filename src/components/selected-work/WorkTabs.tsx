import { motion } from "framer-motion";
import type { WorkSlideData } from "./workTypes";

type WorkTabsProps = {
  slides: WorkSlideData[];
  activeIndex: number;
  onSelect: (index: number) => void;
  reduceMotion: boolean;
};

export default function WorkTabs({
  slides,
  activeIndex,
  onSelect,
  reduceMotion,
}: WorkTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Portfolio categories"
      className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6"
    >
      {slides.map((slide, index) => {
        const active = index === activeIndex;

        return (
          <button
            key={slide.id}
            id={`work-tab-${slide.id}`}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls="work-slide-panel"
            onClick={() => onSelect(index)}
            className={[
              "relative rounded-full px-3 py-2 text-xs transition-colors duration-300 sm:px-0 sm:py-2 sm:text-sm",
              active
                ? "bg-terracotta text-white sm:bg-transparent sm:text-terracotta"
                : "bg-surface text-muted hover:text-ink sm:bg-transparent",
            ].join(" ")}
          >
            {slide.tabLabel}

            {active && (
              <motion.span
                layout={!reduceMotion}
                aria-hidden="true"
                className="absolute inset-x-3 -bottom-0.5 hidden h-[2px] rounded-full bg-terracotta sm:block"
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
