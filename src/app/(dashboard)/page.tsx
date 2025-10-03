"use client";

import { Exercise } from "@/util/Classes";
import ScheduleGrid from "../../components/ScheduleGrid";
import axiosIstance from "@/lib/axios";
import { useEffect } from "react";

const fakeArrayOfData = [
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
export default function DashBoard() {
  const fetchTest = async () => {
    const test = await axiosIstance.get("/users");
    console.log(test);
  };
  useEffect(() => {
    fetchTest();
  }, []);
  return (
    <section className="h-screen">
      <div className="absolute inset-0 -z-10 bg-[url('/bg-gym.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <ScheduleGrid data={fakeArrayOfData}></ScheduleGrid>
    </section>
  );
}
