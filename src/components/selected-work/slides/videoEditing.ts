import type { WorkSlideData } from "../workTypes";

const videoEditing: WorkSlideData = {
  id: "video-editing",
  tabLabel: "Video Editing",
  title: "Videos that",
  accent: "tell stories.",
  description:
    "Editing engaging videos that capture attention, communicate ideas, and bring brand stories to life across digital platforms.",
  services: ["Video Editing", "Short-Form Content", "Social Media Videos"],
  visualLabel: "Video editing portfolio",

  media: [
    {
      src: "https://www.youtube.com/shorts/di7A3Pn_aqE",
      alt: "Video editing project one",
      type: "video",
      provider: "youtube",
    },
  ],
};

export default videoEditing;
