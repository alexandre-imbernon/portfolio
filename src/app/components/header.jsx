import { NoiseOverlay } from "./NoiseOverlay";

export function Header() {
  return (
    <div className="relative font-sans text-white bg-custom-gradient pl-7">
      <h1 className="text-3xl relative z-30">C:\AI.exe - Portfolio</h1>
      <NoiseOverlay />
    </div>
  );
}
