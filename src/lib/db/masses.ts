import { prisma } from "@/lib/prisma";

interface MassInterface {
  userId: number;
  percent: number;
  weight: number;
  isLeanMass: boolean;
  date?: string;
}

export async function getMasses() {
  return await prisma.mass.findMany({
    include: { user: false },
    orderBy: { date: "desc" },
  });
}

export async function getMassById(id: number) {
  return await prisma.mass.findUnique({
    where: { id },
  });
}

export async function getMassesByUserId(userId: number) {
  return await prisma.mass.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });
}

export async function updateMass(id: number, data: MassInterface) {
  const { userId, ...massData } = data;

  return await prisma.mass.update({
    where: { id },
    data: {
      ...massData,
      date: data.date ? new Date(data.date) : undefined,
    },
    include: {
      user: true,
    },
  });
}

export async function createMass(data: MassInterface) {
  return await prisma.mass.create({
    data: {
      userId: data.userId,
      percent: data.percent,
      weight: data.weight,
      isLeanMass: data.isLeanMass,
      date: data.date ? new Date(data.date) : new Date(),
    },
    include: {
      user: true,
    },
  });
}

export async function deleteMassById(id: number) {
  return prisma.mass.delete({
    where: { id },
  });
}
