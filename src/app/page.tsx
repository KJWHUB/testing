"use client";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main>
      <p>Docs</p>
      <p>information</p>
      <h2>Learn</h2>
      <p>{usePathname()}</p>
    </main>
  );
}
