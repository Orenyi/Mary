import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
  FiLinkedin,
} from "react-icons/fi";

import {
  FaXTwitter,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { StarsBackground } from "../../@/components/animate-ui/backgrounds/stars";

const CONTACT_LINKS = {
  email: "mailto:maryotaru81@gmail.com?subject=Project%20Enquiry",
  whatsapp: "https://wa.me/2349031496617",
  linkedin: "https://www.linkedin.com/in/mary-otaru",
};

const CONTACT_CONTENT = {
  label: "06. Let's Work Together",
  headingStart: "Have a project",
  headingAccent: "mind?",
  description:
    "I'm open to opportunities, collaborations and exciting conversations. Let's create something meaningful together.",
  availability: "Available for opportunities & collaborations",
};

const CONTACT_ACTIONS = [
  {
    id: "email",
    label: "Send me an email",
    detail: "For project enquiries",
    href: CONTACT_LINKS.email,
    Icon: FiMail,
    external: false,
    primary: true,
  },
  {
    id: "whatsapp",
    label: "Let's chat on WhatsApp",
    detail: "For a quick conversation",
    href: CONTACT_LINKS.whatsapp,
    Icon: FiMessageCircle,
    external: true,
    primary: false,
  },
  {
    id: "linkedin",
    label: "Connect on LinkedIn",
    detail: "Let's grow our networks",
    href: CONTACT_LINKS.linkedin,
    Icon: FiLinkedin,
    external: true,
    primary: false,
  },
];

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com/MaryOtaru001",
    Icon: FaXTwitter,
    color: "#000000",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@maryotaru001",
    Icon: FaTiktok,
    color: "#000000",
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/maryotaru_/",
    Icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DHbFzziy6/",
    Icon: FaFacebookF,
    color: "#1877F2",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-paper py-16 sm:py-20 lg:py-28"
    >
      <StarsBackground
        starColor="#777A61"
        speed={60}
        factor={0.025}
        pointerEvents={false}
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(245,242,235,0.2)_0%,rgba(245,242,235,0.05)_60%,transparent_100%)]"
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
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <p className="section-label justify-center">
            {CONTACT_CONTENT.label}
          </p>

          {/* Editorial heading */}
          <h2
            id="contact-heading"
            className="mx-auto mt-5 max-w-[13ch] font-heading text-[clamp(2.8rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.065em]"
          >
            {CONTACT_CONTENT.headingStart}
            <br />
            in{" "}
            <span className="font-normal italic text-terracotta">
              {CONTACT_CONTENT.headingAccent}
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="body-copy mx-auto mt-5 max-w-[58ch] text-sm sm:mt-7 sm:text-base">
            {CONTACT_CONTENT.description}
          </p>

          {/* Contact actions */}
          <div className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-3">
            {CONTACT_ACTIONS.map((action, index) => {
              const Icon = action.Icon;

              return (
                <motion.a
                  key={action.id}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 14 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : 0.15 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-label={`${action.label}: ${action.detail}`}
                  className={[
                    "group relative flex min-h-[76px] items-center gap-3 rounded-full border px-4 py-3 text-left",
                    "transition-colors duration-300",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta",
                    action.primary
                      ? "border-terracotta bg-terracotta text-white hover:border-ink hover:bg-ink"
                      : action.id === "linkedin"
                        ? "border-olive bg-olive text-white hover:border-terracotta hover:bg-terracotta"
                        : "border-border bg-paper/70 text-ink hover:border-terracotta hover:bg-white/80",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                      "transition-colors duration-300",
                      action.primary || action.id === "linkedin"
                        ? "border-white/30 text-white"
                        : "border-border group-hover:border-terracotta/50",
                    ].join(" ")}
                  >
                    <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold leading-snug sm:text-[11px] lg:text-xs ">
                      {action.label}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-[10px] leading-snug sm:text-[9px] lg:text-[10px]",
                        action.primary || action.id === "linkedin"
                          ? "text-white/80"
                          : "text-muted",
                      ].join(" ")}
                    >
                      {action.detail}
                    </span>
                  </span>

                  <FiArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Closing line */}
          <p className="mt-8 font-heading text-sm italic text-muted sm:mt-10 sm:text-base">
            Good things start with a conversation.
          </p>

          {/* Social media links */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.35,
            }}
            className="mt-6 flex items-center justify-center gap-4"
            aria-label="Social media profiles"
          >
            {SOCIAL_LINKS.map(({ name, href, Icon, color }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mary on ${name}`}
                title={name}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, scale: 1.08 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 transition-colors duration-300 hover:border-transparent hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
              >
                <Icon size={19} color={color} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
