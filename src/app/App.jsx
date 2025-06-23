import React, { useState } from "react";
import { Header } from "./components/header";
import { RetroBar } from "./components/RetroBar";
import backgroundImage from "./assets/bg.png";
import { Footer } from "./components/footer";

export function App() {
  const [currentSection, setCurrentSection] = useState("about");

  return (
    <div className="fixed inset-0 border border-white/50">
      {/* Arrière-plan principal avec image */}
      <div
        className="bg-black min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Composants principaux */}
        <Header />
        <RetroBar
          onSectionChange={setCurrentSection}
          currentSection={currentSection}
        />
        <Footer section={currentSection} />

        {/* Cadres et effets visuels */}
        <div className="fixed inset-0 border-x border-t border-white/50 z-50 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-full h-[2px] bg-white/50 z-50 pointer-events-none" />
      </div>
    </div>
  );
}
