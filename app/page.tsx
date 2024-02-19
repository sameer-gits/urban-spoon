import AuthButton from "@/components/AuthButton";
import CreateUrl from "@/components/CreateUrl";
import AllUrl from "@/components/AllUrl";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center gap-5 p-2 max-w-4xl">
        <CreateUrl />
        <AllUrl />
        <AuthButton />
      </main>
    );
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-5 p-2 max-w-4xl">
        <AuthButton />
      </main>
    </>
  );
}
