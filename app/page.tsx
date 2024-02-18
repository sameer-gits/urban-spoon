import AuthButton from "@/components/AuthButton";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
  });
  console.log(session, prismaUser);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {session?.user?.name ? (
        <div>{session.user.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
      <AuthButton />
    </main>
  );
}
