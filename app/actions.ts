"use server";

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createUrl(data: FormData) {
  const longUrl = data.get("longUrl") as string;
  const session = await getServerSession();
  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
  });

  if (!prismaUser) {
    return "Use Not Found";
  }

  await prisma.url.create({
    data: {
      longUrl,
      userId: prismaUser.id,
    },
  });
  revalidatePath("/");
  return { success: true };
}
