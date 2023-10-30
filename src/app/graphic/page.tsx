"use client";

import "./style.css";
import Link from "next/link";
import CircularGradient from "@/components/Background/CircularGradient";
import GlassCard from "@/components/Card/GlassCard";

import { openModal } from "@/components/Dialog/fnDialog.jsx";

export default function Page() {
  return (
    <main className="relative">
      <section>
        {/* background */}
        <div className=" absolute w-full">
          <CircularGradient />
        </div>

        <div className="pt-72 px-52">
          <GlassCard>
            <div className=" h-96">
              <button onClick={openModal}>click</button>
              <PageList />
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

const PageList = () => {
  const pageMap = [
    {
      g_id: "/graphic/1",
      label: "computer",
    },
  ];
  return (
    <ul>
      {pageMap.map((el, i) => {
        return (
          <li key={i} style={{ padding: 10, border: "1px solid #000" }}>
            <Link href={el.g_id}>{el.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
