const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const postData = async (req: any) => {
  const res = await fetch(`${BASE_URL}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  return res;
};
