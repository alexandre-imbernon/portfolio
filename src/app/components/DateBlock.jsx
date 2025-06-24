// DateBlock.jsx
export function DateBlock({ now }) {
  const options = { weekday: "short" };
  const dayOfWeek = now.toLocaleDateString("en-US", options).toLowerCase();
  const date = `${now.getMonth() + 1}月${now.getDate()}日`;

  return (
    <div className="text-left leading-tight text-lg">
      <div>{date}</div>
      <div>{dayOfWeek}</div>
    </div>
  );
}

