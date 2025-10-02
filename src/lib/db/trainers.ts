import { prisma } from "@/lib/prisma";

interface TrainerInterface {
  userId: number;
  role: string;
}

export async function getTrainers() {
  return await prisma.trainer.findMany({
    include: { user: false },
    orderBy: { created_at: "desc" },
  });
}

export async function getTrainerById(id: number) {
  return await prisma.trainer.findUnique({
    where: { id },
    include: { user: true },
  });
}

export async function getTrainerByUserId(userId: number) {
  return await prisma.trainer.findUnique({
    where: { userId },
    include: { user: true },
  });
}

export async function updateTrainer(id: number, data: TrainerInterface) {
  const { userId, ...trainerData } = data;

  return await prisma.trainer.update({
    where: { id },
    data: {
      ...trainerData,
    },
    include: {
      user: true,
    },
  });
}

export async function createTrainer(data: TrainerInterface) {
  return await prisma.trainer.create({
    data: {
      userId: data.userId,
      role: data.role,
    },
    include: {
      user: true,
    },
  });
}

export async function deleteTrainerById(id: number) {
  return prisma.trainer.delete({
    where: { id },
  });
}
