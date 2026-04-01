"use client";

export default function ProgressPanel() {
  return (
    <div className="card h-full">
      <h3 className="uppercase font-bold mb-6">YOUR PROGRESSION</h3>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Strength Level</span>
            <span className="text-[#8eabff] font-bold">LVL 42</span>
          </div>
          <div className="h-2 bg-[#1e293b] rounded mt-2">
            <div className="h-full w-[65%] bg-[#8eabff]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">HIIT Capacity</span>
            <span className="text-red-400 font-bold">TOP 5%</span>
          </div>
          <div className="h-2 bg-[#1e293b] rounded mt-2">
            <div className="h-full w-[90%] bg-red-400"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Flexibility</span>
            <span className="text-pink-400 font-bold">IMPROVING</span>
          </div>
          <div className="h-2 bg-[#1e293b] rounded mt-2">
            <div className="h-full w-[55%] bg-pink-400"></div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#192540] p-4 rounded-lg flex items-center gap-3">
        <span className="material-symbols-outlined text-[#8eabff]">trophy</span>
        <div>
          <p className="text-xs text-gray-400">NEW MILESTONE</p>
          <p className="text-sm font-bold">1,000lb Club Entry</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.alert("Opening full analytics report...")}
        className="w-full mt-6 py-3 border border-gray-600 text-xs uppercase tracking-wider rounded hover:bg-[#192540] transition"
      >
        VIEW FULL ANALYTICS
      </button>
    </div>
  );
}
