import MaryHeroImage from "../assets/images/Mary_hero.webp";

const CV_URL = "/Mary%20Otaru%20CV.pdf";
const CONTACT_ID = "#contact";

const HERO_CONTENT = {
  eyebrow: "Digital Marketer & Content Creator",
  headingStart: "Making brands",
  headingAccent: "human",
  headingEnd: "in a digital world.",
  description:
    "I'm Mary Ahuoiza Otaru, a digital marketing enthusiast with a background in Mass Communication. I help brands communicate with clarity, creativity and authenticity through social media and visual content.",
  primaryCta: "Let's Connect",
  secondaryCta: "View My CV",
  locationLabel: "Based in",
  location: "Nigeria",
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-8 sm:py-12 lg:py-10 2xl:py-12"
    >
      <div className="page-container">
        <div className="mx-auto grid max-w-[1600px] items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 2xl:gap-16">
          {/* Hero content */}
          <div className="relative z-10 order-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-7 lg:mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-charcoal sm:text-xs sm:tracking-[0.18em]">
                {HERO_CONTENT.eyebrow}
              </p>

              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-border sm:w-12 lg:w-14"
              />
            </div>

            <h1
              id="hero-heading"
              className="max-w-[11ch] font-heading text-[clamp(3.1rem,8.2vw,7rem)] font-medium leading-[0.96] tracking-[-0.065em] md:text-[clamp(3rem,5.1vw,5.5rem)] lg:text-[clamp(3.5rem,5.3vw,6rem)] 2xl:text-[clamp(5rem,5vw,7rem)]"
            >
              {HERO_CONTENT.headingStart}
              <br />
              feel{" "}
              <span className="font-normal italic text-terracotta">
                {HERO_CONTENT.headingAccent}
              </span>{" "}
              {HERO_CONTENT.headingEnd}
            </h1>

            <p className="body-copy mt-6 max-w-[48ch] text-sm leading-[1.8] sm:mt-7 sm:text-base lg:mt-8">
              {HERO_CONTENT.description}
            </p>

            {/* Calls to action */}
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-8 lg:mt-9">
              <a
                href={CONTACT_ID}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-terracotta bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-ink hover:bg-ink sm:min-h-[3.25rem] sm:px-8"
              >
                {HERO_CONTENT.primaryCta}
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Mary's CV in a new tab"
                className="inline-flex min-h-12 items-center border-b border-ink/70 py-2 text-sm font-semibold text-ink transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
              >
                {HERO_CONTENT.secondaryCta}
              </a>
            </div>

            {/* Location */}
            <div className="mt-8 flex items-start gap-3 sm:mt-10 lg:mt-12">
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-3 w-3 shrink-0 rounded-full bg-terracotta"
              />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-charcoal">
                  {HERO_CONTENT.locationLabel}
                </p>

                <p className="mt-1 text-sm text-charcoal">
                  {HERO_CONTENT.location}
                </p>
              </div>
            </div>
          </div>

          {/* Portrait and desktop-only annotation */}
          <div className="relative order-2 mx-auto w-full max-w-[560px] md:max-w-none 2xl:max-w-[680px]">
            <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-tl-[5rem] rounded-tr-sm sm:rounded-tl-[7rem] md:rounded-tl-[5rem] lg:rounded-tl-[8rem]">
              <img
                src={MaryHeroImage}
                alt="Mary Ahuoiza Otaru"
                width={900}
                height={1125}
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Desktop-only annotation */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-12 z-10 hidden -rotate-[12deg] lg:block xl:-left-16"
            >
              <svg
                viewBox="0 0 180 54"
                fill="none"
                className="mb-1 h-10 w-32 text-olive"
              >
                <path
                  d="M174 5C124 4 92 12 55 28C37 36 22 44 9 49"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M22 37L9 49L24 49"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="font-heading text-2xl font-normal italic leading-[1.05] text-olive xl:text-3xl">
                Content
                <br />
                Creates
                <br />
                Connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
