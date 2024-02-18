import AuthButton from "@/components/AuthButton";
// import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import CreateUrl from "@/components/CreateUrl";
import AllUrl from "@/components/AllUrl";

export default async function Home() {
  const session = await getServerSession();

  console.log("hello" + session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <p className="text-2xl pb-6">getServerSession Result</p>
      {session?.user?.name ? (
        <div>{session.user.name}</div>
      ) : (
        <div>Not logged in returning null</div>
      )} */}

      <CreateUrl />
      <AllUrl />

      <AuthButton />
    </main>
  );
}
