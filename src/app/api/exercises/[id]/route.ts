import { NextResponse } from "next/server";
import {
  updateExercise,
  getExerciseById,
  deleteExerciseById,
} from "@/lib/db/exercises";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid exercise ID" },
        { status: 400 },
      );
    }
    const exercise = await getExerciseById(id);
    if (!exercise) {
      return NextResponse.json(
        { error: "Exercise not found" },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(exercise);
  } catch (error) {
    console.error("Error fetching exercise:", error);
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
        { error: "Invalid exercise id" },
        { status: 400 },
      );
    }
    const dataBody = await request.json();
    const res = await updateExercise(id, dataBody);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error :", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Exercise not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Failed to update Exercise" },
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
      return NextResponse.json(
        { error: "Invalid exercise ID" },
        { status: 400 },
      );
    }
    const res = await deleteExerciseById(id);
    return NextResponse.json(res);
  } catch (error: any) {
    console.error("Error :", error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "workout not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
