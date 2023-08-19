import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const password = process.env.EMAIL__PASS
//console.log(password)
// POST method
export async function POST(req: Request) {
  try {
    const {client , salon , date , artist , haircut } = await req.json();
   // console.log(client,artist,date,artist,haircut)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail', // use 'gmail' or any other service you prefer
      auth: {
        user: 'monsalonconnect@gmail.com', // replace with your email
        pass: password // replace with your password
      }
    });

    // setup email data
    let mailOptions = {
      from: '"Mon Salon Connect" <monsalonconnect@gmail.com>', // sender address
      to: client, // list of receivers
      subject: `Confirmation de rendez-vous au salon ${salon}`, // Subject line
      text: `Cher ${client},\n\nVotre rendez-vous au ${salon} le ${date} avec ${artist} pour la coupe ${haircut} a été confirmé.\n\nCordialement,\n Mon Salon Connect`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error: any, info: { messageId: any; }) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message envoyé: %s', info.messageId);
    });

    return  NextResponse.json({message : 'email sent'});
  } catch (error) {
    console.error(error);
    return  NextResponse.json({error});
  }
}
