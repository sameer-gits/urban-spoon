"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user!.name} <br />
        <button
          className="px-4 p-2 font-bold bg-red-500 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      {" "}
      <p className="text-white/30 pt-2 text-center text-balance">
        Login Using Github, that's it! then start generating Short Urls <br />
        Technically Short url are not short cause my demo domain name is very
        big its just a demo
      </p>
      <button
        className="px-4 p-2 font-bold bg-blue-500 rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
