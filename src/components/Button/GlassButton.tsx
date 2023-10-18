import style from "./glassButton.module.scss";

function GlassButton({ children = "Click" }: { children: React.ReactNode }) {
  return (
    <button type="button" className={style.glass_button_wrap}>
      {children}
    </button>
  );
}

export default GlassButton;
