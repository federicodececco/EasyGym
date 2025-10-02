import { prisma } from "@/lib/prisma";

interface UserInterface {
  name?: string;
  surname?: string;
  email?: string;
  height?: string;
  weight?: string;
  imageUrl?: string;
}

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

export async function updateUser(id: number, data: UserInterface) {
  return await prisma.user.update({ where: { id }, data });
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
export async function deleteUserById(id: number) {
  return await prisma.user.delete({
    where: { id },
  });
}
