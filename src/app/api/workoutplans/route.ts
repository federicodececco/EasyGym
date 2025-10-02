import { NextResponse } from "next/server";
import { createWorkoutPlan, getWorkoutPlans } from "@/lib/db/workoutPlans";

export async function GET() {
  try {
    const workoutPlans = await getWorkoutPlans();
    return NextResponse.json(workoutPlans, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const workoutPlan = await createWorkoutPlan(body);
    return NextResponse.json(workoutPlan, { status: 201 });
  } catch (error: any) {
    if (error.code === "2003") {
      return NextResponse.json(
        { error: "User id is invalid or not existing" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      {
        error: "Failed to create resource",
      },
      {
        status: 500,
      },
    );
  }
}
