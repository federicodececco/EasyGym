"use client";
import { Exercise } from "@/util/Classes";
import Card from "@/components/Card";

interface ScheduleGridInterface {
  data: Exercise[];
}
export default function ScheduleGrid({ data }: ScheduleGridInterface) {
  return (
    <div className="hide-scrollbar mx-auto max-h-screen max-w-6xl overflow-y-scroll py-4">
      <div className="gap-x-4 gap-y-2 md:grid md:grid-cols-2 xl:grid-cols-3">
        {data.map((ex, index) => (
          <Card
            key={`${index}.exercise.${ex.name}`}
            name={ex.name}
            series={ex.series}
            repetitions={ex.repetitions}
            restPeriod={ex.restPeriod}
            typeOfWeight={ex.typeOfWeight}
            weight={ex.weight}
          />
        ))}
      </div>
    </div>
  );
}
