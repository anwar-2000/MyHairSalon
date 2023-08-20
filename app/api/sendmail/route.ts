import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const password = process.env.EMAIL__PASS
//console.log(password)
// POST method
export async function POST(req: Request) {
  try {
    const {client , salon , date , artist , haircut , lien , owner} = await req.json();
    console.log(client,artist,date,artist,haircut)
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
      to: owner, // list of receivers
      subject: `RDV au votre ${salon} pour le ${date} `, // Subject line
      html: `
      <p>
        <a href="https://monsalonconnect.com/salons/${salon}">
          <img src=${lien} alt='${salon} image ' width="300" height="250">
        </a>
      </p>
      <p>
        Cher <span style="font-weight: bold; color : black; background-color: white>${client}</span>,<br><br>
        Votre rendez-vous au ${salon} le <span style="font-weight: bold; color : black; background-color: white>${date}</span> avec ${artist} pour la coupe <span style="font-weight: bold; color : black; background-color: white>${haircut}</span> a été confirmé.<br><br>
        Cordialement,<br>
        <a href="https://monsalonconnect.com">
          <img src="https://monsalonconnect.com/logo.png" alt='Mon Salon Connect' image ' width="300" height="250">
        </a>
        <a href="https://monsalonconnect.com">https://monsalonconnect.com</a>
      </p>
    `    };

    let mailOptions2 = {
      from: '"Mon Salon Connect" <monsalonconnect@gmail.com>', // sender address
      to: owner, // list of receivers
      subject: `Rendez-vous au votre salon :  ${salon}`, // Subject line
      html: `
      <p>
      <a href="https://monsalonconnect.com/salons/${salon}">
        <img src=${lien} alt='${salon} image ' width="300" height="250">
      </a>
    </p>
    <p>
      Cher <span style="font-weight: bold; color : black; background-color: white">${owner}</span>,<br><br>
      Vous avez un rendez-vous avec le client ${client} au votre salon : ${salon} -- le ${date}. Le(a) coiffeurs (euse) ${artist} réalisera la coupe ${haircut} choisie.<br><br>
      Cordialement,<br>
      <a href="https://monsalonconnect.com">
        <img src="https://monsalonconnect.com/logo.png" alt='${salon} image ' width="250" height="150">
      </a>
      <a href="https://monsalonconnect.com">https://monsalonconnect.com</a>
    </p>    
    `    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error: any, info: { messageId: any; }) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message envoyé: %s', info.messageId);
    });

    return  NextResponse.json({message : 'Message envoyé'});
  } catch (error) {
    console.error(error);
    return  NextResponse.json({error});
  }
}
