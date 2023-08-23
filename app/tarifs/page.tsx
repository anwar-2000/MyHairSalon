"use client"
import classes from "@/styles/pages/paymentspage.module.css"


const page =  () => {
    
  return <div className={classes.payments__container}>
        <div className={classes.freeTrial}>
          <div className="info">
              <h1>Mon Salon Connect</h1>
              <h3>7 Jours D&apos;Essaie</h3>
              <h5>Gratuit</h5>
          </div>
          <div className="descr__payment">
            <div className="desc">
            Vous n&apos;êtes pas encore sûr ? Pas de problème ! Profitez de notre essai gratuit de 7 jours pour découvrir toutes les fonctionnalités incroyables que nous offrons. C&apos;est l&apos;occasion idéale pour vous familiariser avec notre plateforme et voir comment elle peut transformer votre salon de coiffure. N&apos;oubliez pas, c&apos;est totalement gratuit et sans engagement !
            </div>
          </div>
              
        </div>
        <div className={classes.three_months}>
          <div className="info">
              <h1>Mon Salon Connect</h1>
              <h3>Abonnement 3 Mois</h3>
              <h5> 45.99 €</h5>
          </div>
          <div className="descr__payment">
            <div className="desc">
            Vous êtes convaincu et prêt à vous engager ? Notre abonnement de trois mois est fait pour vous ! Non seulement vous bénéficierez de tous les avantages de notre plateforme, mais vous économiserez également en vous abonnant pour une période plus longue. C&apos;est le choix parfait pour ceux qui sont prêts à transformer leur salon de coiffure et à offrir à leurs clients une expérience exceptionnelle
            </div>
          </div>
              
        </div>
        <div className={classes.freeTrial}>
          <div className="info">
              <h1>Mon Salon Connect</h1>
              <h3>Abonnement 1 Mois</h3>
              <h5>15.99 €</h5>
          </div>
          <div className="descr__payment">
            <div className="desc">
            Prêt à passer au niveau supérieur ? Notre abonnement d&apos;un mois est parfait pour ceux qui veulent faire l&apos;expérience de tous les avantages de notre plateforme sur une période plus longue. Avec cet abonnement, vous aurez un accès complet à toutes nos fonctionnalités et bénéficierez d&apos;un soutien continu de notre équipe. C&apos;est le choix idéal pour ceux qui veulent améliorer leur salon de coiffure sans engagement à long terme.
            </div>
          </div>
              
        </div>
  </div>
   
}

export default page