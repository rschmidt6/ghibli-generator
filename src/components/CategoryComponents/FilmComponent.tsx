import { Film } from "../../types/ghibli.ts";

interface FilmComponentProps {
  film: Film;
}

export default function FilmComponent({ film }: FilmComponentProps) {
  return (
    // The outer container uses flex to arrange items side by side on larger screens
    <div className="max-w-6xl mx-auto p-4 lg:p-8 font-body">
      {/* Main content container that switches between column and row layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image container with responsive sizing */}
        <div className="lg:w-1/3">
          <img
            src={film.image}
            alt={film.title}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text content container */}
        <div className="lg:w-2/3 space-y-4">
          {/* Title section */}
          <div>
            <h1 className="text-3xl text-gray-900">{film.title}</h1>
            <h2 className="text-xl text-gray-700">{film.original_title}</h2>
          </div>

          {/* Movie details section */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Release Date:</span>{" "}
              {film.release_date}
            </div>
            <div>
              <span className="font-semibold">Runtime:</span>{" "}
              {film.running_time} minutes
            </div>
            <div>
              <span className="font-semibold">Director:</span> {film.director}
            </div>
          </div>

          {/* Description section */}
          <p className="text-gray-800 leading-relaxed">{film.description}</p>
        </div>
      </div>
    </div>
  );
}
