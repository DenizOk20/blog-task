import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";

export const GET = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
  try {
    
    const slug = (await params).id;
    const id = parseInt(slug)
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid ID parameter" },
        { status: 400 }
      );
    }

    const post = await db.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};