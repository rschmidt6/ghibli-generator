import { Person } from "../../types/ghibli";

interface PeopleComponentProps {
  person: Person;
}

export default function PeopleComponent({ person }: PeopleComponentProps) {
  return <div>{person.name}</div>;
}
