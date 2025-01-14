import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES, CategoryType, BaseGhibliItem } from "../types/ghibli";
import RandomThing from "./RandomThing";

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
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex gap-4">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as CategoryType);
            setSelectedId(null);
          }}
          className="block w-full p-2 border rounded-md"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              Random {cat.label}
            </option>
          ))}
        </select>

        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-md 
                     hover:bg-indigo-700 transition-colors"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
      {selectedItem && (
        <RandomThing
          selectedItem={selectedItem}
          category={category}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
