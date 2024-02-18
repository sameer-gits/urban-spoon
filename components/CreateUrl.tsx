"use client";

import { createUrl } from "@/app/actions";
import prisma from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { useFormStatus } from "react-dom";

export default function CreateUrl() {
  const { data: session } = useSession();
  //   const prismaUser = await prisma.user.findUnique({
  //     where: { email: session?.user?.email as string },
  //   });

  if (session) {
    return (
      <>
        <h1 className="text-3xl font-bold pb-10 md:text-4xl">Url Shortener</h1>
        <form
          className="flex flex-col gap-4 text-black w-full shadow-2xl"
          action={async (formData) => {
            await createUrl(formData);
            // form.current?.reset();
          }}
        >
          <input
            type="url"
            name="longUrl"
            placeholder="Your Url"
            required
            className="h-10 border border-gray-300 rounded-md p-2"
          />

          <AddButton />
        </form>
      </>
    );
  }
  return <>Not signed in</>;
}

export function AddButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button
      type="submit"
      disabled={pending}
      className="p-4 text-white font-bold bg-blue-500 rounded-md w-full"
    >
      {pending ? <>Generating...</> : <>Generate Url</>}
    </button>
  );
}
