import { NextResponse } from "next/server";

// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// GET ================================================================================
export async function GET(request: Request) {
  // const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  // const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  // const todo: Todo = await res.json();

  const todo = {
    id: null,
  };

  if (!todo.id) return NextResponse.json({ message: "todo를 찾을수 없습니다" });

  return NextResponse.json(todo);
}
