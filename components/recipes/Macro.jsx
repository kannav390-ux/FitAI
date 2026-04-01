export function Macro({ label, value }) {
    return (
      <div className="bg-[#1f2b49] p-3 rounded text-center">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    );
  }