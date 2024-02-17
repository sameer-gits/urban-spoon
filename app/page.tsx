import AuthButton from "@/components/AuthButton";
import prisma from "@/lib/prisma";

export default async function Home() {
  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AuthButton />
    </main>
  );
}
