import React, { useEffect, useState, useRef } from "react";

// Charge tous les sons du dossier
const soundModules = import.meta.glob("../assets/sounds/animalcrossing/*.wav", {
  eager: true,
});
const soundPaths = Object.values(soundModules).map((mod) => mod.default);

export function TypewriterText({ text = "", speed = 30, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Détecter une interaction utilisateur
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    let timeoutId;

    setDisplayedText("");

    const type = () => {
      const char = text.charAt(index);
      setDisplayedText(text.slice(0, index + 1));

      if (/[a-zA-Z0-9À-ÿ々ー一-龯]/.test(char) && hasInteracted) {
        const randomSound =
          soundPaths[Math.floor(Math.random() * soundPaths.length)];
        audioRef.current = new Audio(randomSound);
        audioRef.current.volume = 1;
        audioRef.current.playbackRate = 0.6 + Math.random() * 0.2;
        audioRef.current.play().catch((err) => {
          console.warn("Audio playback failed:", err);
        });
      }

      index++;
      if (index < text.length) {
        timeoutId = setTimeout(type, speed);
      } else if (onComplete) {
        onComplete();
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [text, speed, onComplete, hasInteracted]);

  return (
    <span>
      {displayedText}
      {displayedText.length === text.length && (
        <span className="ml-1 w-[7px] h-[1em] bg-white animate-blink inline-block relative -translate-y-[2px]" />
      )}
    </span>
  );
}