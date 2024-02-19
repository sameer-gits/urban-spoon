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
          <div key={url.id} className="w-full gap-4 flex-col flex">
            {/* Accessing the id of each url */}
            <p>{currentUser!.name}</p> {/* Displaying the user's id */}
            <Link
              href={`${url.longUrl}`}
              className="text-2xl font-bold break-all"
            >
              {url.longUrl}
            </Link>
            <Link
              href={`./${url.shortUrl}`}
              className="text-2xl font-bold break-all"
            >
              http://localhost:3000/{url.shortUrl}
            </Link>
            <p className="text-white/30 break-all">{url.click}</p>
          </div>
        ))}
    </div>
  );
}
