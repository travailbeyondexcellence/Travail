"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ZenTravail</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/exams" className="text-blue-600 hover:underline">
          Exams
        </Link>
      </nav>
    </header>
  );
}
