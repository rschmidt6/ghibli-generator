import { Film, Person, Location, Vehicle, CategoryType } from "../types/ghibli";
import FilmComponent from "./CategoryComponents/FilmComponent";
import LocationsComponent from "./CategoryComponents/LocationsComponent";
import PeopleComponent from "./CategoryComponents/PeopleComponent";
import VehiclesComponent from "./CategoryComponents/VehiclesComponent";

type GhibliItem = Film | Person | Location | Vehicle;

interface RandomThingProps {
  selectedItem: GhibliItem;
  category: CategoryType;
  isLoading: boolean;
}

export default function RandomThing({
  selectedItem,
  category,
  isLoading,
}: RandomThingProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!selectedItem) {
    return null;
  }

  switch (category) {
    case "films": {
      const film = selectedItem as Film;
      return <FilmComponent film={film} />;
    }
    case "people": {
      const person = selectedItem as Person;
      return <PeopleComponent person={person} />;
    }
    case "locations": {
      const location = selectedItem as Location;
      return <LocationsComponent location={location} />;
    }
    case "vehicles": {
      const vehicle = selectedItem as Vehicle;
      return <VehiclesComponent vehicle={vehicle} />;
    }
  }
}
