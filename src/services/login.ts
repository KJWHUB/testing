const BASE_URL = process.env.NEXTAUTH_URL;

export const postData = async (credentials: Record<"email" | "password", string> | undefined, req: any) => {
  return await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials?.email,
      password: credentials?.password,
    }),
  });
};
