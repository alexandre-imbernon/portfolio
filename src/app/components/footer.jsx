import { useState, useEffect } from "react";
import { TypewriterText } from "./TypewriterText";

// Gauche : Date + jour
function DateBlock({ now }) {
  const options = { weekday: "short" };
  const dayOfWeek = now.toLocaleDateString("en-US", options).toLowerCase();
  const date = `${now.getMonth() + 1} 月 ${now.getDate()} 日`;

  return (
    <div className="text-left leading-tight font-mono text-lg text-white">
      <div>{date}</div>
      <div>{dayOfWeek}</div>
    </div>
  );
}

// Droite : Heure seule
function TimeBlock({ now }) {
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="text-right font-mono text-lg text-white">
      {time}
    </div>
  );
}

export function Footer({ section }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (section) {
      case "about":
        return "Je suis un développeur passionné par les interfaces rétro et l’interactivité.";
      case "skills":
        return "React, Tailwind, PHP, Node.js";
      case "works":
        return "Portfolio : visual novels, projets interactifs et jeux narratifs.";
      case "contact":
        return "Tu peux me contacter via LinkedIn ou par mail à l'adresse suivante...";
      default:
        return "";
    }
  };

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xl
                 w-full max-w-6xl px-5 py-10 bg-black bg-opacity-60 
                 border border-white shadow-md flex items-center justify-between gap-4"
    >
      {/* Bloc Date à gauche */}
      <div className="flex items-center gap-2">
        <DateBlock now={now} />
        <div className="w-[1px] h-20 bg-white" />
      </div>

      {/* Texte central */}
      <div className="text-center flex-1 font-mono text-white">
        <TypewriterText text={renderContent()} speed={35} />
      </div>

      {/* Bloc Heure à droite */}
         <div class="w-[1px] h-20 bg-white"></div>
      <TimeBlock now={now} />
    </div>
  );
}
