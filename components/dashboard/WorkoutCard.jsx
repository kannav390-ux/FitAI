"use client";

export default function WorkoutCard() {
  const handleStart = () => {
    window.alert("Workout started: Hyper-Load Quads session added to active tracker.");
  };

  return (
    <div className="card card-dark">
      <p className="text-xs text-blue-400 mb-2">UPCOMING SESSION</p>

      <h2 className="text-xl font-bold mb-2">HYPER-LOAD QUADS</h2>

      <p className="text-gray-400 text-sm mb-4">Strength Phase: 4 Sets of 8 Reps</p>

      <div className="bg-[#0f1930] p-3 rounded mb-4 text-sm">⏱ 65 MIN DURATION</div>

      <button type="button" onClick={handleStart} className="w-full bg-blue-500 py-3 rounded">
        ▶ START WORKOUT
      </button>
    </div>
  );
}
