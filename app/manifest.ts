import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Academia Champ - Deportes de Contacto',
    short_name: 'Academia Champ',
    description: 'Academia de artes marciales en Paraná, Entre Ríos. Boxeo, Jiu Jitsu, Muay Thai, Kick Boxing y Funcional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#18181b',
    theme_color: '#1dec1c',
                                                                                   icons: [
                    {
                      src: '/images/logoAcademiaChamp.png',
                      sizes: 'any',
                      type: 'image/png',
                    },
                  ],
  }
}
