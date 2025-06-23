export function WindowsControls() {
  return (
    <div className="absolute top-0 right-0 flex gap-[2px] p-1 z-30">
      {/* Minimiser */}
      <div className="w-8 h-8 border border-black bg-[#C0C0C0] flex items-center justify-center">
        <div className="w-6 h-[4px] bg-black mt-5"></div>
      </div>

{/* Agrandir */}
<div className="w-8 h-8 border border-black bg-[#C0C0C0] flex items-center justify-center">
  {/* Conteneur parent centré */}
  <div className="relative w-[80%] h-[80%]">
    {/* Carré*/}
    <div className="absolute inset-0 border-2 border-black"></div>
    {/* Barre supérieure */}
    <div className="absolute top-0 left-0 w-full h-[7px] bg-black"></div>
  </div>
</div>

      {/* Fermer */}
      <div className="w-8 h-8 border border-black bg-[#C0C0C0] flex items-center justify-center">
        <div className="relative w-5 h-5">
          <span
            className="absolute w-9 h-[3px] bg-black rotate-45 
                       top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></span>
          <span
            className="absolute w-9 h-[3px] bg-black -rotate-45 
                       top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></span>
        </div>
      </div>
    </div>
  );
}
