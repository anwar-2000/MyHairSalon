import { headers } from 'next/headers'
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = require('stripe')(process.env.STRIPE_SECRET);


export async function POST(req: Request)  {
  try {
    const header = headers()
    const origin = header.get('origin')
    //console.log(origin)

    const { user , choice } = await req.json();

    //console.log(user,choice)

    let productId = "price_1NfjrVHzQpZmJSD9Wx5r8F1z"
    if(choice === 10) {productId = "price_1NfjqLHzQpZmJSD99DtfuONS"}
  
    const lineitems =  [
      {
        price: productId, 
        quantity: 1,
      },
    ]
    const params: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      payment_method_types: ['card','paypal'],
      line_items: lineitems,
      success_url: `${origin}/success?user=${user}`,
      cancel_url: `${origin}/canceled`,
    };

    const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session);
  } catch (err) {
    const error = err as Error;
    console.log({ error: error.message });
  }
}
