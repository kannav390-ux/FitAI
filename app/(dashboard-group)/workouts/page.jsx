"use client";

import FeaturedWorkout from "@/components/workouts/FeaturedWorkout";
import Categories from "@/components/workouts/Categories";
import UpcomingSessions from "@/components/workouts/UpcomingSessions";
import ProgressPanel from "@/components/workouts/ProgressPanel";

export default function WorkoutsPage() {
  return (
    <div className="animate-fadeIn">

      {/* HEADER */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="uppercase tracking-[0.2em] text-primary/70 mb-2 block font-medium">
            LIBRARY_V2.0
          </span>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
            WORKOUT <br />
            <span className="text-[#156aff]">VAULT</span>
          </h1>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-end">
            <span className="text-slate-500 text-xs uppercase">Active Streak</span>
            <span className="text-2xl font-bold text-pink-400">14 DAYS</span>
          </div>

          <div className="w-px h-12 bg-gray-700"></div>

          <div className="flex flex-col items-end">
            <span className="text-slate-500 text-xs uppercase">Global Rank</span>
            <span className="text-2xl font-bold">#1,204</span>
          </div>
        </div>
      </div>

      {/* FEATURED */}
      <FeaturedWorkout />

      {/* CATEGORIES */}
      <Categories />

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-12 mt-12">
        <div className="lg:col-span-2">
          <UpcomingSessions />
        </div>

        <ProgressPanel />
      </div>

    </div>
  );
}