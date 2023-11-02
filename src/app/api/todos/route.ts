import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

// GET ================================================================================
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

// POST ================================================================================
export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo = await res.json();

  return NextResponse.json(newTodo);
}

// PUT ================================================================================
export async function PUT(request: Request) {
  const { id, userId, title, completed }: Todo = await request.json();

  if (!id || !userId || !title || typeof completed !== "boolean") {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updateTodo = await res.json();

  return NextResponse.json(updateTodo);
}

// DELETE ================================================================================
export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "todo 의 id 값은 필수입니다" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({
    massge: `todo ${id} 가 성공적으로 삭제 되었습니다`,
  });
}
