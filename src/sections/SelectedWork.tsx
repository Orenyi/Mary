import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import PhoneImage from "../assets/images/hkdesignsstudios_phone.webp";

import WorkTabs from "../components/selected-work/WorkTabs";
import WorkControls from "../components/selected-work/WorkControls";
import WorkSlide from "../components/selected-work/WorkSlide";

import socialMedia from "../components/selected-work/slides/socialMedia";
import contentMarketing from "../components/selected-work/slides/contentMarketing";
import emailMarketing from "../components/selected-work/slides/emailMarketing";
import photography from "../components/selected-work/slides/photography";
import videoEditing from "../components/selected-work/slides/videoEditing";

import type { WorkSlideData } from "../components/selected-work/workTypes";

const WORK_SLIDES: WorkSlideData[] = [
  socialMedia,
  contentMarketing,
  emailMarketing,
  photography,
  videoEditing,
];

const SLIDE_INTERVAL = 10_000;

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + WORK_SLIDES.length) % WORK_SLIDES.length);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % WORK_SLIDES.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + WORK_SLIDES.length) % WORK_SLIDES.length,
    );
  }, []);

  // Advance every 10 seconds, resetting the timer after a change.
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(goToNext, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, reduceMotion, goToNext]);

  const handleConnect = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="section-padding overflow-hidden bg-paper"
    >
      <div className="page-container">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-between gap-4">
            <p className="section-label">03. Selected Work</p>

            <WorkControls
              onPrevious={goToPrevious}
              onNext={goToNext}
              activeIndex={activeIndex}
              total={WORK_SLIDES.length}
            />
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="body-copy mt-4 max-w-[48ch] text-sm sm:mt-5 sm:text-base lg:hidden">
                A selection of creative work across social media, content
                creation, email marketing, and photography.
              </p>
            </div>

            <div className="lg:pb-2">
              <WorkTabs
                slides={WORK_SLIDES}
                activeIndex={activeIndex}
                onSelect={goToSlide}
                reduceMotion={reduceMotion}
              />
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget as Node | null)
            ) {
              setIsPaused(false);
            }
          }}
        >
          <AnimatePresence mode="wait">
            <WorkSlide
              key={WORK_SLIDES[activeIndex].id}
              slide={WORK_SLIDES[activeIndex]}
              image={PhoneImage}
              reduceMotion={reduceMotion}
              onConnect={handleConnect}
            />
          </AnimatePresence>
        </div>

        {/* Slide progress */}
        <div
          className="mt-8 flex gap-2"
          aria-label={`Slide ${activeIndex + 1} of ${WORK_SLIDES.length}`}
        >
          {WORK_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show ${slide.tabLabel}`}
              aria-current={index === activeIndex ? "step" : undefined}
              onClick={() => goToSlide(index)}
              className="h-1 flex-1 overflow-hidden rounded-full bg-stone"
            >
              <motion.span
                className="block h-full rounded-full bg-terracotta"
                initial={false}
                animate={{
                  width: index === activeIndex ? "100%" : "0%",
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
