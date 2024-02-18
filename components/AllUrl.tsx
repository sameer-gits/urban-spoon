import prisma from "@/lib/prisma";
import Link from "next/link";
// import { UpdatePostForm } from "./update-post";
// import { DeleteForm } from "./add-delete-post";

// All Post Map

export default async function Posts() {
  const urls = await prisma.url.findMany();

  return (
    <div className="grid gap-4 my-8 w-full">
      {urls.map((url) => (
        <div
          key={url.id}
          className="p-8 flex flex-col gap-8 rounded-xl items-start border border-blue-900/50 shadow-2xl shadow-blue-900/50"
        >
          <div className="w-full gap-4 flex-col flex">
            <p>{url.userId}</p>
            <Link
              href={`${url.longUrl}`}
              className="text-2xl font-bold break-all"
            >
              {url.longUrl}
            </Link>
            <Link href={`/${url.shortUrl}`} className="text-white/30 break-all">
              http://localhost:3000/{url.shortUrl}
            </Link>

            <p className="text-white/30 break-all">{url.click}</p>
          </div>
          {/* <div className="flex gap-4 justify-end items-start">
              <DeleteForm id={post.id} />
              <UpdatePostForm
                id={post.id}
                title={post.title}
                content={post.content}
              />
            </div> */}
        </div>
      ))}
    </div>
  );
}

// All Post Map
