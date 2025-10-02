import { prisma } from "@/lib/prisma";

interface ExerciseInterface {
  name: string;
  series: number;
  repetition: number;
  restPeriod: number;
  typeOfWeight: string;
  weight: number;
  workoutPlans: number[];
}

export async function getExercises() {
  return await prisma.exercise.findMany();
}

export async function getExerciseById(id: number) {
  return await prisma.exercise.findUnique({ where: { id } });
}

export async function updateExercise(id: number, data: ExerciseInterface) {
  const { workoutPlans, ...exerciseData } = data;

  return await prisma.exercise.update({
    where: { id },
    data: {
      ...exerciseData,
      workoutPlans: { set: [], connect: workoutPlans.map((id) => ({ id })) },
    },
  });
}

export async function createExercise(data: ExerciseInterface) {
  const { workoutPlans, ...exerciseData } = data;
  return await prisma.exercise.create({
    data: {
      ...exerciseData,
      workoutPlans: { connect: workoutPlans.map((id) => ({ id })) },
    },
  });
}

export async function deleteExerciseById(id: number) {
  return prisma.exercise.delete({
    where: { id },
  });
}
