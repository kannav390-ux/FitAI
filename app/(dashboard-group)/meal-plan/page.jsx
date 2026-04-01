"use client";

import { useMemo, useState } from "react";
import StatCard from "../../../components/meal/StatCard";
import { GroceryPanel } from "../../../components/meal/GroceryPanel";
import { Progress } from "../../../components/meal/Progress";
import MealCard from "../../../components/meal/MealCard";
import SwapCard from "../../../components/meal/SwapCard";
import { Macro } from "../../../components/recipes/Macro";

export default function MealPlanPage() {
  const meals = useMemo(() => [
    {
      title: "Citrus Wild Salmon",
      description: "Grilled salmon with quinoa",
      active: false,
    },
    {
      title: "Herb Chicken Power Bowl",
      description: "Chicken breast, brown rice, greens",
      active: true,
    },
    {
      title: "Lean Beef Recovery Plate",
      description: "Lean beef, sweet potato, broccoli",
      active: false,
    },
  ], []);

  const [selectedMeal, setSelectedMeal] = useState(meals[0].title);

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <section className="grid lg:grid-cols-12 gap-8 items-end">

        <div className="lg:col-span-8">
          <p className="text-xs tracking-[0.3em] text-blue-400 uppercase mb-4">
            Current Protocol
          </p>

          <h1 className="text-6xl font-bold leading-none">
            DIET & MEAL SWAP
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl">
            Your nutritional foundation is engineered for peak metabolic efficiency.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="lg:col-span-4 flex gap-4 justify-end">

          <StatCard title="Target" value="2,850" sub="kcal/day" />
          <StatCard title="Protein" value="210g" sub="High Tier" type="protein"/>

        </div>

      </section>

      {/* HERO + FUEL */}
      <section className="grid md:grid-cols-3 gap-6">

        {/* LEFT HERO */}
        <div className="md:col-span-2 relative h-[380px] rounded-xl overflow-hidden">

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACzvJjVhn6bjL8CaRJj8GW7Qx1cBf6T-1392rEGhbJqyWpsIfUqrm3A4OmkhO5AzxHVQH7YWwskzGlR1J-OddSPjnp9TL9ImsncsChNJ6HugYtDhJkdVLm_1IvJ6WrJga1ZcufwWSmpwgxPYiItKYGTxP6SaVnWmifumdzo99HYx9IcNfF4cMsCFe1PX-MplnZFMrqTpgiGdOBAmrbAosVKjEtKMFt4itb1ggGu3pYF_MHE2bI1bfvbqVr44YLp87Fdpver7uTJM_l"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 p-8 space-y-3">

            <div className="flex gap-2">
              <span className="bg-blue-500 px-3 py-1 text-xs">
                PROTOCOL ACTIVE
              </span>
              <span className="bg-gray-800 px-3 py-1 text-xs">
                7-DAY STREAK
              </span>
            </div>

            <h2 className="text-3xl font-bold italic uppercase">
              Metabolic Acceleration
            </h2>

            <button className="mt-3 px-6 py-2 bg-white text-black text-xs font-bold">
              VIEW METRICS
            </button>

          </div>
        </div>

        {/* RIGHT FUEL */}
        <div className="card space-y-6 border-b-2 border-blue-400">

          <div className="flex justify-between">
            <span>⚡</span>
            <span className="text-xs uppercase text-blue-400">Fuel Status</span>
          </div>

          <Progress label="Glycogen" value={82} />
          <Progress label="Hydration" value={65} />

          <p className="text-xs text-gray-400 italic">
            "Your next meal is critical..."
          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="grid lg:grid-cols-12 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">

          <h3 className="text-2xl font-bold italic">Today's Protocol</h3>

          {meals.map((meal) => (
            <MealCard
              key={meal.title}
              title={meal.title}
              description={meal.description}
              active={meal.active}
              onSwap={() => setSelectedMeal(meal.title)}
            />
          ))}

          <SwapCard meal={selectedMeal} />

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4">
          <GroceryPanel />
        </div>

      </section>

      {/* MACROS */}
      <section className="grid md:grid-cols-2 gap-10 pt-10 border-t">

      <div className="bg-black p-8 rounded-md space-y-8">

  {/* TITLE */}
  <h3 className="text-3xl font-black italic uppercase">
    Macro Optimization
  </h3>

  {/* MACROS */}
  <div className="grid grid-cols-3 text-center">

    <div>
      <p className="text-[#8eabff] text-3xl font-black">40%</p>
      <p className="text-[10px] text-gray-500 uppercase tracking-widest">
        Protein
      </p>
    </div>

    <div>
      <p className="text-[#ffaaf7] text-3xl font-black">35%</p>
      <p className="text-[10px] text-gray-500 uppercase tracking-widest">
        Carbs
      </p>
    </div>

    <div>
      <p className="text-white text-3xl font-black">25%</p>
      <p className="text-[10px] text-gray-500 uppercase tracking-widest">
        Fats
      </p>
    </div>

  </div>

  {/* DESCRIPTION (THIS WAS MISSING) */}
  <p className="text-sm text-gray-400 leading-relaxed max-w-md">
    Our swap engine uses <span className="text-white font-semibold">"Dynamic Macro-Mapping™"</span> 
    to ensure that any ingredient you change is replaced with an equivalent bio-available alternative.
  </p>

  {/* DIVIDER */}
  <div className="border-t border-gray-800" />

  {/* BOTTOM BAR (VERY IMPORTANT) */}
  <div className="flex items-center justify-between">

    {/* LEFT ICON BUTTONS */}
    <div className="flex gap-2">

      <button className="w-8 h-8 bg-[#192540] flex items-center justify-center rounded hover:bg-[#8eabff] hover:text-black transition">
        <span className="material-symbols-outlined text-sm">tune</span>
      </button>

      <button className="w-8 h-8 bg-[#192540] flex items-center justify-center rounded hover:bg-[#8eabff] hover:text-black transition">
        <span className="material-symbols-outlined text-sm">calculate</span>
      </button>

      <button className="w-8 h-8 bg-[#192540] flex items-center justify-center rounded hover:bg-[#8eabff] hover:text-black transition">
        <span className="material-symbols-outlined text-sm">hub</span>
      </button>

    </div>

    {/* RIGHT TEXT */}
    <p className="text-[10px] text-gray-500 uppercase tracking-widest">
      Calculated with <span className="text-[#8eabff]">98.4% accuracy</span>
    </p>

  </div>

</div>

<div className="relative overflow-hidden rounded-md">

{/* BACKGROUND GRADIENT */}
<div className="absolute inset-0 bg-gradient-to-br from-[#192540] to-[#0f1930]" />

{/* BACKGROUND IMAGE (SUBTLE) */}
<div
  className="absolute inset-0 opacity-10 bg-no-repeat bg-right bg-contain"
  style={{
    backgroundImage:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzTipBg')",
  }}
/>

{/* RIGHT SIDE GLOW */}
<div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#8eabff] to-transparent opacity-60" />

{/* CONTENT */}
<div className="relative p-8 space-y-6">

  {/* TITLE */}
  <h4 className="text-lg font-black uppercase tracking-wide">
    Chef's Tactical Tip
  </h4>

  {/* DESCRIPTION (FIXED CONTENT + STYLE) */}
  <p className="text-sm text-gray-400 leading-relaxed italic max-w-md">
    "When swapping Salmon for Grass-Fed Beef, ensure your supplement with 
    <span className="text-white font-medium"> 2g of High-EPA Fish Oil </span> 
    to maintain your Omega-3 balance for that meal."
  </p>

  {/* BUTTON (FIXED STYLE) */}
  <button className="text-[11px] uppercase tracking-widest text-[#8eabff] font-bold flex items-center gap-2 hover:gap-3 transition-all">

    READ FULL PROTOCOL

    <span className="material-symbols-outlined text-sm">
      arrow_forward
    </span>

  </button>

</div>
</div>

      </section>

    </div>
  );
}