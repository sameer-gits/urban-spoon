import AuthButton from "@/components/AuthButton";
// import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import CreateUrl from "@/components/CreateUrl";
import AllUrl from "@/components/AllUrl";

export default async function Home() {
  const session = await getServerSession();

  console.log("hello" + session);
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <CreateUrl />
      <AllUrl />
      <AuthButton />
    </main>
  );
}
