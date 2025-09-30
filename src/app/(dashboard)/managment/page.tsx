"use client";

import ScheduleGrid from "@/components/ScheduleGrid";
import { Exercise, Trainer, User, WorkoutPlan } from "@/util/Classes";
import { Calendar, ChevronDown, ChevronRight, Dumbbell } from "lucide-react";
import { useState } from "react";
const fakeArrayTraining = [
  new Exercise("panca piana", 2, 8, 90, "kg", 80),
  new Exercise("squat", 4, 12, 120, "kg", 100),
  new Exercise("trazioni", 3, 10, 60, "free body"),
  new Exercise("stacchi", 5, 6, 180, "kg", 120),
  new Exercise("military press", 2, 8, 90, "kg", 50),
  new Exercise("dip", 4, 12, 60, "free body"),
  new Exercise("curl bicipiti", 5, 10, 45, "kg", 15),
  new Exercise("leg press", 1, 15, 90, "kg", 150),
  new Exercise("plank", 2, 60, 30, "free body"),
  new Exercise("affondi", 3, 12, 60, "kg", 20),
  new Exercise("rematore", 4, 10, 90, "kg", 70),
  new Exercise("alzate laterali", 5, 12, 45, "kg", 10),
  new Exercise("crunch", 7, 20, 30, "free body"),
  new Exercise("french press", 10, 10, 60, "kg", 25),
];

const workout = new WorkoutPlan(
  "1",
  "spalle",
  "01-05-2025",
  "02-06-2025",
  fakeArrayTraining,
);
const workout2 = new WorkoutPlan(
  "1",
  "gambe",
  "01-05-2025",
  "02-06-2025",
  fakeArrayTraining,
);
const workout3 = new WorkoutPlan(
  "1",
  "petto",
  "01-05-2025",
  "02-06-2025",
  fakeArrayTraining,
);
const fakeUserTraining = [workout, workout2, workout3];

/* trainer user */
const fakeUser = {
  id: "1",
  name: "Gigio",
  surname: "Bagigio",
  email: "gigio.bagigio@email.com",
  height: 176,
  weight: 81,
  imageUrl: "",
};
const fakeUser2 = {
  id: "3",
  name: "Gigio",
  surname: "Bagigio",
  email: "gigio.bagigio@email.com",
  height: 176,
  weight: 81,
  imageUrl: "",
};
const fakeUser3 = {
  id: "4",
  name: "Gigio",
  surname: "Bagigio",
  email: "gigio.bagigio@email.com",
  height: 176,
  weight: 81,
  imageUrl: "",
};
const userArray = [fakeUser, fakeUser2, fakeUser3];
const fakeUserTrainer: User = new User(
  "2",
  "Gigia",
  "Giagiga",
  "gigia.giagigia@email.com",
  190,
  87,
  "",
);

const fakeTrainer = new Trainer(fakeUserTrainer, "uno", "admin");

export default function Managment() {
  const [activeWorkout, setActiveWorkout] = useState("spalle");
  const [activeUser, setActiveUser] = useState("1");

  const handleUserTrigger = (id: string) => {
    if (activeUser === id) {
      setActiveUser("");
      setActiveWorkout("");
    } else {
      setActiveUser(id);
      setActiveWorkout("");
    }
  };

  const handleWorkoutTrigger = (name: string) => {
    if (activeWorkout === name) {
      setActiveWorkout("");
    } else {
      setActiveWorkout(name);
    }
  };
  return (
    <section className="hide-scrollbar h-screen overflow-y-auto p-8">
      <div className="absolute inset-0 -z-10 bg-[url('/bg-gym.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-6 shadow-2xl">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-white">
                {`${fakeUserTrainer.name} ${fakeUserTrainer.surname}`}
              </h1>
              <p className="text-slate-400">Scheda amministrativa</p>
            </div>
            <div className="text-lg text-slate-300">
              {fakeUserTrainer.email}
            </div>
          </div>
        </div>

        {/* Users Section */}
        <div className="space-y-4">
          {userArray.map((trainee, index) => (
            <div
              key={`${trainee.id}.${index}`}
              className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg transition-all duration-300"
            >
              {/* User Header */}
              <button
                onClick={() => handleUserTrigger(trainee.id)}
                className="group flex w-full items-center justify-between p-6 transition-all duration-300 hover:bg-slate-600/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <Dumbbell className="text-blue-400" size={24} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-white">
                      {`${trainee.name} ${trainee.surname}`}
                    </h2>
                    <p className="text-sm text-slate-400">{trainee.email}</p>
                  </div>
                </div>
                <div className="transition-transform duration-300">
                  {activeUser === trainee.id ? (
                    <ChevronDown className="text-blue-400" size={24} />
                  ) : (
                    <ChevronRight className="text-slate-400" size={24} />
                  )}
                </div>
              </button>

              {/* Workouts Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeUser === trainee.id
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-slate-600/50 p-6">
                  <div className="mb-4 text-sm font-semibold tracking-wider text-slate-400 uppercase">
                    Schede di allenamento
                  </div>

                  <div className="space-y-3">
                    {fakeUserTraining.map((workout, workoutIndex) => (
                      <div
                        key={`${workout.name}.${workoutIndex}`}
                        className="overflow-hidden rounded-lg bg-slate-600/30"
                      >
                        {/* Workout Header */}
                        <button
                          onClick={() => handleWorkoutTrigger(workout.name)}
                          className="group flex w-full items-center justify-between p-4 transition-all duration-300 hover:bg-slate-600/50"
                        >
                          <div className="flex items-center gap-3">
                            <Calendar className="text-purple-400" size={20} />
                            <div className="text-left">
                              <h3 className="font-semibold text-white capitalize">
                                {workout.name}
                              </h3>
                              <p className="text-xs text-slate-400">
                                {workout.startDate} - {workout.expirationDate}
                              </p>
                            </div>
                          </div>
                          <div className="transition-transform duration-300">
                            {activeWorkout === workout.name ? (
                              <ChevronDown
                                className="text-purple-400"
                                size={20}
                              />
                            ) : (
                              <ChevronRight
                                className="text-slate-400"
                                size={20}
                              />
                            )}
                          </div>
                        </button>

                        {/* Exercises Grid*/}
                        <div
                          className={`transition-all duration-500 ease-in-out ${
                            activeWorkout === workout.name
                              ? "max-h-[3000px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="border-t border-slate-600/30 p-4">
                            <ScheduleGrid data={workout.exericesList} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
