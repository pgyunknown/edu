export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-gray-100 py-2">
      <div className="inline-block animate-marquee text-lg font-semibold text-blue-600">
        This is a Tailwind + Vite + React Marquee!
      </div>
    </div>
  );
}
