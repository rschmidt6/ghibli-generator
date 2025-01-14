import { Film } from "../../types/ghibli.ts";

interface FilmComponentProps {
  film: Film;
}

export default function FilmComponent({ film }: FilmComponentProps) {
  return <div>{film.title}</div>;
}
