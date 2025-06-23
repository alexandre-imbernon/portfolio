export function WindowsControls() {
  return (
    <div className="absolute top-0 right-0 flex gap-[2px] p-1">
      {/* Minimiser */}
      <div className="w-4 h-4 border border-black bg-[#C0C0C0] flex items-center justify-center">
        <div className="w-2 h-[2px] bg-black"></div>
      </div>

      {/* Agrandir */}
      <div className="w-4 h-4 border border-black bg-[#C0C0C0] flex items-center justify-center">
        <div className="w-2 h-2 border-2 border-black"></div>
      </div>

      {/* Fermer */}
      <div className="w-4 h-4 border border-black bg-[#C0C0C0] flex items-center justify-center">
        <div className="text-black text-xs leading-none font-bold">×</div>
      </div>
    </div>
  );
}
