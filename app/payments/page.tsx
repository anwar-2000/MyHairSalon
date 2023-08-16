import React from 'react'
import classes from "@/styles/pages/paymentspage.module.css"


const page = () => {
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
              <button> GO ! </button>
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
              <button> GO ! </button>
            </div>
          </div>
              
        </div>
  </div>
   
}

export default page