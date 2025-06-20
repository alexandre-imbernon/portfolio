import React from "react";
import { Header } from './components/header'
import { RetroBar } from "./components/RetroBar";
import backgroundImage from './assets/bg.png';
import { Footer } from "./components/footer";
import { WindowsControls } from "./components/WindowsControl";

export function App() {
  return (
    <div>
      <div
        className="font-baseFont bg-black min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />
        <RetroBar />
<Footer>Blablablablablabla</Footer>      
</div>
    </div>
  );
}
