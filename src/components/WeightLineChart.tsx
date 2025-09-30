"use client";
import { FatMass, LeanMass } from "@/util/Classes";
import {
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface GraphData {
  leanMass?: LeanMass[];
  fatMass?: FatMass[];
}

export default function WeightLineChart({ fatMass, leanMass }: GraphData) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={leanMass ? leanMass : fatMass}>
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin - 3", "dataMax + 3"]} />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
