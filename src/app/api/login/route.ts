//app/api/login/route.ts
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { signJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "일치하는 유저가 없습니다" }, { status: 401 });
  }

  if (await bcrypt.compare(body.password, user.password)) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return NextResponse.json(result);
  }

  return NextResponse.json(null);
}
