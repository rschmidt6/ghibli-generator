import { Film, Person, Location, Vehicle, CategoryType } from "../types/ghibli";

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
      return (
        <div>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
        </div>
      );
    }
    case "people": {
      const person = selectedItem as Person;
      return (
        <div>
          <h2>{person.name}</h2>
          <p>{person.age}</p>
        </div>
      );
    }
    case "locations": {
      const location = selectedItem as Location;
      return (
        <div>
          <h2>{location.name}</h2>
          <p>{location.climate}</p>
        </div>
      );
    }
    case "vehicles": {
      const vehicle = selectedItem as Vehicle;
      return (
        <div>
          <h2>{vehicle.name}</h2>
          <p>{vehicle.description}</p>
        </div>
      );
    }
  }
}
