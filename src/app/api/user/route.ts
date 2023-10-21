import * as bcrypt from "bcrypt"; // 바뀐 부분
import dayjs from "dayjs";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

interface RequestBody {
  name: string;
  email: string;
  password: string;
  signinDate: string;
}

export async function POST(request: Request) {
  const { name, email, password }: RequestBody = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    },
  });

  const { ...result } = user;
  return new Response(JSON.stringify(result));
}
