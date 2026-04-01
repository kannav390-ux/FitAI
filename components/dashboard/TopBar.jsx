"use client";
export default function TopBar() {
    return (
      <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 bg-[#060e20]/80 backdrop-blur z-50">
  
        <h1 className="text-blue-400 font-bold">
          KINETIC CORE
        </h1>
  
        {/* CENTER NAV */}
        {/* <nav className="hidden md:flex gap-8 text-gray-400">
          <span className="text-white">Dashboard</span>
          <span>Workouts</span>
          <span>Recipes</span>
          <span>Meal Plan</span>
        </nav> */}
  
        {/* RIGHT */}
        <div className="flex gap-6 items-center">
        <span className="material-symbols-outlined text-gray-400">
  notifications
</span>
<span className="material-symbols-outlined text-gray-400">
  settings
</span>
          <div className="w-10 h-10 bg-gray-700 rounded-lg" />
        </div>
  
      </header>
    );
  }