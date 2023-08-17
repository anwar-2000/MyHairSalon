import { createMongoConnection } from "@/database/Conn";
import AppointmentModel from "@/models/AppointmentModel";
import { NextResponse } from "next/server";

// POST method
export async function POST(req: Request) {
    createMongoConnection()
    try {
      const body = await req.json();
      console.log(body)
      const newAppointments = await AppointmentModel.create(body);
      return  NextResponse.json({'Appointment CREATED ' : newAppointments});
    } catch (error) {
      console.error(error);
      return  NextResponse.json({error});
    }
  }

  export async function GET(req: Request) {
    createMongoConnection()
    const { searchParams } = new URL(req.url)
    const salon = searchParams.get('salon')
    try {
      //console.log(salon)
      const newAppointments = await AppointmentModel.find({salon : salon});
      return  NextResponse.json(newAppointments);
    } catch (error) {
      console.error(error);
      return  NextResponse.json({error});
    }
  }
  