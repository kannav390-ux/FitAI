"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { name: "Workouts", href: "/workouts", icon: "fitness_center" },
  { name: "Recipes", href: "/recipes", icon: "restaurant_menu" },
  { name: "Meal Plan", href: "/meal-plan", icon: "calendar_today" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-[#060e20] border-r border-white/10 flex-col z-50">

      {/* PROFILE */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#192540] flex items-center justify-center rounded-md">
            ⚡
          </div>
          <div>
            <div className="text-[#8eabff] text-sm font-bold">ATHLETE_01</div>
            <div className="text-xs text-gray-500">Pro Performance</div>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-2">
          {menu.map((item) => {
            const active = path === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 text-xs uppercase tracking-wider transition
                ${
                  active
                    ? "bg-[#1f2b49] text-[#8eabff] border-r-2 border-[#8eabff]"
                    : "text-gray-400 hover:bg-[#192540] hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto p-6">
        <button
          type="button"
          onClick={() => window.alert("Upgrade flow coming soon. Billing portal will open here.")}
          className="w-full py-3 bg-gradient-to-r from-[#156aff] to-[#8eabff] text-white text-xs font-bold rounded-md shadow-lg"
        >
          UPGRADE TO PRO
        </button>
      </div>
    </div>
  );
}