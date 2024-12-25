import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const mail = await db.newsletter.create({
      data: { email: body.email },
    });
    return NextResponse.json(mail, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
};
