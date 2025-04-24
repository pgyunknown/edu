export default function Marquee() {
  return (
    <div className="relative overflow-hidden w-full bg-gray-100 py-2">
      <div className="absolute whitespace-nowrap animate-marquee text-lg font-semibold text-blue-600">
        {/* Repeat text to make it visibly scroll */}
        <span className="mx-4">🚀 This is a Tailwind + Vite + React Marquee!</span>
        <span className="mx-4">🚀 This is a Tailwind + Vite + React Marquee!</span>
        <span className="mx-4">🚀 This is a Tailwind + Vite + React Marquee!</span>
      </div>
    </div>
  );
}
