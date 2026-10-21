import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#selected-work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Process", href: "#process" },
];

const FOOTER_CONTENT = {
  name: "Mary Otaru",
  copyright: "© 2026 Mary Ahuoiza Otaru. All rights reserved.",
};

export default function Footer() {
  const reduceMotion = useReducedMotion() ?? false;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(href.slice(1));

    target?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-olive text-white">
      {/* Olive noise texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="page-container">
        {/* Main footer content */}
        <div className="flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-14">
          {/* White wordmark — matches the Navbar */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            aria-label="Mary Otaru — Back to top"
            className="w-fit font-serif text-[1.8rem] font-medium leading-none tracking-[-0.065em] text-white transition-opacity duration-300 hover:opacity-75 sm:text-3xl"
          >
            {FOOTER_CONTENT.name}
          </a>

          {/* Footer navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="text-sm text-white/85 transition-colors duration-200 hover:text-white sm:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-2 text-sm text-white/90 transition-colors duration-200 hover:text-white ml-auto lg:ml-0"
            aria-label="Back to top"
          >
            <span>Back to top</span>

            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="inline-flex"
            >
              <FiArrowUp
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </motion.span>
          </button>
        </div>

        {/* Copyright sits beneath the entire footer row */}
        <div className="border-t border-white/20 py-5 sm:py-6">
          <p className="text-center text-xs leading-relaxed text-white/75 sm:text-sm">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
