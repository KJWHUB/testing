import CircularGradient from "@/components/Background/CircularGradient";
import GlassCard from "@/components/Card/GlassCard";

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
            <div className=" h-96"></div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
