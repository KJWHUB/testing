"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-red-300"
        onClick={() => signOut()}
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <button
      className="px-12 py-4 border rounded-xl bg-yellow-300"
      onClick={() => signIn()}
    >
      LogIn
    </button>
  );
}

export default SignInButton;
