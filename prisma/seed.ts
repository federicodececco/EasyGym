import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Gigio",
        surname: "Bagigio",
        email: "gigiobagigio@email.com",
        height: "190",
        weight: "103",
      },
      {
        name: "Pinco",
        surname: "Pallo",
        email: "pincopallo@email.com",
        height: "175",
        weight: "63",
      },
      {
        name: "Giba",
        surname: "Giabiba",
        email: "gibagiabiba@email.com",
        height: "180",
        weight: "75",
      },
      {
        name: "Maria",
        surname: "Rossi",
        email: "mariarossi@email.com",
        height: "163",
        weight: "67",
      },
      {
        name: "Jane",
        surname: "Doe",
        email: "janedoe@email.com",
        height: "171",
        weight: "71",
      },
    ],
  });

  const users = await prisma.user.findMany();

  await prisma.trainer.create({
    data: {
      role: "Personal Trainer",
      userId: users[2].id,
    },
  });

  await prisma.exercise.createMany({
    data: [
      {
        name: "Panca Piana",
        series: 4,
        repetition: 10,
        restPeriod: 90,
        typeOfWeight: "Bilanciere",
        weight: 80,
      },
      {
        name: "Squat",
        series: 4,
        repetition: 8,
        restPeriod: 120,
        typeOfWeight: "Bilanciere",
        weight: 100,
      },
      {
        name: "Stacco da Terra",
        series: 3,
        repetition: 6,
        restPeriod: 180,
        typeOfWeight: "Bilanciere",
        weight: 120,
      },
      {
        name: "Military Press",
        series: 3,
        repetition: 10,
        restPeriod: 90,
        typeOfWeight: "Bilanciere",
        weight: 50,
      },
      {
        name: "Trazioni",
        series: 4,
        repetition: 12,
        restPeriod: 60,
        typeOfWeight: "Corpo Libero",
        weight: 0,
      },
      {
        name: "Curl Bicipiti",
        series: 3,
        repetition: 12,
        restPeriod: 60,
        typeOfWeight: "Manubri",
        weight: 15,
      },
      {
        name: "Leg Press",
        series: 4,
        repetition: 12,
        restPeriod: 90,
        typeOfWeight: "Macchina",
        weight: 150,
      },
    ],
  });

  const exercises = await prisma.exercise.findMany();

  await prisma.workoutPlan.create({
    data: {
      name: "Forza Upper Body",
      startData: "2025-01-01",
      expirationData: "2025-03-31",
      userId: users[1].id,
      exercises: {
        connect: [
          { id: exercises[0].id },
          { id: exercises[3].id },
          { id: exercises[4].id },
          { id: exercises[5].id },
        ],
      },
    },
  });

  await prisma.workoutPlan.create({
    data: {
      name: "Forza Lower Body",
      startData: "2025-01-01",
      expirationData: "2025-03-31",
      userId: users[1].id,
      exercises: {
        connect: [
          { id: exercises[1].id },
          { id: exercises[2].id },
          { id: exercises[6].id },
        ],
      },
    },
  });

  await prisma.workoutPlan.create({
    data: {
      name: "Programma Completo Gigio",
      startData: "2025-02-01",
      expirationData: "2025-04-30",
      userId: users[0].id,
      exercises: {
        connect: exercises.slice(0, 5).map((ex) => ({ id: ex.id })),
      },
    },
  });

  await prisma.mass.createMany({
    data: [
      {
        userId: users[1].id,
        percent: 75,
        weight: 47,
        date: new Date("2025-01-01"),
        isLeanMass: true,
      },
      {
        userId: users[1].id,
        percent: 77,
        weight: 48,
        date: new Date("2025-02-01"),
        isLeanMass: true,
      },
      {
        userId: users[2].id,
        percent: 80,
        weight: 60,
        date: new Date("2025-01-15"),
        isLeanMass: true,
      },
      {
        userId: users[1].id,
        percent: 25,
        weight: 16,
        date: new Date("2025-01-01"),
        isLeanMass: false,
      },
      {
        userId: users[1].id,
        percent: 23,
        weight: 15,
        date: new Date("2025-02-01"),
        isLeanMass: false,
      },
      {
        userId: users[2].id,
        percent: 20,
        weight: 15,
        date: new Date("2025-01-15"),
        isLeanMass: false,
      },
    ],
  });

  console.log("seeding colpeted");
}

seed()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
