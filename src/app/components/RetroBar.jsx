export function RetroBar({ onSectionChange }) {
  return (
    <div className="h-7 bg-[#CCCCCC] border-t border-white shadow-inner flex items-center px-2 space-x-4">
      {["about", "skills", "works", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => onSectionChange(item)}
          className="text-black hover:underline focus:outline-none"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
