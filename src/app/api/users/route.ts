import { NextResponse } from "next/server";
import { getUsers, createUser } from "@/lib/db/users";

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users, { status: 202 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch" },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await createUser(body);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
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
