import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FiBriefcase, FiUsers, FiEdit3, FiBarChart2 } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the brand",
    description: "Learn your goals, values and what makes your brand unique.",
    Icon: FiBriefcase,
  },
  {
    number: "02",
    title: "Research the audience",
    description:
      "Explore audience interests, trends and content opportunities.",
    Icon: FiUsers,
  },
  {
    number: "03",
    title: "Develop the direction",
    description:
      "Create a content plan and visual direction that fits your brand.",
    Icon: FaRegLightbulb,
  },
  {
    number: "04",
    title: "Create and publish",
    description: "Design, write and share engaging content consistently.",
    Icon: FiEdit3,
  },
  {
    number: "05",
    title: "Review and refine",
    description:
      "Evaluate what works and make improvements for better results.",
    Icon: FiBarChart2,
  },
];

const SECTION_CONTENT = {
  label: "04. My Process",
  heading: "A simple and thoughtful approach.",
  description:
    "A step-by-step process to create meaningful and consistent content for your brand.",
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const sectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden  bg-paper py-16 sm:py-20 lg:py-24"
    >
      <div className="page-container">
        <div className="grid gap-10 ">
          {/* Section introduction */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              sectionInView
                ? { opacity: 1, y: 0 }
                : shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 20 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md"
          >
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal sm:text-xs">
              {SECTION_CONTENT.label}
            </p>

            <h2
              id="process-heading"
              className="max-w-[13ch] font-heading text-[clamp(2.5rem,4.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.055em]"
            >
              {SECTION_CONTENT.heading}
            </h2>

            <p className="mt-6 max-w-[34ch] text-sm leading-[1.8] text-muted sm:text-base">
              {SECTION_CONTENT.description}
            </p>
          </motion.div>

          {/* Process steps */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  step={step}
                  index={index}
                  isSectionInView={sectionInView}
                  shouldReduceMotion={shouldReduceMotion}
                  isLast={index === PROCESS_STEPS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProcessStepData = (typeof PROCESS_STEPS)[number];

type ProcessStepProps = {
  step: ProcessStepData;
  index: number;
  isSectionInView: boolean;
  shouldReduceMotion: boolean;
  isLast: boolean;
};

function ProcessStep({
  step,
  index,
  isSectionInView,
  shouldReduceMotion,
  isLast,
}: ProcessStepProps) {
  const itemRef = useRef<HTMLElement>(null);

  const itemInView = useInView(itemRef, {
    once: true,
    amount: 0.25,
  });

  const shouldReveal = isSectionInView && itemInView;
  const Icon = step.Icon;

  return (
    <motion.article
      ref={itemRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={
        shouldReveal
          ? { opacity: 1, y: 0 }
          : shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 20 }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "relative min-w-0 pb-9 pl-10",
        "sm:px-5 sm:pb-8",
        "md:px-4",
        "lg:px-4",
        "xl:px-4",
        !isLast ? " border-border sm:border-b-0" : "",
        index % 2 === 1 ? "sm:border-l sm:border-border" : "",
        index % 3 !== 0 ? "md:border-l md:border-border" : "md:border-l-0",
        index % 4 !== 0 ? "lg:border-l lg:border-border" : "lg:border-l-0",
        index % 5 !== 0 ? "xl:border-l xl:border-border" : "xl:border-l-0",
        "first:pt-0 sm:first:pl-0",
        "last:pb-0",
      ].join(" ")}
    >
      {/* Mobile timeline */}
      <span
        aria-hidden="true"
        className={[
          "absolute left-[11px] top-1 h-full w-px bg-border sm:hidden",
          isLast ? "hidden" : "",
        ].join(" ")}
      />

      <span
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center bg-paper sm:hidden"
      >
        <Icon className="h-5 w-5 text-terracotta" strokeWidth={1.7} />
      </span>

      {/* Step number */}
      <p className="font-heading text-xl font-normal tracking-wide text-muted sm:text-2xl">
        {step.number}
      </p>

      {/* Desktop and tablet icon */}
      <Icon
        aria-hidden="true"
        className="mt-5 hidden h-7 w-7 text-terracotta sm:block"
        strokeWidth={1.6}
      />

      <h3 className="mt-3 max-w-[15ch] font-heading text-base font-semibold leading-[1.2] tracking-[-0.035em] sm:mt-4 sm:text-lg">
        {step.title}
      </h3>

      <p className="mt-3 max-w-[24ch] text-xs leading-[1.7] text-muted sm:text-sm">
        {step.description}
      </p>
    </motion.article>
  );
}
