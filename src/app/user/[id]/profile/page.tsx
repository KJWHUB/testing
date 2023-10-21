"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Profile({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const [boardList, setBoardList] = useState([]);
  const fetchData = async () => {
    const list = await fetch(`http://localhost:3000/api/user/${params.id}`, {
      method: "GET",
      headers: {
        authorization: session?.user.accessToken || "",
      },
    }).then((res) => res.json());
    setBoardList(list.data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      내프로필
      <button onClick={() => fetchData()}>click</button>
      {JSON.stringify(boardList)}
    </main>
  );
}
