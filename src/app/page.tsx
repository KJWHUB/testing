import { Playfair_Display } from "next/font/google";
import GlassButton from "@/components/Button/GlassButton";
import GlassCard from "@/components/Card/GlassCard";
import MainSwiper from "@/components/Swiper/MainSwiper";
import { classNames } from "@/utils/class";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen p-5 bg-gradient-to-r from-purple-500 to-pink-500">
        <MainSwiper />
        <GlassCard>
          <div className="flex justify-between items-center">
            <h4
              className={classNames(
                playfairDisplay.className,
                "text-white",
                "leading-loose",
                "font-bold",
                "text-5xl"
              )}
            >
              Find the perfect <br /> graphic you want
            </h4>
            <GlassButton>now</GlassButton>
          </div>
        </GlassCard>
      </div>

      {/* <p>Docs</p>
      <p>information</p>
      <h2>Learn</h2> */}
    </main>
  );
}
