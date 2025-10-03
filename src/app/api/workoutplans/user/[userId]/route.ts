import { getWorkoutPlanByUserId } from "@/lib/db/workoutPlans";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const { userId: paramUserId } = await params;
    const userId = parseInt(paramUserId);
    if (isNaN(userId)) {
      return NextResponse.json(
        {
          error: "Invalid user id",
        },
        {
          status: 400,
        },
      );
    }
    const workoutPlans = await getWorkoutPlanByUserId(userId);

    return NextResponse.json(workoutPlans);
  } catch (error) {
    console.error("Error fetching workoutPlans:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
