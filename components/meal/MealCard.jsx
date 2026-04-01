export default function MealCard({ active }) {
    return (
      <div
        className={`p-6 rounded flex gap-4 ${
          active
            ? "bg-[#1f2b49] border-l-4 border-blue-400"
            : "bg-[#111827]"
        }`}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIzNSTw04It2lnrJzOMP0M995eRapRvj-6-T6BCMAi8aCwY5oXshjVRBGV0tHp4-5wdH7QQnFzMydqHECU-r1Db1OHqMf-IZKYeSRJ4pxbhXP-kC1cLh9rpf4gy0GS4ZqkvQUascN1o8NuenymWzQfoPKm053K26gpi-jiNM_q-g0s7L_nIqP7Tu-e0PyQ-hO7GhrdoGZjzeWPSQzCwdRt_jQXE6rxM4x1JjTAnjRvqY2i_Q99j5WIG0jlaqbp7Yn8ieGBLOOPIRwK"
          className="w-24 h-24 object-cover rounded"
        />
  
        <div className="flex-1">
          <h4 className="font-bold uppercase">Citrus Wild Salmon</h4>
          <p className="text-sm text-gray-400">
            Grilled salmon with quinoa
          </p>
        </div>
  
        <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1f2b49] text-[#8eabff] text-[10px] font-black tracking-widest uppercase rounded-sm hover:bg-[#8eabff] hover:text-black transition-all">
  <span className="material-symbols-outlined text-sm">sync</span>
  SWAP
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-[#192540] text-white text-[10px] font-black tracking-widest uppercase rounded-sm hover:bg-white hover:text-black transition-all">
  <span className="material-symbols-outlined text-sm">check</span>
  LOG
</button>
        </div>
      </div>
    );
  }