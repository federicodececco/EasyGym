import { NextResponse } from "next/server";
import { getMassById, updateMass, deleteMassById } from "@/lib/db/masses";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = parseInt(params.id);
    const mass = await getMassById(id);

    if (!mass) {
      return NextResponse.json({ error: "Mass not found" }, { status: 404 });
    }

    return NextResponse.json(mass, { status: 200 });
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
    const mass = await updateMass(id, body);
    return NextResponse.json(mass, { status: 200 });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Mass not found" }, { status: 404 });
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
    await deleteMassById(id);
    return NextResponse.json(
      { message: "Mass deleted successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Mass not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to delete resource" },
      { status: 500 },
    );
  }
}
