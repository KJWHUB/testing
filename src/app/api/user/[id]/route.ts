import { NextResponse } from "next/server";
import { verifyJwt } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("게시물 리스트 조회 시작", params);

  // 추가된 부분
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return NextResponse.json({ error: "No Authorization" }, { status: 401 });
  }

  const id = Number(params.id);

  const userBoard = await prisma.board.findMany({
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
  console.log("상세조회 성공", userBoard);
  return NextResponse.json({ data: userBoard }, { status: 200 });
}
