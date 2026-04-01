export default function StatCard({ title, value, sub, type }) {
    return (
      <div className="bg-[#0f1930] p-6 rounded-md flex flex-col items-center justify-center min-w-[120px]">
  
        <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
          {title}
        </span>
  
        <span
          className={`text-3xl font-black ${
            type === "protein" ? "text-[#ffaaf7]" : "text-[#8eabff]"
          }`}
        >
          {value}
        </span>
  
        <span className="text-[10px] text-slate-500 uppercase tracking-tight">
          {sub}
        </span>
  
      </div>
    );
  }