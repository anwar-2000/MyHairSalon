import { createMongoConnection } from "@/database/Conn";
import SalonModel from '@/models/SalonModel';
import { NextResponse } from "next/server";


// GET method
export async function GET(req: Request) {
  try {
    await createMongoConnection();
  } catch (err) {
    throw new Error("Error in the MONGODB connection");
  }
  try {
    const {searchParams} = new URL(req.url);
    const salonName = searchParams.get("salon");
    const page  = searchParams.get("page") as unknown as number  || 1;
    const limit  = searchParams.get("limit") as unknown as number  || 50;
    let users;
  
    if (salonName) {
      // Fetch user data by email
      users = await SalonModel.find({ name: salonName });
    } else {
      if(page && limit) {
      const skip: number = (page - 1)  * limit ;
      users = await SalonModel.find({}).skip(skip).limit(limit);
    }
    }   
    if (!users) {
      return NextResponse.json({ message: "Salon Not Found" });
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
    body.password = hashedPassword; // Updating the password of user by the crypted one
    const newSalon = await SalonModel.create(body);
    return  NextResponse.json({'Salon CREATED ' : newSalon});
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
    const salonId = searchParams.get("salonId");
    const formData = req.body;

    if(salonId && formData){
      const user = await SalonModel.findByIdAndUpdate(salonId,formData)
      return  NextResponse.json({"Salon Modified" : user})
    }
    return  NextResponse.json({error : "Salon Not Selected"});
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
    const salonId = searchParams.get("salonId");

     const deletedSalon = await SalonModel.findByIdAndDelete(salonId);

     if(!deletedSalon){
             return  NextResponse.json({error : 'error deleting Salon'})
     }
     return  NextResponse.json({'Salon Deleted' : deletedSalon})
 }catch(error){
    return  NextResponse.json( {'ERROR in Salon: ' : error})
 }
}
