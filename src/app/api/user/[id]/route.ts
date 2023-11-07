import { NextResponse } from "next/server";
import { verifyJwt } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";

/**
 * 회원의 게시물 리스트 조회
 * @param request
 * @param param1
 * @returns
 */
export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return NextResponse.json({ message: "id 가 유효하지 않습니다." }, { status: 401 });
  }

  // 추가된 부분
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return NextResponse.json({ message: "No Authorization" }, { status: 401 });
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
  return NextResponse.json({ id: id, list: userBoard }, { status: 200 });
}
