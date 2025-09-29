"use client";
import { Exercise } from "@/util/Classes";
import Card from "@/components/Card";
const fakeArrayOfData = [
  new Exercise("panca piana", 8, 90, "kg", 80),
  new Exercise("squat", 12, 120, "kg", 100),
  new Exercise("trazioni", 10, 60, "free body"),
  new Exercise("stacchi", 6, 180, "kg", 120),
  new Exercise("military press", 8, 90, "kg", 50),
  new Exercise("dip", 12, 60, "free body"),
  new Exercise("curl bicipiti", 10, 45, "kg", 15),
  new Exercise("leg press", 15, 90, "kg", 150),
  new Exercise("plank", 60, 30, "free body"),
  new Exercise("affondi", 12, 60, "kg", 20),
  new Exercise("rematore", 10, 90, "kg", 70),
  new Exercise("alzate laterali", 12, 45, "kg", 10),
  new Exercise("crunch", 20, 30, "free body"),
  new Exercise("french press", 10, 60, "kg", 25),
];

export default function HomePage() {
  return (
    <div>
      {fakeArrayOfData.map((ex) => (
        <Card />
      ))}
    </div>
  );
}
