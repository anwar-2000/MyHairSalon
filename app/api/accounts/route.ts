import { createMongoConnection } from "@/database/Conn";
import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"


// GET method
export async function GET(req: Request) {
  try {
    await createMongoConnection();
  } catch (err) {
    throw new Error("Error in the database connection");
  }
  try {
    const {searchParams} = new URL(req.url);
    const userEmail = searchParams.get("userEmail");
    const page  = searchParams.get("page") as unknown as number  || 1;
    const limit  = searchParams.get("limit") as unknown as number  || 50;
    //console.log(userEmail ,page , limit)
    let users;
  
    if (userEmail) {
      // Fetch user data by email
      users = await UserModel.find({ email: userEmail });
    } else {
      if(page && limit) {
      const skip: number = (page - 1)  * limit ;
      users = await UserModel.find({}).skip(skip).limit(limit);
    }
    }   
    if (!users) {
      return NextResponse.json({ error: "User Not Found" });
    }
    return  NextResponse.json(users);
  } catch (error) {
    console.error(error);
    NextResponse.json({ error });
  }
}

// POST method
export async function POST(req: Request) {
  try {
    await createMongoConnection();
  } catch (err) {
    throw new Error("Error in the database connection");
  }
  try {
    const body = await req.json();
    //@ts-ignore
    const {password} = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    //@ts-ignore
    body.password = hashedPassword; // Updating the password of user by the crypted one
    const newUser = await UserModel.create(body);
    return  NextResponse.json({'USER CREATED ' : newUser});
  } catch (error) {
    console.error(error);
    return  NextResponse.json({error});
  }
}

// PUT method
export async function PUT(req: Request) {
  try {
    await createMongoConnection();
  } catch (err) {
    throw new Error("Error in the database connection");
  }
  try {
    const {searchParams} = new URL(req.url);
    const userEmail = searchParams.get("userEmail");
    console.log(userEmail)
    const formData = await req.json();

    if(userEmail && formData){
      console.log(formData);
      const user = await UserModel.findOneAndUpdate({email : userEmail},formData)
      return  NextResponse.json({"user Modified" : user});
    }
    return  NextResponse.json({error : "user Not Selected"});
  } catch (err) {
      return  NextResponse.json({ err });
  }
}

// DELETE method
export async function DELETE(req: Request) {
  try {
    await createMongoConnection();
  } catch (err) {
    throw new Error("Error in the database connection");
  }
  try {
    const {searchParams} = new URL(req.url);
    const userId = searchParams.get("userId");

     const deletedUser = await UserModel.findByIdAndDelete(userId);

     if(!deletedUser){
             return  NextResponse.json({error : 'error deleting user'})
     }
     return  NextResponse.json({'USER Deleted' : deletedUser})
 }catch(error){
    return  NextResponse.json( {'ERROR ' : error})
 }
}
