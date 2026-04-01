"use client";

import { useState } from "react";
import { getMealSwap } from "@/lib/ai";

export default function SwapCard({ meal, onApplySwap }) {
  const [swaps, setSwaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const handleSwap = async () => {
    if (loading) return;

    setLoading(true);
    setError("");
    setWarning("");

    try {
      const result = await getMealSwap(meal);
      setSwaps(result.swaps || []);
      if (result.warning) setWarning(result.warning);
    } catch (err) {
      const message = err?.message || "Swap failed. Please try again.";
      setError(message);
      console.error("Swap error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-[#192540] rounded space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="font-bold uppercase">AI Swap for: {meal}</h4>

        <button
          onClick={handleSwap}
          disabled={loading}
          className="text-xs bg-[#8eabff] text-black px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "GENERATING..." : "SWAP"}
        </button>
      </div>

      {loading && <p className="text-sm text-gray-400">Generating smart swaps...</p>}

      {warning && (
        <p className="text-xs text-yellow-300 bg-yellow-900/30 border border-yellow-500/30 rounded p-2">
          {warning}
        </p>
      )}

      {error && (
        <p className="text-xs text-red-300 bg-red-900/30 border border-red-500/30 rounded p-2">
          {error}
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {swaps.map((mealItem, i) => (
          <div key={i} className="bg-[#060e20] p-4 rounded">
            <h5 className="text-sm font-bold">{mealItem.title}</h5>

            <div className="text-xs text-gray-400 mt-2 space-y-1">
              <p>{mealItem.calories} kcal</p>
              <p>{mealItem.protein} protein</p>
              <p>{mealItem.carbs} carbs</p>
              <p>{mealItem.fats} fats</p>
            </div>

            <button
              onClick={() => {
                onApplySwap(mealItem);
                setSwaps([]); // clear swaps after applying
              }}
              className="mt-4 w-full bg-[#1f2b49] text-[#8eabff] text-xs py-2 rounded"
            >
              APPLY SWAP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
