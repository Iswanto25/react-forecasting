"use client";
import Button from "@/components/Button";
export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Halo, Dunia!</h1>
      <p className="text-gray-700">Ini halaman home pertama saya di Next.js + Tailwind!</p>
      <Button label="Klik saya" onClick={() => alert("Halo dari Button!")} />
    </main>
  );
}
