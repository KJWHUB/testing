"use client";
import { usePathname } from "next/navigation";
import BasicCard from "@/components/Card/BasicCard";

const dataList = [
  {
    id: "bor-1",
    title: "게시글 제목",
    contents: "게시글 내용",
    date: "작성일",
  },
  {
    id: "bor-2",
    title: "게시글 제목",
    contents: "게시글 내용",
    date: "작성일",
  },
];

export default function Board() {
  return (
    <main>
      <p>{usePathname()}</p>
      <BasicCard>
        {dataList.map((el, i) => {
          return (
            <div key={i} className="mt-2 border-b-2 border-s-gray-400">
              <h4>{el.title}</h4>
              <p>{el.contents}</p>
            </div>
          );
        })}
      </BasicCard>
    </main>
  );
}
