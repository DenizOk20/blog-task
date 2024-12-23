import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";


// all users
export const GET = async () => {
    try {
        const users = await db.user.findMany();
        return NextResponse.json(users,{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "something went wrong"},{status:500})
    }
}