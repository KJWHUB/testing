"use client";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main>
      <p>{usePathname()}</p>
    </main>
  );
}
