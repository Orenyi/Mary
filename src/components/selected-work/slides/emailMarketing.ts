import type { WorkSlideData } from "../workTypes";

import OtaruArtPortraitsNewsletter from "../../../assets/images/OtaruArtPortraitsNewsletter.webp";
import FeelsLikeHomeWelcomeEmail from "../../../assets/images/FeelsLikeHomeWelcomeEmail.webp";

const emailMarketing: WorkSlideData = {
  id: "email-marketing",
  tabLabel: "Email Marketing",
  title: "Making every message",
  accent: "worth opening.",
  description:
    "Planning clear, audience-focused email communications that share useful information, strengthen brand relationships, and encourage meaningful action.",
  services: ["Email content", "Campaign planning", "Brand communication"],
  visualLabel: "Email marketing portfolio",

  media: [
    {
      src: OtaruArtPortraitsNewsletter,
      alt: "Otaru Art Portraits email newsletter design",
      type: "image",
    },
    {
      src: FeelsLikeHomeWelcomeEmail,
      alt: "Feels Like Home welcome email design",
      type: "image",
    },
  ],
};

export default emailMarketing;
