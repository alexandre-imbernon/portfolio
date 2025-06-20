import { NoiseOverlay } from "./NoiseOverlay";
import { RetroBar } from "./RetroBar";
import { WindowsControls } from "./WindowsControl";

export function Header() {
  return (
    <div className="relative text-white bg-custom-gradient p-0.5 pl-7">
        <WindowsControls/>
      <h1 className="text-3xl relative z-19">C:\AI.exe - Portfolio</h1>
      <NoiseOverlay />
    </div>
  );
}
