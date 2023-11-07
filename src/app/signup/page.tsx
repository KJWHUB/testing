"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";

import { postData as creatUser } from "@/services/sign";

export default function Sign() {
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const req = {
      email: emailRef.current,
      password: passwordRef.current,
    };
    const res = await creatUser(req);
    const data = await res.json();

    if (res.ok) {
      router.replace("/login");
      alert(data.message || "회원가입 성공했습니다.");
    } else {
      alert(data.message || "회원가입에 실패했습니다.");
    }
    return;
  };
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <form className=" sm:mx-auto sm:w-full sm:max-w-sm space-y-6" onSubmit={handleSubmit}>
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
            className="flex w-full justify-center transition duration-300 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            회원가입
          </button>
        </div>
      </form>
    </main>
  );
}
