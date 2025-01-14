import { Vehicle } from "../../types/ghibli";

interface VehiclesComponentProps {
  vehicle: Vehicle;
}

export default function VehiclesComponent({ vehicle }: VehiclesComponentProps) {
  return <div>{vehicle.name}</div>;
}
