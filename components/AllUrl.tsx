import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

// All Url Map

export default async function Posts() {
  const session = await getServerSession();

  // Get the currently logged-in user
  const currentUser = await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
    include: {
      urls: true,
    },
  });

  return (
    <div className="grid gap-4 my-8 w-full">
      {currentUser!.urls
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((url) => (
          <div
            key={url.id}
            className="w-full gap-4 flex-col flex bg-slate-900 rounded-md p-4"
          >
            {/* Accessing the id of each url */}
            {/* <p>{currentUser!.name}</p> */}
            <Link href={`./${url.shortUrl}`} className="font-bold break-all">
              https://url-s.up.railway.app/{url.shortUrl}
            </Link>
            <Link href={`${url.longUrl}`} className="text-white/50 break-all">
              {url.longUrl}
            </Link>
            <p className="text-white/30 break-all">Total Clicks: {url.click}</p>
          </div>
        ))}
    </div>
  );
}
