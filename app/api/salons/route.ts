import SalonModel from '@/models/SalonModel';
import { NextResponse } from "next/server";


// GET method
export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const salonName = searchParams.get("salon");
    const page  = searchParams.get("page") as unknown as number  || 1;
    const limit  = searchParams.get("limit") as unknown as number  || 50;
    let salons;

    const country = searchParams.get("Country");
    const place = searchParams.get("Place");
    
    const ownerEmail = searchParams.get("owner");
    if(ownerEmail){
      salons = await SalonModel.find({ owner: ownerEmail });
    }
    else if(salonName) {
     
      salons = await SalonModel.find({ name: salonName });
    } else if(country && place) {

      salons = await SalonModel.find({ country: salonName , place : place });
    }
    else if(page && limit) {
     // console.log("here",page,limit)
      const skip: number = (page - 1)  * limit ;
      salons = await SalonModel.find({}).skip(skip).limit(limit);
      //console.log("here",salons)
    }   
    if (!salons) {
      return NextResponse.json({ message: "Salon Not Found" });
    }
    return  NextResponse.json(JSON.stringify(salons));
  } catch (error) {
    console.error(error);
    NextResponse.json({ error });
  }
}

// POST method
export async function POST(req: Request) {
  try {
    const body = await req.json();
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
    const {searchParams} = new URL(req.url);
    const owner = searchParams.get("owner");
    const formData = await req.json();
   // console.log(formData)
    if(owner && formData){
      const salon = await SalonModel.findOneAndUpdate({owner : owner},formData)
      return  NextResponse.json({"Salon Modified" : salon})
    }
    return  NextResponse.json({error : "Salon Not Found"});
  } catch (err) {
      return  NextResponse.json({ err });
  }
}

// DELETE method
export async function DELETE(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const owner = searchParams.get("owner");

     const deletedSalon = await SalonModel.findOneAndDelete({owner : owner});

     if(!deletedSalon){
             return  NextResponse.json({error : `error deleting Salon of ${owner}`})
     }
     return  NextResponse.json({'Salon Deleted' : deletedSalon})
 }catch(error){
    return  NextResponse.json( {'ERROR in Salon: ' : error})
 }
}