import BasicCard from "@/components/Card/BasicCard";
import BasicButton from "@/components/Button/BasicButton";
import Link from "next/link";

const getList = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/board");

  if (!res.ok) {
    throw new Error("목록 리스트 조회에 실패 했습니다.");
  }
  return res.json();
};

export default async function Board() {
  const res = await getList();

  return (
    <main className="p-5">
      {res.map((el: Board, i: number) => {
        return (
          <BasicCard key={i}>
            <div className="mt-2">
              <h4>{el.title}</h4>
              <p>{el.contents}</p>
              <p>작성일 {el.date}</p>
            </div>
          </BasicCard>
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
