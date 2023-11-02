const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getList = async () => {
  const res = await fetch(BASE_URL + "/api/board", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  console.log("목록 조회 결과", res);
  return res.json();
};

export const postData = async (request: any) => {
  await fetch(BASE_URL + "/api/board", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
};
