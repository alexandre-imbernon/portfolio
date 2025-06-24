import React, { useEffect, useState } from "react";

export function TypewriterText({ text = "", speed = 30 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index < text.length) {
        timeoutId = setTimeout(type, speed);
      }
    };

    setDisplayedText(""); // Clear on new text
    type(); // Start typing

    return () => clearTimeout(timeoutId);
  }, [text, speed]);
return (
  <span>
    {displayedText}
    {displayedText.length === text.length && (
<span className="ml-1 w-[7px] h-[1em] bg-white inline-block relative animate-blink" />
    )}
  </span>
);
}