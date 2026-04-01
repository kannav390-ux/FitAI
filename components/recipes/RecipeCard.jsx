export function RecipeCard({ img, title, kcal, tag }) {
    return (
      <div className="card overflow-hidden group cursor-pointer">
  
        <div className="relative h-60 overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
  
          <div className="absolute bottom-4 left-4">
            <span className="bg-blue-500 px-3 py-1 text-xs rounded">
              {tag}
            </span>
          </div>
        </div>
  
        <div className="p-6 space-y-3">
          <div className="flex justify-between">
            <h3 className="font-bold uppercase">{title}</h3>
            <span className="text-xs text-gray-400">{kcal}</span>
          </div>
  
          <div className="flex gap-4 text-xs text-gray-400">
            <span>⏱ 15 MIN</span>
            <span>⚡ MED</span>
          </div>
        </div>
  
      </div>
    );
  }