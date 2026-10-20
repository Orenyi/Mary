import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ABOUT_CONTENT = {
  label: "01. ABOUT ME",
  heading: "A communicator at heart, a creator by passion.",
  paragraphs: [
    "I’m Mary Ahuoiza Otaru, a Mass Communication graduate building a career in digital marketing across social media, email and content marketing. I help brands turn ideas into clear, targeted content and campaigns that speak to the right audience and support stronger engagement.",
    "My edge is the combination of marketing, writing and visual communication. From segmented emails and social content to short-form videos and photography, I create digital content and campaigns that are tailored to each platform, informed by audience insights, and built to communicate with purpose.",
  ],
};

const CHARACTER_DELAY = 16;
const PARAGRAPH_DELAY = 450;

function useTypingEffect(
  paragraphs: string[],
  isActive: boolean,
  reducedMotion: boolean,
) {
  const [visibleText, setVisibleText] = useState<string[]>(() =>
    reducedMotion ? paragraphs : paragraphs.map(() => ""),
  );

  useEffect(() => {
    if (reducedMotion) {
      setVisibleText(paragraphs);
      return;
    }

    if (!isActive) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let paragraphIndex = 0;
    let characterIndex = 0;
    let cancelled = false;

    setVisibleText(paragraphs.map(() => ""));

    const typeNextCharacter = () => {
      if (cancelled) return;

      const currentParagraph = paragraphs[paragraphIndex];

      if (characterIndex < currentParagraph.length) {
        characterIndex += 1;

        setVisibleText((previous) =>
          previous.map((text, index) =>
            index === paragraphIndex
              ? currentParagraph.slice(0, characterIndex)
              : text,
          ),
        );

        timeoutId = setTimeout(typeNextCharacter, CHARACTER_DELAY);
        return;
      }

      paragraphIndex += 1;
      characterIndex = 0;

      if (paragraphIndex < paragraphs.length) {
        timeoutId = setTimeout(typeNextCharacter, PARAGRAPH_DELAY);
      }
    };

    typeNextCharacter();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isActive, paragraphs, reducedMotion]);

  return visibleText;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion() ?? false;

  const sectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const textInView = useInView(textRef, {
    once: true,
    amount: 0.25,
  });

  const visibleParagraphs = useTypingEffect(
    ABOUT_CONTENT.paragraphs,
    textInView,
    shouldReduceMotion,
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden bg-[#f4f0e9] py-14 sm:py-20 lg:py-24"
    >
      <motion.div
        className="page-container"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={
          sectionInView
            ? { opacity: 1, y: 0 }
            : shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 24 }
        }
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="grid gap-8 sm:gap-10  lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left: heading */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-olive sm:mb-6 sm:text-xs">
              {ABOUT_CONTENT.label}
            </p>

            <h2
              id="about-heading"
              className="max-w-[18ch] font-heading text-[clamp(2.25rem,5.2vw,4rem)] font-medium leading-[1.03] tracking-[-0.055em]"
            >
              {ABOUT_CONTENT.heading}
            </h2>
          </div>

          {/* Right: text that types when it enters the viewport */}
          <div
            ref={textRef}
            className="min-w-0 pt-1 md:pt-2"
            aria-label="About Mary"
          >
            <div className="space-y-5 text-sm leading-[1.8] text-charcoal sm:space-y-6 sm:text-base lg:mt-[1.6rem]">
              {visibleParagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {textInView &&
                    !shouldReduceMotion &&
                    visibleParagraphs.some(
                      (text, textIndex) =>
                        textIndex === index &&
                        text.length < ABOUT_CONTENT.paragraphs[index].length,
                    ) && (
                      <span
                        aria-hidden="true"
                        className="ml-0.5 inline-block h-[1em] w-px translate-y-[2px] animate-pulse bg-terracotta"
                      />
                    )}
                </p>
              ))}
            </div>

            {/* Screen readers receive the complete copy without waiting for typing */}
            <span className="sr-only">
              {ABOUT_CONTENT.paragraphs.join(" ")}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
