"use client";

import "./style.css";
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
              <p className="itcon">asdasd</p>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
