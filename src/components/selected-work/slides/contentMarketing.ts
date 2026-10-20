import type { WorkSlideData } from "../workTypes";
import OtaruArtPortraitsCMWebsite from "../../../assets/images/OtaruArtPortraitsCMWebsite.webp";

const contentMarketing: WorkSlideData = {
  id: "content-marketing",
  tabLabel: "Content Marketing",
  title: "Stories that create",
  accent: "meaningful impact.",
  description:
    "Creating valuable, engaging content that communicates a brand's message, builds audience trust, and keeps people connected to what the brand offers.",
  services: ["Content strategy", "Brand storytelling", "Promotional content"],
  visualLabel: "Content marketing portfolio",

  media: [
    {
      src: "https://youtube.com/shorts/LRv-gx5-_3Y?si=zilNi88hjdKbbMZQ",
      alt: "Content marketing video",
      type: "video",
      provider: "youtube",
    },
    {
      src: OtaruArtPortraitsCMWebsite,
      alt: "Content marketing campaign visual",
      type: "image",
    },
  ],
};

export default contentMarketing;
