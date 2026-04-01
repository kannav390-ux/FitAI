"use client";

import { useState } from "react";
import { getMealSwap } from "@/lib/ai";

export default function SwapCard({ meal }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSwap = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const result = await getMealSwap(meal); // ✅ dynamic meal
      setMeals(result || []);
    } catch (err) {
      console.error("Swap error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-[#192540] rounded space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h4 className="font-bold uppercase">
          AI Swap for: {meal}
        </h4>

        <button
          onClick={handleSwap}
          disabled={loading}
          className="text-xs bg-[#8eabff] text-black px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "GENERATING..." : "SWAP"}
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-sm text-gray-400">
          Generating smart swaps...
        </p>
      )}

      {/* RESULTS */}
      <div className="grid md:grid-cols-3 gap-6">

        {meals.map((mealItem, i) => (
          <div key={i} className="bg-[#060e20] p-4 rounded">

            <h5 className="text-sm font-bold">
              {mealItem.title}
            </h5>

            <div className="text-xs text-gray-400 mt-2 space-y-1">
              <p>{mealItem.calories} kcal</p>
              <p>{mealItem.protein} protein</p>
              <p>{mealItem.carbs} carbs</p>
              <p>{mealItem.fats} fats</p>
            </div>

            <button className="mt-4 w-full bg-[#1f2b49] text-[#8eabff] text-xs py-2 rounded">
              APPLY SWAP
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}