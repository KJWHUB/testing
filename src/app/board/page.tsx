"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { useSession } from "next-auth/react";
import BasicButton from "@/components/Button/BasicButton";
import BasicCard from "@/components/Card/BasicCard";
import { getList } from "@/services/board";

export default function Board() {
  const [boardList, setBoardList] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetch = async () => {
      const res = await getList();
      const { list } = await res.json();
      setBoardList(list);
    };
    fetch();
  }, []);

  return (
    <main className="p-5">
      {boardList.map((el: Board, i: number) => {
        return (
          <div className="pb-3" key={i}>
            <BasicCard>
              <div className="mt-2">
                <h4 className="mb-2 text-lg">{el.title}</h4>
                <p className="text-sm">{el.content}</p>
                <div className="flex flex-row-reverse">
                  <p className=" text-xs text-gray-400">
                    <span className="mr-1">작성일</span> {dayjs(el.createAt).format("YYYY-MM-DD HH:mm")}
                  </p>
                </div>
              </div>
            </BasicCard>
          </div>
        );
      })}

      <div className="flex flex-row-reverse mt-8">
        {session && (
          <Link href={"board/write"}>
            <BasicButton bttnText="게시글 작성하기" />
          </Link>
        )}
        {!session && <p>로그인시 게시물 작성 가능합니다</p>}
      </div>
    </main>
  );
}
