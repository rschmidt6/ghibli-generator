import { Location } from "../../types/ghibli.ts";

interface LocationsComponentProps {
  location: Location;
}

export default function LocationsComponent({
  location,
}: LocationsComponentProps) {
  return <div>{location.name}</div>;
}
