import type { WorkSlideData } from "../workTypes";
import Potrait1 from "../../../assets/images/Potrait1.webp";
import Potrait2 from "../../../assets/images/Potrait2.webp";
import Potrait3 from "../../../assets/images/Potrait3.webp";
import Potrait4 from "../../../assets/images/Potrait4.webp";

const photography: WorkSlideData = {
  id: "photography",
  tabLabel: "Photography",
  title: "Portraits that",
  accent: "tell stories.",
  description:
    "Capturing personality, emotion, and authentic moments through thoughtful portrait photography.",
  services: [
    "Portrait Photography",
    "Creative Direction",
    "Visual Storytelling",
  ],
  visualLabel: "Photography portfolio",

  media: [
    {
      src: Potrait3,
      alt: "Portrait photography — first image",
      type: "image",
    },
    {
      src: Potrait4,
      alt: "Portrait photography — second image",
      type: "image",
    },
    {
      src: Potrait2,
      alt: "Portrait photography — second image",
      type: "image",
    },

    {
      src: Potrait1,
      alt: "Portrait photography — second image",
      type: "image",
    },
  ],
};

export default photography;
