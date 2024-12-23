import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export const GET = async () => {
    try {
        const posts = await db.post.findMany();
        return NextResponse.json(posts,{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "something went wrong"},{status:500})
    }
}