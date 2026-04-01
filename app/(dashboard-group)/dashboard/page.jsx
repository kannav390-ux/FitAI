"use client";

import Hero from "@/components/dashboard/Hero";
import ActivityChart from "@/components/dashboard/ActivityChart";
import StatsCards from "@/components/dashboard/StatsCards";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import MealPlan from "@/components/dashboard/MealPlan";
import { useEffect, useState } from "react";
export default function Dashboard() {
  return (
    <div className="animate-fadeIn">

      <Hero />

      <div className="grid md:grid-cols-12 gap-10 mt-10">

        <div className="md:col-span-8 space-y-8">
          <ActivityChart />
          <StatsCards />
        </div>

        <div className="md:col-span-4 space-y-8">
          <WorkoutCard />
          <MealPlan />
        </div>

      </div>

    </div>
  );
}