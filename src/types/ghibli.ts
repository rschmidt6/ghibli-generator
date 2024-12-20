export interface Film {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: string;
}

export type CategoryType = "films" | "people" | "locations" | "vehicles";

export const CATEGORIES = [
  { value: "films" as const, label: "Film" },
  { value: "people" as const, label: "Character" },
  { value: "locations" as const, label: "Location" },
  { value: "vehicles" as const, label: "Vehicle" },
] as const;
