"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 border-r min-h-screen bg-dark">
      <ul className="space-y-2">
        <li><a href="/" className="block p-2 text-gray-400 hover:bg-gray-200 rounded">Home</a></li>
        <li><a href="/about" className="block p-2 text-gray-400 hover:bg-gray-200 rounded">About</a></li>
        <li><a href="/contact" className="block p-2 text-gray-400 hover:bg-gray-200 rounded">Contact</a></li>
      </ul>
    </aside>
  );
}