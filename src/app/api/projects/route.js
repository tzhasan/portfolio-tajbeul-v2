import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import projectschema from "../../../../models/projectschema";

export const GET = async () => {
  await connectMongodb()
  const projects = await projectschema.find().sort({ createdAt: -1 })
  return NextResponse.json({projects})
};

export const POST = async (request) => {
  try {
    const requestData = await request.json();

    const { projectName, description,features, imageurl, livelink, gitlink } = requestData;

    await connectMongodb();

    // Create a new document using the .create() method
    await projectschema.create({
      projectName,
      description,
      features,
      imageurl,
      livelink,
      gitlink,
    });

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
};
