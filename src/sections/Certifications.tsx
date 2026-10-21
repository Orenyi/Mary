import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import UdemyCertification from "../assets/images/UdemyCertification.webp";
import SheLeadsAfrica from "../assets/images/SheLeadsAfrica.webp";

const CERTIFICATES = [
  {
    id: "udemy",
    title: "Udemy Certification",
    issuer: "Udemy",
    image: UdemyCertification,
    pdf: "/UDEMY%20CERTIFICATE.pdf",
    alt: "Preview of the Udemy certificate",
  },
  {
    id: "she-leads-africa",
    title: "Digital Marketing & Content Creation",
    issuer: "She.Leads.Africa",
    image: SheLeadsAfrica,
    pdf: "/Mary%20Otaru%20SLA.pdf",
    alt: "She.Leads.Africa certificate of completion for Digital Marketing and Content Creation, awarded to Mary Otaru in August 2026",
  },
];

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-padding overflow-hidden bg-paper"
    >
      <div className="page-container">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="section-label">04. Certifications</span>
            <span aria-hidden="true" className="h-px w-12 bg-border sm:w-20" />
          </div>

          <h2
            id="certifications-heading"
            className="max-w-[13ch] font-heading text-[clamp(2.5rem,4.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.055em]"
          >
            Certified to
            <br />
            Create Greater
            <br />
            <span className="font-normal italic text-terracotta">Impact.</span>
          </h2>

          <p className="body-copy mt-6 max-w-[52ch]">
            A selection of certifications reflecting my commitment to continuous
            learning, creative growth, and professional development.
          </p>
        </motion.div>

        {/* Certificate grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {CERTIFICATES.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group min-w-0"
            >
              <div className="overflow-hidden border border-border bg-surface transition-colors duration-300 group-hover:border-terracotta/60">
                {/* Certificate preview */}
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${certificate.id} PDF in a new tab`}
                  className="relative block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-terracotta"
                >
                  <div className="aspect-[4/3] overflow-hidden p-3 sm:p-4">
                    <img
                      src={certificate.image}
                      alt={certificate.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                  </div>

                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-border bg-paper text-ink transition-colors duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white">
                    <FiExternalLink size={18} aria-hidden="true" />
                  </span>
                </a>

                {/* Certificate details */}
                <div className="border-t border-border px-5 py-5 sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive">
                    {certificate.issuer}
                  </p>

                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certificate.title} PDF in a new tab`}
                    className="text-link mt-5 text-sm font-semibold"
                  >
                    <FiFileText size={17} aria-hidden="true" />
                    View Certificate
                    <FiExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
