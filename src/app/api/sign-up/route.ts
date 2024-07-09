import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/helpers/conectDB";
import bcrypt from "bcryptjs";
import User from "@/models/user.model";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDb();
    const { username, email, password } = body;

    const user = await User.findOne({ email });

    if (user) {
      return Response.json({ message: "user already exsist" }, { status: 301 });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("step done now user create");

    const newUSer = new User({
      userName: username,
      password: hashPassword,
      email,
    });
    console.log("step 2 done");
    await newUSer.save();
    console.log("user saved");

    return Response.json({ redirectUrl: "/sign-in" });
  } catch (error) {
    console.log(error);

    return Response.json({
      message: "user not created",
    });
  }
}
