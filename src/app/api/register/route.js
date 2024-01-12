import { User } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { email, password } = req.body;
  mongoose.connect(process.env.MONGO_URL);
  try {
    const newUser = await User.create({
      email,
      password,
    });
    return new NextResponse({
      status: "201",
      msg: "User Created Successfully!!",
      newUser,
    });
  } catch (error) {
    return new NextResponse({ status: "404", msg: "Something went wrong! :(" });
  }
}
