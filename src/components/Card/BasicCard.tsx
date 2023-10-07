export default function BasicCard({ children }: any) {
  return (
    <div className="p-3  rounded-lg bg-white leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
      {children}
    </div>
  );
}
