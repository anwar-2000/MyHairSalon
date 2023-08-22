import { createMongoConnection } from '@/database/Conn';
import Reviews from '@/models/Reviews';

import { NextResponse } from "next/server";


// GET method
export async function GET(req: Request , res : Response) {
  createMongoConnection()
  try {
    const {searchParams} = new URL(req.url);
    const salonName = searchParams.get("salon");
    let reviews = null;

    if(salonName) {
      reviews = await Reviews.find({ salon: salonName });
   
    if (!reviews) {
      return NextResponse.json({ message: "Salon Not Found" });
    }
    //console.log("SERVER",salons)
    console.log("IS JSON *************** ",JSON.stringify(reviews))
      
    return  NextResponse.json(reviews);}
  } catch (error) {
    console.error(error);
    NextResponse.json({ error });
  }
}

// POST method
export async function POST(req: Request) {
  createMongoConnection()
  try {
    const body = await req.json();
    const newReview = await Reviews.create(body);
    return  NextResponse.json({'Salon CREATED ' : newReview});
  } catch (error) {
    console.error(error);
    return  NextResponse.json({error});
  }
}



// DELETE method
export async function DELETE(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const reviewId = searchParams.get("reviewId");

     const deletedReview = await Reviews.findByIdAndDelete({_id : reviewId});

     if(!deletedReview){
             return  NextResponse.json({error : `error deleting Review `})
     }
     return  NextResponse.json({'Salon Deleted' : deletedReview})
 }catch(error){
    return  NextResponse.json( {'ERROR in Salon: ' : error})
 }
}
