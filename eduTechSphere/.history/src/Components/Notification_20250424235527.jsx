export default function Marquee() {
  return (
    <div className="relative overflow-hidden w-full bg-gray-100 py-2 h-10">
      <div className="absolute top-0 left-0 whitespace-nowrap animate-marquee">
        <span className="mx-4 text-lg font-semibold text-blue-600">
          🚀 This is a working marquee scrolling text example in React + Tailwind + Vite.
        </span>
        <span className="mx-4 text-lg font-semibold text-blue-600">
          🚀 This is a working marquee scrolling text example in React + Tailwind + Vite.
        </span>
      </div>
    </div>
  );
}
