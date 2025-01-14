export type CategoryType = "films" | "people" | "locations" | "vehicles";

export const CATEGORIES = [
  { value: "films" as const, label: "Film" },
  { value: "people" as const, label: "Character" },
  { value: "locations" as const, label: "Location" },
  { value: "vehicles" as const, label: "Vehicle" },
] as const;

// src/types/ghibli.ts
export interface BaseGhibliItem {
  id: string;
  name?: string;
  title?: string; // Some items use title instead of name
}

export interface Film extends BaseGhibliItem {
  title: string; // Films use title instead of name
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: string;
}

export interface Person extends BaseGhibliItem {
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
}

export interface Location extends BaseGhibliItem {
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
}

export interface Vehicle extends BaseGhibliItem {
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
}
