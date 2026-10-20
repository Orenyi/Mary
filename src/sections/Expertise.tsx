import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const EXPERTISE_ITEMS = [
  {
    number: "01",
    title: "Social Media Management",
    description:
      "Planning, creating, and publishing platform-specific content while reviewing performance metrics to understand what resonates with the audience.",
  },
  {
    number: "02",
    title: "Email Marketing",
    description:
      "Creating segmented email campaigns with relevant copy, clear calls to action, and performance tracking to measure subscriber response.",
  },
  {
    number: "03",
    title: "Content Marketing",
    description:
      "Developing website articles, promotional videos, and other audience-focused content that communicates clear brand or campaign messages.",
  },
  {
    number: "04",
    title: "Video Editing",
    description:
      "Editing short-form videos with clean cuts, text, pacing, transitions, and visual sequencing to keep the message clear and engaging.",
  },
  {
    number: "05",
    title: "Photography",
    description:
      "Capturing well-composed images with attention to lighting, framing, and detail, with basic Adobe Photoshop editing for refinement.",
  },
  {
    number: "06",
    title: "Transcription",
    description:
      "Turning audio recordings into accurate, readable transcripts that preserve the speaker’s meaning, context, and flow.",
  },
];

const DIVIDER_COLOR = "border-[#D9D4C9]";

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative isolate overflow-hidden bg-olive py-16 text-paper sm:py-20 lg:py-24"
    >
      {/* Subtle background treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(ellipse_at_90%_85%,rgba(28,28,25,0.08),transparent_55%)]"
      />

      <div className="page-container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={
            isInView
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
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.65fr] lg:gap-16 xl:gap-24">
            {/* Section introduction */}
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/75 sm:text-xs">
                02. Expertise
              </p>

              <h2
                id="expertise-heading"
                className="max-w-[10ch] font-heading text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.055em]"
              >
                What I
                <br />
                Do Best
              </h2>

              <span
                aria-hidden="true"
                className="my-7 block h-px w-14 bg-paper/60 sm:my-8"
              />

              <p className="max-w-[30ch] text-sm leading-[1.85] text-paper/80 sm:text-base">
                I combine audience insights, digital marketing, and visual
                storytelling to create targeted campaigns and content tailored
                to each audience and channel.
              </p>
            </div>

            {/* Two-column expertise grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {EXPERTISE_ITEMS.map((item, index) => {
                const isLastItem = index === EXPERTISE_ITEMS.length - 1;
                const startsNewRow = index >= 2;

                return (
                  <motion.article
                    key={item.number}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 0, y: 18 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={[
                      "min-w-0 py-7",
                      // Mobile: horizontal divider after every item except the last
                      !isLastItem ? `border-b ${DIVIDER_COLOR}` : "",
                      // Tablet and desktop: remove mobile borders
                      "sm:border-b-0 sm:px-5",
                      // Vertical divider between the two columns
                      index % 2 === 1
                        ? `sm:border-l ${DIVIDER_COLOR} sm:pl-6`
                        : "sm:pl-0 sm:pr-6",
                      // Horizontal dividers between grid rows
                      startsNewRow ? `sm:border-t ${DIVIDER_COLOR}` : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <p className="font-heading text-2xl font-normal tracking-wide text-paper/80 sm:text-3xl">
                      {item.number}
                    </p>

                    <h3 className="mt-4 max-w-[19ch] font-heading text-lg font-semibold leading-snug tracking-[-0.035em] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[34ch] text-sm leading-[1.75] text-paper/80">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
