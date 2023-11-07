import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

interface RequestBody {
  name?: string;
  email: string;
  password: string;
}

/**
 * 회원가입 요청 api
 */
export async function POST(request: Request) {
  console.log("요청 api 들어옴");
  const { email, password }: RequestBody = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: "데이터가 올바른 값이 아닙니다" });
  }

  const exUserList = await Promise.all([prisma.user.findUnique({ where: { email: email } })]);

  console.log("ex", exUserList);
  // 기본 사용
  // return NextResponse.redirect(new URL('/new', request.url));
  if (exUserList[0]) {
    return NextResponse.json({
      message: "이메일이 이미 존재합니다.",
      status: 409,
    });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
      },
    });
    const { ...result } = user;
    return NextResponse.json({
      message: "회원가입이 성공적으로 되었습니다",
      data: result,
    });
  } catch (error) {
    console.error("/api/user error >> ", error);
    return NextResponse.json({
      message: "서버 에러로 실패하였습니다.",
      status: 500,
    });
  }
}
