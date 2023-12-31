import './globals.css'

import Navbar from '@/Components/UI/Navbar'
import Footer from '@/Components/UI/Footer'
import { ToastContainer } from 'react-toastify'
import { Providers } from '@/redux/Provider'
import { Analytics } from '@vercel/analytics/react';
import '@smastrom/react-rating/style.css' 
import Announcement from '@/Components/UI/Announcement'

type Metadata = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  viewport: string;
  charset: string;
  robots: string;
  'og:title': string;
  'og:description': string;
  'og:image': string;
  'og:url': string;
  'og:type': string;
};

export const metadata: Metadata = {
  title: 'Mon Salon Connect - Votre Portail de Beauté et de Coiffure',
  description: 'Mon Salon Connect est une plateforme innovante conçue pour les salons de coiffure et leurs clients. Les salons peuvent facilement publier leurs informations, ajouter des artistes et des coupes de cheveux, et bien plus encore. Les clients ont la liberté de choisir leurs artistes préférés et les coupes de cheveux qu\'ils souhaitent. Rejoignez notre communauté et découvrez une nouvelle façon de gérer votre salon de coiffure.',
  keywords: 'salon, coiffure, réservation en ligne, beauté, style, tendances capillaires, stylistes professionnels, soins capillaires, transformations de style',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  robots: 'index, follow',
  'og:title': 'Mon Salon Connect - Votre Portail de Beauté et de Coiffure',
  'og:description': 'Mon Salon Connect est une plateforme innovante conçue pour les salons de coiffure et leurs clients. Les salons peuvent facilement publier leurs informations, ajouter des artistes et des coupes de cheveux, et bien plus encore. Les clients ont la liberté de choisir leurs artistes préférés et les coupes de cheveux qu\'ils souhaitent. Rejoignez notre communauté et découvrez une nouvelle façon de gérer votre salon de coiffure.',
  'og:image': 'https://monsalonconnect.com/logo1.png',
  'og:url': 'https://monsalonconnect.com',
  'og:type': 'website',
  author: 'monSalonConnect'
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return <>
    <html lang="en">
      <body>
        <Providers>
        <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
        />
       
        
        <Announcement text='Décrochez -25% sur votre abonnement mensuel !' lien='/create-account' />
        {/**@ts-ignore */}
        <Navbar />
        {children}
        <Footer />
        </Providers>
        <Analytics />
        </body>
    </html>
    </>
}
