export function Progress({ label, value }) {
    return (
      <div>
        <div className="flex justify-between text-xs">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
  
        <div className="h-1 bg-gray-800 mt-1">
          <div
            className="h-full bg-blue-400"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    );
  }