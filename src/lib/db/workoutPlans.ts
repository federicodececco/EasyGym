import { prisma } from "@/lib/prisma";
import { Exercise } from "@prisma/client";

interface WorkoutPlanInterface {
  name: string;
  expirationData: string;
  exercise: Exercise[];
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

export async function updateWorkoutPlan(
  id: number,
  data: WorkoutPlanInterface,
) {
  return await prisma.workoutPlan.update({ where: { id }, data });
}

export async function createWorkoutPlan(data: {
  userId: number;
  name: string;
  startData: string;
  expirationData: string;
  exercise: Exercise[];
}) {
  return await prisma.workoutPlan.create({ data });
}

export async function deleteWorkoutPlanById(id: number) {
  return await prisma.workoutPlan.delete({ where: { id } });
}
