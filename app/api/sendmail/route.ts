import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      client,
      salon,
      date,
      artist,
      haircut,
      lien,
      owner
    } = await req.json();

    const password = process.env.EMAIL__PASS;
    const senderEmail = "monsalonconnect@gmail.com";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: password
      }
    });

    const sendEmail = (mailOptions : any) => {
      return new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            console.log(`${mailOptions.to} email sent: %s`, info.messageId);
            resolve();
          }
        });
      });
    };

    const clientMailOptions = {
      from: `"Mon Salon Connect" <${senderEmail}>`,
      to: client,
      subject: `RDV au ${salon} pour le ${date}`,
      html: `
      <div style="display : flex; align-items : center; justify-content : center; flex-direction:column;text-align:center">
      <p>
        <a href="https://monsalonconnect.com/salons/${salon}">
          <img src=${lien} alt='${salon} image ' width="300" height="250">
        </a>
      </p>
      <p>
        Cher <span style="font-weight: bold; color : black; background-color: white">${client}</span>,<br><br>
        Votre rendez-vous au ${salon} le <span style="font-weight: bold; color : black; background-color: white">${date}</span> avec ${artist} pour la coupe <span style="font-weight: bold">${haircut}</span> a été confirmé.<br><br>
        Cordialement,<br>
        <p>Mon Salon Connect</p>
        <a href="https://monsalonconnect.com">https://monsalonconnect.com</a>
      </p>
      
      </div>
      `
    };

    const ownerMailOptions = {
      from: `"Mon Salon Connect" <${senderEmail}>`,
      to: owner,
      subject: `Rendez-vous au votre salon : ${salon}`,
      html: `
      <div style="display : flex; align-items : center; justify-content : center; flex-direction:column;gap:0.6rem;text-align:center">
      <p>
      <a href="https://monsalonconnect.com/salons/${salon}">
        <img src=${lien} alt='${salon} image' width="300" height="250">
      </a>
    </p>
    <p>
      Cher <span style="font-weight: bold; color : black; background-color: white">${owner}</span>,<br><br>
      Vous avez un rendez-vous avec le client ${client} au votre salon : ${salon} -- le ${date}. Le(a) coiffeurs (euse) ${artist} réalisera la coupe ${haircut} choisie.<br><br>
      Cordialement,<br>
      <p>Mon Salon Connect</p>
      <a href="https://monsalonconnect.com">https://monsalonconnect.com</a>
    </p> 
    </div>   
      `
    };

    await Promise.all([
      sendEmail(clientMailOptions),
      sendEmail(ownerMailOptions)
    ]);

    return NextResponse.json({ message: 'emails sent to both' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
