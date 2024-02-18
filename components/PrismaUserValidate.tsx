"use client";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export default async function PrismaUser() {
  const session = await getServerSession();

  await prisma.user.findUnique({
    where: { email: session?.user?.email as string },
  });
}
