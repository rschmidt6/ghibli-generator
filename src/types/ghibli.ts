export type CategoryType = "films" | "people" | "locations" | "vehicles";

export const CATEGORIES = [
  { value: "films" as const, label: "Film" },
  { value: "people" as const, label: "Character" },
  { value: "locations" as const, label: "Location" },
  { value: "vehicles" as const, label: "Vehicle" },
] as const;

export interface Film {
  description: string;
  id: string;
  image: string;
  release_date: string;
  running_time: string;
  title: string;
}

export interface idObject {
  id: string;
  title: string;
}
