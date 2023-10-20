export const getList = async () => {
  const res = await fetch("http://localhost:3000" + "/api/board", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("목록 리스트 조회에 실패 했습니다.");
  }
  return res.json();
};

export const postData = async (pData: any) => {
  await fetch("http://localhost:3000" + "/api/board", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pData),
  });
};
