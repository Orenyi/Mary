import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type WorkControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
  activeIndex: number;
  total: number;
};

export default function WorkControls({
  onPrevious,
  onNext,
  activeIndex,
  total,
}: WorkControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="mr-1 text-xs tabular-nums text-muted"
        aria-live="polite"
        aria-atomic="true"
      >
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </span>

      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous portfolio category"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-terracotta hover:bg-terracotta hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta"
      >
        <FiArrowLeft size={17} />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next portfolio category"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-terracotta hover:bg-terracotta hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta"
      >
        <FiArrowRight size={17} />
      </button>
    </div>
  );
}
