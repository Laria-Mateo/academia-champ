import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Academia Champ - Deportes de Contacto | Paraná, Entre Ríos',
  description: 'Academia de artes marciales en Paraná, Entre Ríos. Boxeo, Jiu Jitsu, Muay Thai, Kick Boxing y Funcional. Entrenamiento profesional con instructores certificados. Ubicados en Olleros 837, Paraná.',
  keywords: [
    'academia champ',
    'artes marciales paraná',
    'boxeo paraná',
    'jiu jitsu paraná',
    'muay thai paraná',
    'kick boxing paraná',
    'funcional paraná',
    'deportes de contacto entre ríos',
    'entrenamiento artes marciales',
    'gimnasio paraná',
    'academia de boxeo',
    'clases de jiu jitsu',
    'entrenamiento muay thai',
    'kickboxing entre ríos',
    'funcional training paraná',
    'instructores artes marciales',
    'cinturón negro taekwondo',
    'defensa personal paraná',
    'fitness entre ríos',
    'deportes de contacto argentina'
  ],
  authors: [{ name: 'Academia Champ' }],
  creator: 'Academia Champ',
  publisher: 'Academia Champ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://academiachamp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Academia Champ - Deportes de Contacto | Paraná, Entre Ríos',
    description: 'Academia de artes marciales en Paraná, Entre Ríos. Boxeo, Jiu Jitsu, Muay Thai, Kick Boxing y Funcional. Entrenamiento profesional con instructores certificados.',
    url: 'https://academiachamp.com',
    siteName: 'Academia Champ',
    images: [
      {
        url: '/logoAcademiaChamp.png',
        width: 800,
        height: 600,
        alt: 'Academia Champ - Logo',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Champ - Deportes de Contacto | Paraná, Entre Ríos',
    description: 'Academia de artes marciales en Paraná, Entre Ríos. Boxeo, Jiu Jitsu, Muay Thai, Kick Boxing y Funcional.',
    images: ['/logoAcademiaChamp.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui',
  },
  category: 'sports',
  classification: 'Martial Arts Academy',
  other: {
    'geo.region': 'AR-E',
    'geo.placename': 'Paraná, Entre Ríos, Argentina',
    'geo.position': '-31.754902696232666;-60.50693455836299',
    'ICBM': '-31.754902696232666, -60.50693455836299',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/logoAcademiaChamp.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logoAcademiaChamp.png" />
        <link rel="shortcut icon" href="/logoAcademiaChamp.png" type="image/png" />
        <meta name="theme-color" content="#1dec1c" />
        <meta name="msapplication-TileColor" content="#1dec1c" />
        <meta name="msapplication-TileImage" content="/logoAcademiaChamp.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
