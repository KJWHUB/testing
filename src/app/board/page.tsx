import Link from "next/link";
import BasicButton from "@/components/Button/BasicButton";
import BasicCard from "@/components/Card/BasicCard";
import { getList } from "@/services/board";

export default async function Board() {
  const res = await getList();

  return (
    <main className="p-5">
      {res.map((el: Board, i: number) => {
        return (
          <div className="pb-3" key={i}>
            <BasicCard>
              <div className="mt-2">
                <h4 className="mb-2 text-lg">{el.title}</h4>
                <p className="text-sm">{el.content}</p>
                <div className="flex flex-row-reverse">
                  <p className=" text-xs text-gray-400">작성일 {el.registrationTime}</p>
                </div>
              </div>
            </BasicCard>
          </div>
        );
      })}

      <div className="flex flex-row-reverse mt-8">
        <Link href={"/board/write"}>
          <BasicButton bttnText="게시글 작성하기" />
        </Link>
      </div>
    </main>
  );
}
