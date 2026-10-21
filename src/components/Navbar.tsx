import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#selected-work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Process", href: "#process" },
];

const CONTACT_LINK = "#contact";

// Replace these with Mary's real contact details.
const SOCIAL_LINKS = {
  email: "mailto:maryotaru81@gmail.com?subject=Project%20Enquiry",
  linkedin: "https://www.linkedin.com/in/mary-otaru",
};

const menuVariants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

const listVariants = {
  closed: {
    transition: {
      staggerChildren: 0.045,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.075,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);

    const targetId = href.replace("#", "");

    // Allow the menu to begin closing before scrolling.
    window.setTimeout(
      () => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      },
      menuOpen && !reduceMotion ? 180 : 0,
    );
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      {/* Main navigation */}

      <header className="sticky top-0 z-40  bg-paper/80 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70 transition-colors duration-300">
        <div className="page-container flex h-[76px] items-center justify-between gap-6 md:h-[84px]">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            aria-label="Mary Otaru — Back to top"
            className="group relative z-50 inline-flex shrink-0 items-center"
          >
            <span className="font-serif text-[1.65rem] font-medium leading-none tracking-[-0.065em] sm:text-[1.9rem]">
              Mary Otaru
            </span>
          </a>

          {/* Desktop links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="group relative py-2 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:text-terracotta"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-terracotta transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={CONTACT_LINK}
            onClick={(event) => handleNavigation(event, CONTACT_LINK)}
            className="hidden items-center gap-2 rounded-full border border-terracotta bg-terracotta px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink lg:inline-flex"
          >
            Let's Connect
            <FiArrowUpRight size={15} />
          </a>

          {/* Mobile and tablet menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 flex h-11 w-11 items-center justify-center text-ink transition-colors duration-200 hover:text-terracotta lg:hidden"
          >
            <CiMenuFries size={30} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Full-screen mobile and tablet menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            variants={reduceMotion ? undefined : menuVariants}
            initial={reduceMotion ? false : "closed"}
            animate="open"
            exit={reduceMotion ? undefined : "closed"}
            className="fixed inset-0 z-[100] flex min-h-[100dvh] flex-col overflow-y-auto bg-terracotta text-white"
            style={{
              clipPath: reduceMotion ? "none" : undefined,
            }}
          >
            {/* Menu header */}
            <div className="page-container flex min-h-[84px] items-center justify-between gap-4 border-b border-white/20">
              <a
                href="#home"
                onClick={(event) => handleNavigation(event, "#home")}
                className="font-serif text-[1.8rem] font-medium leading-none tracking-[-0.065em]"
              >
                Mary Otaru
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 hover:bg-white/15"
              >
                <TfiClose size={22} />
              </button>
            </div>

            {/* Large navigation links */}
            <nav
              aria-label="Mobile navigation"
              className="page-container flex flex-1 flex-col justify-center py-12 sm:py-16"
            >
              <motion.div
                variants={reduceMotion ? undefined : listVariants}
                initial={reduceMotion ? false : "closed"}
                animate="open"
                className="flex flex-col items-start gap-5 sm:gap-7"
              >
                {NAV_LINKS.map((link) => (
                  <motion.a
                    key={link.href}
                    variants={reduceMotion ? undefined : linkVariants}
                    href={link.href}
                    onClick={(event) => handleNavigation(event, link.href)}
                    className="group flex w-full items-center justify-between gap-4 py-1 font-heading text-[clamp(2.1rem,7.5vw,4.6rem)] font-medium uppercase leading-[1.05] tracking-[-0.055em] transition-colors duration-300 hover:text-paper/70"
                  >
                    <span>{link.label}</span>
                    <FiArrowDownRight
                      size={25}
                      className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100 sm:h-8 sm:w-8"
                    />
                  </motion.a>
                ))}

                <motion.a
                  variants={reduceMotion ? undefined : linkVariants}
                  href={CONTACT_LINK}
                  onClick={(event) => handleNavigation(event, CONTACT_LINK)}
                  className="group flex w-full items-center justify-between gap-4 py-1 font-heading text-[clamp(2.1rem,7.5vw,4.6rem)] font-medium uppercase leading-[1.05] tracking-[-0.055em] transition-colors duration-300 hover:text-paper/70"
                >
                  <span>Contact</span>
                  <FiArrowDownRight
                    size={25}
                    className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100 sm:h-8 sm:w-8"
                  />
                </motion.a>
              </motion.div>
            </nav>

            {/* Menu footer */}
            <motion.footer
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : 0.3,
              }}
              className="page-container mt-auto pb-8 pt-5 sm:pb-10"
            >
              <div className="border-t border-white/25 pt-5 sm:pt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                  Digital Marketing · Content Creation
                </p>

                <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={SOCIAL_LINKS.email}
                    className="inline-flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white/70 sm:text-base"
                  >
                    <FiMail size={19} />
                    <span>Email Mary</span>
                    <FiArrowUpRight size={14} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white/70 sm:text-base"
                  >
                    <FiLinkedin size={19} />
                    <span>Connect on LinkedIn</span>
                    <FiArrowUpRight size={14} />
                  </a>
                </div>

                <p className="mt-7 text-[10px] text-white/60 sm:text-xs">
                  © {new Date().getFullYear()} Mary Otaru. All rights reserved.
                </p>
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
