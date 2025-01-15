import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, CategoryType, BaseGhibliItem } from "../types/ghibli";
import RandomThing from "./RandomThing";
import { motion } from "framer-motion";

export default function RandomGenerator() {
  const [category, setCategory] = useState<CategoryType>("films");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const {
    data: ids,
    isLoading,
    error,
  } = useQuery<string[]>({
    queryKey: ["ids", category], // include category in the key so it refetches when category changes
    queryFn: async () => {
      const response = await fetch(`https://ghibliapi.vercel.app/${category}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.map((item: BaseGhibliItem) => item.id);
    },
  });

  const getRandomId = (ids: string[]) => {
    setSelectedId(ids[Math.floor(Math.random() * ids.length)]);
  };

  //handle generate random button click
  const handleGenerate = () => {
    getRandomId(ids || []);
  };

  const { data: selectedItem } = useQuery({
    queryKey: ["randomObject", category, selectedId],
    queryFn: async () => {
      const response = await fetch(
        `https://ghibliapi.vercel.app/${category}/${selectedId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!selectedId, // only fetch when selectedId is truthy
  });

  return (
    <>
      <motion.div
        className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Enhanced select element with custom styling */}
          <div className="relative flex-grow">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as CategoryType);
                setSelectedId(null);
              }}
              className="w-full appearance-none bg-gray-50 border border-gray-200 
                   text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight 
                   focus:outline-none focus:bg-white focus:border-[#00adf0] 
                   transition-all duration-300"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  Random {cat.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Enhanced button with animation */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-[#00adf0] text-white rounded-lg font-medium
                 shadow-md hover:shadow-lg hover:bg-[#038dbf] 
                 transition-all duration-300 sm:w-auto w-full
                 flex items-center justify-center gap-2"
            onClick={handleGenerate}
          >
            <span>Generate</span>
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8"
            >
              <img src="/toto.png" alt="refresh" />
            </motion.div> */}
          </motion.button>
        </div>

        {/* Error message with animation */}
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-red-500 text-sm bg-red-50 rounded-lg p-3"
          >
            Error: {error.message}
          </motion.div>
        )}
      </motion.div>
      {selectedItem && (
        <RandomThing
          selectedItem={selectedItem}
          category={category}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
