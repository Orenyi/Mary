export type WorkMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
  provider?: "youtube" | "native";
};

export type WorkSlideData = {
  id: string;
  tabLabel: string;
  title: string;
  accent: string;
  description: string;
  services: string[];
  visualLabel: string;
  media?: WorkMedia[];
};

export type WorkCategory =
  | "socialMedia"
  | "contentMarketing"
  | "emailMarketing"
  | "photography"
  | "videoEditing";
