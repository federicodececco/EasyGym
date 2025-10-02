import { NextResponse } from "next/server";
import {
  getTrainerById,
  updateTrainer,
  deleteTrainerById,
} from "@/lib/db/trainers";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    const trainer = await getTrainerById(id);

    if (!trainer) {
      return NextResponse.json({ error: "Trainer not found" }, { status: 404 });
    }

    return NextResponse.json(trainer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const trainer = await updateTrainer(id, body);
    return NextResponse.json(trainer, { status: 200 });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Trainer not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to update resource" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    await deleteTrainerById(id);
    return NextResponse.json(
      { message: "Trainer deleted successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Trainer not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to delete resource" },
      { status: 500 },
    );
  }
}
