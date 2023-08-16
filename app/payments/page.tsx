"use client"
import classes from "@/styles/pages/paymentspage.module.css"
import getStripe from '@/utils/getStripe';
import { useSearchParams } from "next/navigation";

const page =  ({ params }: { params: { user : string } }) => {
  const searchParams = useSearchParams();
  const user = searchParams.get('user');
  const handleStripe = async (choice : number) => {
    try {
      //console.log(user)
      let StripeData = {
        choice, user
      }
  
      const stripe = await getStripe();
      
      const response = await fetch("/api/stripe", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(StripeData)
      });
  
      const data = await response.json();
      /** TO DO : ADD REDIRECT STATE && message  */
  
      stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  return <div className={classes.payments__container}>
        <div className={classes.freeTrial}>
          <div className="info">
              <h1>Mon Salon Connect</h1>
              <h3>7 Jours D&apos;Essaie</h3>
              <h5>Gratuit</h5>
          </div>
          <div className="descr__payment">
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque beatae impedit at sapiente corrupti quibusdam.
            </div>
            <div className="pay">
              <button> GO ! </button>
            </div>
          </div>
              
        </div>
        <div className={classes.three_months}>
          <div className="info">
              <h1>Mon Salon Connect</h1>
              <h3>Abonnement 3 Mois</h3>
              <h5> 25 €</h5>
          </div>
          <div className="descr__payment">
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque beatae impedit at sapiente corrupti quibusdam.
            </div>
            <div className="pay">
             <button onClick={()=>handleStripe(25)}> GO ! </button>
            </div>
          </div>
              
        </div>
        <div className={classes.freeTrial}>
          <div className="info">
              <h1>Mon Salon Connect</h1>
              <h3>Abonnement 1 Mois</h3>
              <h5>10 €</h5>
          </div>
          <div className="descr__payment">
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque beatae impedit at sapiente corrupti quibusdam.
            </div>
            <div className="pay">
            <button onClick={()=>handleStripe(10)}> GO ! </button>
            </div>
          </div>
              
        </div>
  </div>
   
}

export default page