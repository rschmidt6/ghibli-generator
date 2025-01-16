import { Film, Person, Location, Vehicle, CategoryType } from "../types/ghibli";
import FilmComponent from "./CategoryComponents/FilmComponent";
import LocationsComponent from "./CategoryComponents/LocationsComponent";
import PeopleComponent from "./CategoryComponents/PeopleComponent";
import VehiclesComponent from "./CategoryComponents/VehiclesComponent";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [isLocalLoading, setIsLocalLoading] = useState(true);

  // Reset local loading whenever selectedItem or category changes
  useEffect(() => {
    setIsLocalLoading(true);
    const timer = setTimeout(() => {
      setIsLocalLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [selectedItem, category]); // Reset loading on content change

  if (isLoading || isLocalLoading) {
    return (
      <motion.div
        className="flex justify-center items-center h-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          src="/toto.png"
          alt="Loading..."
          className="w-16 h-16 animate-spin"
        />
      </motion.div>
    );
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
