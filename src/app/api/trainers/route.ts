import { NextResponse } from "next/server";
import { createTrainer, getTrainers } from "@/lib/db/trainers";

export async function GET() {
  try {
    const trainers = await getTrainers();
    return NextResponse.json(trainers, { status: 200 });
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
    const trainer = await createTrainer(body);
    return NextResponse.json(trainer, { status: 201 });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "User already has a trainer profile" },
        { status: 400 },
      );
    }
    if (error.code === "P2003") {
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
