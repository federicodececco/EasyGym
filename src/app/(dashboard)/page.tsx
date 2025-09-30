"use client";

import ScheduleGrid from "../../components/ScheduleGrid";

export default function DashBoard() {
  return (
    <section>
      <div className="absolute inset-0 -z-10 bg-[url('/bg-gym.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <ScheduleGrid></ScheduleGrid>
    </section>
  );
}
