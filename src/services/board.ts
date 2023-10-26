const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getList = async () => {
  const res = await fetch(BASE_URL + "/api/board", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("목록 리스트 조회에 실패 했습니다.");
  }
  return res.json();
};

export const postData = async (pData: any) => {
  await fetch(BASE_URL + "/api/board", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pData),
  });
};
