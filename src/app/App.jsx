import React, { useState } from "react";
import { Header } from './components/header';
import { RetroBar } from "./components/RetroBar";
import backgroundImage from './assets/bg.png';
import { Footer } from "./components/footer"; // 👈 Important ici
import { WindowsControls } from "./components/WindowsControl";

export function App() {
  const [currentSection, setCurrentSection] = useState('about');

  return (
    <div className="relative min-h-screen">
      <div
        className="bg-black min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />
        <RetroBar
          onSectionChange={setCurrentSection}
          currentSection={currentSection}
        />
        <Footer section={currentSection} />
      </div>
    </div>
  );
}
