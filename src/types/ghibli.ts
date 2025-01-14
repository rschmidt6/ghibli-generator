export type CategoryType = "films" | "people" | "locations" | "vehicles";

export const CATEGORIES = [
  { value: "films" as const, label: "Film" },
  { value: "people" as const, label: "Character" },
  { value: "locations" as const, label: "Location" },
  { value: "vehicles" as const, label: "Vehicle" },
] as const;

export interface BaseGhibliItem {
  id: string;
  name?: string;
  title?: string; // Some items use title instead of name
}

export interface Film extends BaseGhibliItem {
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[]; // URLs to people
  species: string[]; // URLs to species
  locations: string[]; // URLs to locations
  vehicles: string[]; // URLs to vehicles
}

export interface Person extends BaseGhibliItem {
  name: string;
  gender: string;
  age: string; // Using string because we see "NA" in the data
  eye_color: string;
  hair_color: string;
  species: string; // URL to species
}

export interface Location extends BaseGhibliItem {
  name: string;
  climate: string;
  terrain: string;
  surface_water: string; // Using string as it appears to be a string in the API
  residents: string[]; // URLs to residents
}

export interface Vehicle extends BaseGhibliItem {
  name: string;
  description: string;
  vehicle_class: string;
  length: string; // Using string as it appears to be a string in the API
  pilot: string; // URL to pilot
}

// This helps TypeScript understand which type to use based on the category
export type GhibliItemType = {
  films: Film;
  people: Person;
  locations: Location;
  vehicles: Vehicle;
};
