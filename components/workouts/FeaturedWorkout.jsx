"use client";

export default function FeaturedWorkout() {
  return (
    <section className="mb-16">
      <div className="relative h-[500px] rounded-xl overflow-hidden group">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4Y4D4xECKRjwGcddzFK6no00dKRWWocYE1hXVVG7DzXlzI5tVY8a7irSzUwKouLrX_zoQKThZo67I41cQGFfxpJarQcIvmYIBSZ82HKe_A5jxkWO91E3omCsc0AnEj9GT1LWVjVXU-VJT1nOoA5cx1CpGaQ2T501wamb0xSQ8aSUwByx5lzkzDi25i_dg1R1zvTVZMYy-ktKA9gpG7GNX1A4eTATEiH85HRi8b2SvZmG0ycLi1snWxH5TWOV9JWf_xbxZqkANr-B"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent"></div>

        <div className="absolute bottom-10 left-10 max-w-xl">
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-600 px-2 py-1 text-xs font-bold">FEATURED</span>
            <span className="text-gray-300 text-sm">45 MIN • ADVANCED</span>
          </div>

          <h2 className="text-5xl font-black italic tracking-tight mb-4">KINETIC FLOW</h2>

          <p className="text-gray-300 mb-6">
            High-impact fusion of metabolic conditioning and explosive movements.
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => window.alert("Featured session started: KINETIC FLOW")}
              className="px-8 py-3 bg-white text-black font-bold rounded flex items-center gap-2"
            >
              ▶ START SESSION
            </button>

            <button
              type="button"
              onClick={() => window.alert("Showing full workout details for KINETIC FLOW")}
              className="px-6 py-3 border border-gray-600 rounded"
            >
              DETAILS
            </button>
          </div>
        </div>

        <div className="absolute right-10 bottom-10 glass p-6 rounded-lg hidden md:block">
          <p className="text-sm text-blue-400 mb-4">TARGET METRICS</p>
          <div className="flex justify-between gap-10 text-sm">
            <span>Calories</span>
            <span>640 kcal</span>
          </div>
          <div className="flex justify-between gap-10 text-sm mt-2">
            <span>Effort</span>
            <span className="text-red-400">9.2 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
