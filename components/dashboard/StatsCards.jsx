export default function StatsCards() {
    return (
      <div className="grid grid-cols-2 gap-6">
  
        <div className="card">
          <p className="text-sm text-gray-400">
            Resting Heart Rate
          </p>
          <h2 className="text-3xl mt-2">52 BPM</h2>
        </div>
  
        <div className="card">
          <p className="text-sm text-gray-400">
            Readiness Score
          </p>
          <h2 className="text-3xl text-blue-400 mt-2">
            94%
          </h2>
        </div>
  
      </div>
    );
  }