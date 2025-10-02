import { NextResponse } from "next/server";
import {
  getWorkoutPlanById,
  deleteWorkoutPlanById,
  updateWorkoutPlan,
} from "@/lib/db/workoutPlans";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid workoutPlan ID" },
        { status: 400 },
      );
    }
    const workoutPlan = await getWorkoutPlanById(id);
    if (!workoutPlan) {
      return NextResponse.json(
        { error: "workoutPlan not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(workoutPlan);
  } catch (error) {
    console.error("Error fetching workoutPlan:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid WorkoutPlan ID" },
        { status: 400 },
      );
    }

    const dataBody = await request.json();

    const res = await updateWorkoutPlan(id, dataBody);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error :", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "WorkoutPlan not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Failed to update WorkoutPlan" },
      { status: 500 },
    );
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }
    const res = await deleteWorkoutPlanById(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error :", error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
