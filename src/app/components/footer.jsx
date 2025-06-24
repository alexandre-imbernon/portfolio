import { useState, useEffect } from "react";
import { TypewriterText } from "./TypewriterText";

export function Footer({ section }) {
  const [now, setNow] = useState(new Date());

  // Met à jour l'heure toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute bottom-10 left-1/2 w-full max-w-6xl px-5 py-10 bg-black bg-opacity-60 
                 border border-white shadow-md flex items-center justify-between gap-4
                 transform -translate-x-1/2 font-mono text-white"
    >
      {/* Bloc Date à gauche */}
      <div className="flex items-center gap-2">
        <DateBlock now={now} />
        <div className="w-[1px] h-20 bg-white" />
      </div>

      {/* Zone centrale */}
      <div className="text-center flex-1 text-xl">
        <TypewriterText
          text={
            section === "about"
              ? "Je suis un développeur passionné par les interfaces rétro et l’interactivité."
              : section === "skills"
              ? "React, Tailwind, PHP, Node.js"
              : section === "works"
              ? "Portfolio : visual novels, projets interactifs et jeux narratifs."
              : section === "contact"
              ? "Contactez-moi pour discuter de vos projets !"
              : ""
          }
          speed={35}
        />
      </div>

      {/* Bloc Heure à droite */}
      <div className="flex items-center gap-2">
        <div className="w-[1px] h-20 bg-white" />
        <TimeBlock now={now} />
      </div>
    </div>
  );
}

// Bloc Date
function DateBlock({ now }) {
  const options = { weekday: "short" };
  const dayOfWeek = now.toLocaleDateString("en-US", options).toLowerCase();
  const date = `${now.getMonth() + 1} 月 ${now.getDate()} 日`;

  return (
    <div className="text-left leading-tight text-lg">
      <div>{date}</div>
      <div>{dayOfWeek}</div>
    </div>
  );
}

// Bloc Heure
function TimeBlock({ now }) {
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return <div className="text-right text-lg">{time}</div>;
}