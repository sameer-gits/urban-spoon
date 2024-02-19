import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const url = await prisma.url.findUnique({
    where: { shortUrl: params.slug },
  });

  if (url) {
    // Increment click count
    await prisma.url.update({
      where: { shortUrl: params.slug },
      data: {
        click: {
          increment: 1,
        },
      },
    });

    // Redirect to the long URL
    redirect(url.longUrl);
  } else {
    notFound();
  }
}
