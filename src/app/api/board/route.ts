import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const DATA_SOURCE_URL = BASE_URL + "/board";

// GET ================================================================================
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const boards: Board[] = await res.json();

  boards.sort((a, b) => b.id - a.id);

  return NextResponse.json(boards);
}

// POST ================================================================================
export async function POST(request: Request) {
  const { title, contents }: Partial<Board> = await request.json();

  if (!title || !contents) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      contents,
      date: new Date(),
    }),
  });

  return NextResponse.json({ message: "성공적으로 저장되었습니다" });
}

// PUT ================================================================================
export async function PUT(request: Request) {
  const { id, title, contents }: Board = await request.json();

  if (!id || !title || !contents) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      contents,
      modifyDate: new Date(),
    }),
  });

  const updateTodo = await res.json();

  return NextResponse.json(updateTodo);
}

// DELETE ================================================================================
export async function DELETE(request: Request) {
  const { id }: Partial<Board> = await request.json();

  if (!id) return NextResponse.json({ message: "todo 의 id 값은 필수입니다" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({
    massge: `board ${id} 가 성공적으로 삭제 되었습니다`,
  });
}
