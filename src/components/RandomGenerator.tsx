import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Loader2 } from "lucide-react";
import { CATEGORIES, CategoryType } from "../types/ghibli";

export default function RandomGenerator() {
  const [category, setCategory] = useState<CategoryType>("films");

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as CategoryType)}
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
        >
          Generate
        </button>
      </div>
    </div>
  );
}
