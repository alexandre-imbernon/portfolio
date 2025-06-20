export function WindowsControls() {
    return (
    <div className="relative font-sans text-white bg-custom-gradient p-0.5 pl-7">
        </div>
    )
}
import { NoiseOverlay } from "./NoiseOverlay";
export function Header() {
  return (
    <div className="relative font-sans text-white bg-custom-gradient p-0.5 pl-7">
        <WindowsControls/>
      <h1 className="text-3xl relative z-20">C:\AI.exe - Portfolio</h1>
      <NoiseOverlay />
    </div>
  );
}
