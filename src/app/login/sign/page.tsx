"use client";

import React, { useRef } from "react";

const goS = async (req: any) => {
  const res = await fetch(`http://localhost:3000/api/user`, {
    method: "POST",
    body: JSON.stringify(req),
  });
  if (res.ok) {
    alert("회원가입 상태 : " + JSON.stringify(res));
  }
};

export default function Sign() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    const req = {
      name: nameRef.current,
      email: emailRef.current,
      password: passwordRef.current,
    };
    goS(req);
  };
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <form
        className=" sm:mx-auto sm:w-full sm:max-w-sm space-y-6"
        action="#"
        method="POST"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            name
          </label>
          <div className="mt-2">
            <input
              ref={nameRef}
              onChange={(e: any) => {
                nameRef.current = e.target.value;
              }}
              id="name"
              name="name"
              type="name"
              autoFocus={true}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
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
            onClick={handleSubmit}
            className="flex w-full justify-center transition duration-300 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            회원가입
          </button>
        </div>
      </form>
    </main>
  );
}
