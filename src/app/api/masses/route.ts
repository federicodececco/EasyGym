import { NextResponse } from "next/server";
import { createMass, getMasses } from "@/lib/db/masses";

export async function GET() {
  try {
    const masses = await getMasses();
    return NextResponse.json(masses, { status: 200 });
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
    const mass = await createMass(body);
    return NextResponse.json(mass, { status: 201 });
  } catch (error: any) {
    console.error(error);
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
