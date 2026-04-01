"use client";

export function GroceryPanel() {
  const items = [
    { name: "Wild-Caught Salmon", done: false },
    { name: "Steel-Cut Oats", done: true },
    { name: "Baby Spinach", done: false },
    { name: "Almond Butter", done: false },
  ];

  const exportList = () => {
    const content = items.map((item) => `${item.done ? "[x]" : "[ ]"} ${item.name}`).join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "fitai-grocery-list.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="bg-[#0f1930] p-6 rounded-md border-t-2 border-[#ffaaf7] space-y-6">
      <h3 className="text-xl font-black uppercase italic">Grocery List</h3>

      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-3 bg-[#091328] rounded-md hover:bg-[#192540] transition"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 border-2 border-[#8eabff] flex items-center justify-center ${
                item.done ? "bg-[#8eabff]" : ""
              }`}
            >
              {item.done && <span className="text-black text-xs">✓</span>}
            </div>

            <span className={`text-sm uppercase ${item.done ? "line-through opacity-40" : ""}`}>
              {item.name}
            </span>
          </div>

          <span className="text-gray-600">⋮⋮</span>
        </div>
      ))}

      <button
        type="button"
        onClick={exportList}
        className="w-full py-3 bg-[#8eabff] text-black text-xs font-black uppercase"
      >
        EXPORT TO INSTACART
      </button>
    </div>
  );
}
