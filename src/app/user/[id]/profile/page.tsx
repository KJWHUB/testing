"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const getUserData = async (id: string, session: any) => {
  const res = await fetch(`/api/user/${id}`, {
    method: "GET",
    headers: {
      authorization: session?.user.accessToken || "",
    },
  }).then((res) => res.json());
  return res;
};

export default function Profile({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const res = await getUserData(params.id, session);
        setBoardList(res?.list);
      }
    };
    fetchData();
  }, [params.id, session]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>내프로필</p>
      <ul>
        {boardList.map((el: any, i) => {
          return (
            <li key={i} className=" border-2">
              <p>title: {el.title}</p>
              <p>content: {el.content}</p>
              <p>createAt: {el.createAt}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
