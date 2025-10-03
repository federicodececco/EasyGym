import { prisma } from "@/lib/prisma";
import { Exercise } from "@prisma/client";

interface WorkoutPlanInterface {
  userId: number;
  name: string;
  startData: string;
  expirationData: string;
  exercises?: number[];
}

export async function getWorkoutPlans() {
  return await prisma.workoutPlan.findMany({
    include: { user: false, exercises: false },
  });
}

export async function getWorkoutPlanById(id: number) {
  return await prisma.workoutPlan.findUnique({
    where: { id },
  });
}

export async function getWorkoutPlanByUserId(userId: number) {
  return await prisma.workoutPlan.findMany({
    where: { userId },
    include: { exercises: true },
  });
}

export async function updateWorkoutPlan(
  id: number,
  data: WorkoutPlanInterface,
) {
  const { exercises, ...workoutData } = data;

  return await prisma.workoutPlan.update({
    where: { id },
    data: {
      ...workoutData,
      exercises: exercises
        ? {
            set: [],
            connect: exercises.map((id) => ({ id })),
          }
        : undefined,
    },
    include: {
      exercises: true,
      user: true,
    },
  });
}

export async function createWorkoutPlan(data: WorkoutPlanInterface) {
  const { exercises, ...workoutData } = data;
  return await prisma.workoutPlan.create({
    data: {
      ...workoutData,
      exercises: exercises
        ? {
            connect: exercises.map((id) => ({ id })),
          }
        : undefined,
    },
    include: {
      exercises: true,
      user: true,
    },
  });
}
export async function deleteWorkoutPlanById(id: number) {
  return prisma.workoutPlan.delete({
    where: { id },
  });
}
