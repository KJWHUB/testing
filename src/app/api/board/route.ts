import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET ================================================================================
/**
 * 게시판 목록 조회
 */
export async function GET() {
  try {
    const res = await prisma.board.findMany({
      orderBy: {
        createAt: "desc",
      },
    });

    if (res.length === 0) {
      return NextResponse.json({ message: "조회된 게시판 목록이 없습니다.", list: [] });
    }

    return NextResponse.json({ list: res });
  } catch (error) {
    return NextResponse.json({ message: "게시판 목록 조회에 실패했습니다", error, list: [] }, { status: 500 });
  }
}

// POST ================================================================================
/**
 * 게시글 등록
 */
interface BoardPostRequest {
  email: string;
  title: string;
  content: string;
}
export async function POST(request: Request) {
  const { email, title, content }: Partial<BoardPostRequest> = await request.json();

  if (!email || !title || !content) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  // 사용자의 ID를 가져옵니다.
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "일치하는 유저가 없습니다. 등록에 실패했습니다." }, { status: 400 });
  }

  // 사용자에 대한 새 게시물을 생성합니다.
  const board = await prisma.board.create({
    data: {
      title,
      content,
      author: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  return NextResponse.json({
    message: "성공적으로 저장되었습니다",
    data: board,
  });
}

// PUT ================================================================================
/**
 * 게시글 수정
 */
export async function PUT(request: Request) {
  const { id, title, content }: Board = await request.json();

  if (!id || !title || !content) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  try {
    const board = await prisma.board.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json({ message: "게시글 수정이 완료 되었습니다.", data: board });
  } catch (error) {
    return NextResponse.json({ message: "게시글 수정에 실패했습니다." }, { status: 500 });
  }
}
