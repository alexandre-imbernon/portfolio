export function Footer({ children }) {
  return (
    <div className="absolute left-8 right-8 bottom-8 bg-black bg-opacity-70 border border-white p-10 font-mono text-white text-lg shadow-lg">
      {children}
    </div>
  );
}
