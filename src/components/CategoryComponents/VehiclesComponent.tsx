import { Vehicle } from "../../types/ghibli";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

interface VehiclesComponentProps {
  vehicle: Vehicle;
}

export default function VehiclesComponent({ vehicle }: VehiclesComponentProps) {
  // We'll fetch the associated film data to provide context about where this vehicle appears
  const { data: filmData } = useQuery({
    queryKey: ["film", vehicle.films[0]],
    queryFn: async () => {
      const response = await fetch(vehicle.films[0]);
      if (!response.ok) throw new Error("Failed to fetch film");
      return response.json();
    },
    enabled: !!vehicle.films[0],
  });

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 font-body relative z-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Vehicle Information Section */}
        <motion.div
          className="lg:w-1/3 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h1 className="text-3xl text-gray-900 mb-4">{vehicle.name}</h1>

            {/* Vehicle Technical Specifications */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  Technical Details
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Class: </span>
                    <span className="text-gray-600 capitalize">
                      {vehicle.vehicle_class}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Length:{" "}
                    </span>
                    <span className="text-gray-600">
                      {vehicle.length} meters
                    </span>
                  </div>
                </div>
              </div>

              {/* Vehicle Description */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Pilot Information, if available */}
              {vehicle.pilot && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Pilot Information
                  </h2>
                  <div className="text-sm text-gray-600">
                    Piloted by a skilled operator
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Film Context Section */}
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
                  <h2 className="absolute bottom-4 left-6 text-2xl font-semibold">
                    <span className="text-white/80 text-sm">Featured in: </span>
                    <span className="text-white">{filmData.title}</span>
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
