"use client";

type Props = {
  bttnText: string;
  btnClick?: any;
};
export default function BasicButton({
  bttnText = "기본버튼",
  btnClick,
}: Props) {
  return (
    <button
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={btnClick}
    >
      {bttnText}
    </button>
  );
}
