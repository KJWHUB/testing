import style from "./glassCard.module.scss";

function GlassCard({ children }: { children: React.ReactNode }) {
  return <div className={style.glass_card_wrap}>{children}</div>;
}

export default GlassCard;
