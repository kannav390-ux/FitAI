export function Filter({ text, active }) {
    return (
      <button
        className={`px-4 py-2 text-xs uppercase ${
          active
            ? "bg-[#1f2b49] text-blue-400 border-b-2 border-blue-400"
            : "bg-[#192540] text-gray-400 hover:text-white"
        }`}
      >
        {text}
      </button>
    );
  }