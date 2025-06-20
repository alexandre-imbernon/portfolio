export function RetroBar({ onSectionChange, currentSection }) {
  return (
<div className="h-8 bg-custom-gradientGray border-white flex items-center px-7 space-x-4">
      {["about", "skills", "works", "contact"].map((item) => {
        const isActive = currentSection === item;
        const firstLetter = item.charAt(0);
        const rest = item.slice(1);

        return (
          <button
            key={item}
            onClick={() => onSectionChange(item)}
          
          >
            <span className={isActive ? "underline" : ""}>{firstLetter}</span>
            {rest}
          </button>
        );
      })}
    </div>
  );
}
