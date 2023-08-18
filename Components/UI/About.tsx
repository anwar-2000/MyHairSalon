"use client"
import classes from "@/styles/about.module.css"
import { useState } from "react"
interface Props {}

const About = () => {
  const [user, setUser] = useState("")
  return <div className={classes.about__container}>
        <h1>À propos de nous :</h1>
        <p>
        Nous sommes nés de la passion pour la coiffure et du désir de fusionner l&apos;élégance intemporelle avec la technologie moderne. Notre plateforme est un hommage aux artisans capillaires qui transforment chaque séance en une symphonie visuelle. Nous croyons en la célébration de l&apos;unicité de chaque salon, en mettant en avant non seulement les coupes et les styles, mais aussi les artistes qui les créent.
        </p>
        <div className={classes.buttons}>
              <button onClick={()=>setUser("salon")}>J&apos;ai Mon Salon</button>
              <button onClick={()=>setUser("client")}>Je suis Un Client</button>
        </div>
        { user ==="salon" && <p className={classes.text}>Notre espace en ligne offre une vitrine où chaque salon peut peindre sa propre histoire. Des images captivantes aux détails exquis de chaque coupe, nos fonctionnalités de personnalisation vous permettent de partager l'essence même de votre salon avec le monde. Présentez vos artistes, leurs talents exceptionnels et les créations qui font battre le cœur de votre établissement. Mettez en lumière vos tarifs avec une clarté cristalline et donnez aux visiteurs la possibilité de réserver des moments de transformation.</p>}
        {user ==="client" && <p className={classes.text}>Aux amoureux de la beauté capillaire qui cherchent à exprimer leur style unique, nous offrons une passerelle pour réserver des moments magiques. Connectez-vous avec les salons de votre choix, explorez les créations à couper le souffle et choisissez la date et l'heure qui cadrent parfaitement avec votre emploi du temps. Laissez nos fonctionnalités conviviales transformer vos rêves capillaires en réalité.</p>}
  </div>
}

export default About