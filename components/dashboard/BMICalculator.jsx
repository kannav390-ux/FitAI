"use client";

import { useMemo, useState } from "react";

function getPlanForBMI(bmi) {
  if (!bmi) return null;

  if (bmi < 18.5) {
    return {
      category: "Underweight",
      workouts: [
        "3x/week full-body strength training",
        "Low-intensity cardio 2x/week (20 min)",
        "Mobility and core work after training",
      ],
      diet: [
        "Increase calories by 300–500 kcal/day",
        "Target 1.6–2.0g protein/kg body weight",
        "Include calorie-dense foods: nuts, dairy, oats, olive oil",
      ],
    };
  }

  if (bmi < 25) {
    return {
      category: "Normal",
      workouts: [
        "4x/week strength split (push/pull/legs/full body)",
        "2x/week cardio intervals (15–25 min)",
        "Daily 8k–10k steps",
      ],
      diet: [
        "Maintain calories around maintenance",
        "Target 1.6–2.2g protein/kg body weight",
        "Prioritize whole foods and hydration",
      ],
    };
  }

  if (bmi < 30) {
    return {
      category: "Overweight",
      workouts: [
        "3–4x/week full-body resistance training",
        "3x/week moderate cardio (25–35 min)",
        "Daily 10k+ steps",
      ],
      diet: [
        "Reduce calories by 300–500 kcal/day",
        "Target 1.8–2.2g protein/kg lean mass",
        "Focus on high-fiber carbs and lower sugar snacks",
      ],
    };
  }

  return {
    category: "Obese",
    workouts: [
      "Begin with 3x/week low-impact strength circuits",
      "4–5x/week brisk walking or cycling (20–40 min)",
      "Add mobility and recovery sessions",
    ],
    diet: [
      "Start with 500 kcal/day deficit",
      "Prioritize protein each meal and high-volume vegetables",
      "Eliminate sugary drinks and late-night processed snacks",
    ],
  };
}

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const bmi = useMemo(() => {
    const weightNum = Number(weight);
    const heightCm = Number(height);

    if (!weightNum || !heightCm) return null;

    const heightM = heightCm / 100;
    if (heightM <= 0) return null;

    return weightNum / (heightM * heightM);
  }, [weight, height]);

  const plan = useMemo(() => getPlanForBMI(bmi), [bmi]);

  return (
    <section className="card space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400">AI Body Insight</p>
        <h3 className="text-2xl font-bold mt-2">BMI + Plan Generator</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-sm space-y-1">
          <span className="text-gray-400">Weight (kg)</span>
          <input
            type="number"
            min="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-[#0e1a33] rounded px-3 py-2"
            placeholder="e.g. 72"
          />
        </label>

        <label className="text-sm space-y-1">
          <span className="text-gray-400">Height (cm)</span>
          <input
            type="number"
            min="1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-[#0e1a33] rounded px-3 py-2"
            placeholder="e.g. 175"
          />
        </label>
      </div>

      {bmi && plan ? (
        <div className="space-y-4 text-sm">
          <p>
            BMI: <span className="font-bold text-blue-300">{bmi.toFixed(1)}</span> · Category:{" "}
            <span className="font-bold text-pink-300">{plan.category}</span>
          </p>

          <div>
            <p className="font-semibold mb-1">Workout suggestion</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {plan.workouts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Diet suggestion</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {plan.diet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-400">Enter weight and height to calculate BMI and get suggestions.</p>
      )}
    </section>
  );
}
