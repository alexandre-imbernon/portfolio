// TimeBlock.jsx
export function TimeBlock({ now }) {
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="text-right">{time}</div>
  );
}
