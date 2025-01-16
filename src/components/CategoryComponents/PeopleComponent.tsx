import { Person } from "../../types/ghibli";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

interface PeopleComponentProps {
  person: Person;
}

export default function PeopleComponent({ person }: PeopleComponentProps) {
  // Fetch the film data for this character
  const { data: filmData } = useQuery({
    queryKey: ["film", person.films[0]], // We'll start with their first film
    queryFn: async () => {
      const response = await fetch(person.films[0]);
      if (!response.ok) throw new Error("Failed to fetch film");
      return response.json();
    },
    enabled: !!person.films[0],
  });

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 font-body z-10 relative">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Character Information Section */}
        <motion.div
          className="lg:w-1/3 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h1 className="text-3xl text-gray-900 mb-4">{person.name}</h1>

            {/* Character Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {person.age !== "NA" && (
                <div>
                  <span className="font-semibold text-gray-700">Age: </span>
                  <span className="text-gray-600">{person.age}</span>
                </div>
              )}
              <div>
                <span className="font-semibold text-gray-700">Gender: </span>
                <span className="text-gray-600">{person.gender}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Eye Color: </span>
                <span className="text-gray-600">{person.eye_color}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  Hair Color:{" "}
                </span>
                <span className="text-gray-600">{person.hair_color}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Film Information Section */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filmData && (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
              {/* Film Banner */}
              {filmData.movie_banner && (
                <div className="w-full h-48 relative overflow-hidden">
                  <img
                    src={filmData.movie_banner}
                    alt={`Banner from ${filmData.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h2 className="absolute bottom-4 left-6 text-white text-2xl font-semibold">
                    Featured in: {filmData.title}
                  </h2>
                </div>
              )}

              {/* Film Description */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {filmData.description}
                </p>
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold">Directed by: </span>
                  {filmData.director}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
