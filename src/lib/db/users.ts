import { Exercise } from "@/util/Classes";
import { prisma } from "@/lib/prisma";

export async function getUsers() {
  return await prisma.user.findMany({
    include: {
      trainer: true,
      workoutPlans: true,
    },
  });
}

export async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      workoutPlans: {
        include: { exercises: true },
      },
    },
  });
}

export async function createUser(data: {
  name: string;
  surname: string;
  email: string;
  height: string;
  weight: string;
}) {
  return await prisma.user.create({ data });
}
