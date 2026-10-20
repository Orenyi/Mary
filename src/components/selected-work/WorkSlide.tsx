import { motion } from "framer-motion";
import type { WorkSlideData } from "./workTypes";

type WorkSlideProps = {
  slide: WorkSlideData;
  image: string;
  reduceMotion: boolean;
  onConnect: () => void;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    let videoId = "";

    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else if (
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v") ?? "";
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/")[2] ?? "";
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/")[2] ?? "";
      }
    }

    if (!/^[\w-]{11}$/.test(videoId)) return null;

    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return null;
  }
}

export default function WorkSlide({
  slide,
  image,
  reduceMotion,
  onConnect,
}: WorkSlideProps) {
  return (
    <motion.div
      key={slide.id}
      id="work-slide-panel"
      role="tabpanel"
      aria-labelledby={`work-tab-${slide.id}`}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16"
    >
      {/* Changing editorial content */}
      <div className="order-2 lg:order-1">
        <h3 className="mt-5 max-w-[12ch] font-heading text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.06em]">
          {slide.title}{" "}
          <span className="font-normal italic text-terracotta">
            {slide.accent}
          </span>
        </h3>

        <p className="body-copy mt-5 max-w-[43ch] text-sm sm:mt-6 sm:text-base">
          {slide.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {slide.services.map((service) => (
            <li
              key={service}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted sm:text-sm"
            >
              {service}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onConnect}
          className="mt-7 inline-flex items-center gap-3 rounded-full border border-terracotta bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-ink hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta sm:mt-9"
        >
          Let's Connect
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {/* Slide media */}
      <div className="order-1 flex min-w-0 items-start justify-center lg:order-2">
        {slide.media?.length ? (
          <div className="grid w-full min-w-0 grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-3 lg:gap-4">
            {slide.media.map((media, index) => (
              <motion.div
                key={media.src}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-[430px] min-w-0 items-start justify-center overflow-hidden sm:h-[340px] lg:h-[380px]"
              >
                {media.type === "video" && media.provider === "youtube" ? (
                  <div className="h-full w-full overflow-hidden">
                    {getYouTubeEmbedUrl(media.src) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(media.src)!}
                        title={media.alt}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="h-full w-full border-0"
                      />
                    ) : (
                      <p className="p-4 text-sm text-muted">
                        This YouTube URL is invalid. Please check the video
                        link.
                      </p>
                    )}
                  </div>
                ) : media.type === "video" ? (
                  <video
                    src={media.src}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={media.alt}
                    className="h-full w-full object-contain object-top"
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-top"
                  />
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex h-[430px] w-full min-w-0 items-start justify-center overflow-hidden sm:h-[340px] lg:h-[380px]">
            <motion.img
              key={slide.id + "-phone"}
              src={image}
              alt={slide.visualLabel}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-contain object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
