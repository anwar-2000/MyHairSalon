import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {

  const { path } = await request.json();
  console.log(path)
  if (!path) {
    console.log('here')
    return NextResponse.json(
      { message: "Image Path is not provided" },
      { status: 400 }
    );
  }
  //console.log('here')
  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformaion: [{ width: 1000, height: 752, crop: "scale" }],
    };
    const result = await cloudinary.uploader.upload(path,options)
    console.log(result)
    return NextResponse.json(result , {status : 200})
  } catch (error) {
    //console.log(error)
    return NextResponse.json({message : error} , {status : 500})
  }
}
