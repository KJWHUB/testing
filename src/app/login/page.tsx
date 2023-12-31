"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProviders, signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      console.log("getProviders::", res);
      setProviders(res);
    })();
  }, []);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: emailRef.current,
      password: passwordRef.current,
      redirect: false,
    });

    if (result?.ok) {
      router.replace("/");
      alert("로그인 성공.");
    } else {
      alert("로그인에 실패했습니다.");
    }
  };
  const handleKakao = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  const handleNaver = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("naver", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={"/tailwind_logo.svg"} alt="you logo" width={40} height={40} className="mx-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">로그인 후 더 많은 서비스를 이용해주세요 !</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={emailRef}
                  onChange={(e: any) => {
                    emailRef.current = e.target.value;
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus={true}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  ref={passwordRef}
                  onChange={(e: any) => (passwordRef.current = e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* 기본 */}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center transition duration-300 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            {/* 카카오 */}
            <div>
              <button
                type="submit"
                onClick={handleKakao}
                className="flex w-full justify-center transition duration-300 rounded-md bg-yellow-400  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kakao
              </button>
            </div>
            {/* 네이버 */}
            <div>
              <button
                type="submit"
                onClick={handleNaver}
                className="flex w-full justify-center transition duration-300 rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Naver
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            회원이 아니신가요?
            <Link href={"signup"} className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
