import AuthButton from "@/components/AuthButton";
import CreateUrl from "@/components/CreateUrl";
import AllUrl from "@/components/AllUrl";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return (
      <main className="flex flex-col px-4 items-center justify-center min-h-screen max-w-4xl mx-auto">
        <CreateUrl />
        <AllUrl />
        <AuthButton />
      </main>
    );
  }
  return (
    <>
      <main className="flex flex-col px-4 items-center gap-4 justify-center min-h-screen max-w-4xl mx-auto">
        <AuthButton />
      </main>
    </>
  );
}
