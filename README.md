# Academia Champ - Deportes de Contacto

Sitio web oficial de Academia Champ, academia de artes marciales ubicada en Paraná, Entre Ríos, Argentina.

## 🥋 Disciplinas

- **Boxeo Recreativo**
- **Jiu Jitsu / Grappling**
- **Muay Thai / Kick Boxing**
- **Funcional**

## 🚀 Tecnologías

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Lucide React** - Iconos
- **Radix UI** - Componentes accesibles

## 📍 Ubicación

**Entre Ríos. Int. Olleros 837, Paraná, Entre Ríos**

## 📞 Contacto

- **WhatsApp**: +54 9 343 698 7971
- **Instagram**: [@academiachamp](https://www.instagram.com/academiachamp/)
- **Facebook**: [Academia Champ](https://www.facebook.com/profile.php?id=100084218615664)

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌐 Deploy en Vercel

### Opción 1: Deploy Automático con GitHub

1. **Subir a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/academia-champ.git
   git push -u origin main
   ```

2. **Conectar con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio `academia-champ`
   - Vercel detectará automáticamente que es un proyecto Next.js
   - El deploy se hará automáticamente en cada push

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para producción
vercel --prod
```

## 📱 Características

- ✅ **Responsive Design** - Optimizado para móviles y desktop
- ✅ **SEO Optimizado** - Metadatos completos para Google
- ✅ **PWA Ready** - Manifest y service workers
- ✅ **Accesibilidad** - Componentes ARIA compliant
- ✅ **Performance** - Optimizado con Next.js
- ✅ **Geolocalización** - Coordenadas exactas en Google Maps

## 🎨 Diseño

- **Colores principales**: Verde (#1dec1c) y Negro/Zinc
- **Tipografía**: Inter (Google Fonts)
- **Estilo**: Moderno y deportivo
- **Animaciones**: Suaves y profesionales

## 📊 SEO

El sitio está optimizado para búsquedas locales en Paraná y Entre Ríos con:

- Metadatos completos
- Sitemap.xml automático
- Robots.txt configurado
- Open Graph para redes sociales
- Geolocalización precisa

## 🔧 Configuración

### Variables de Entorno

```env
# Google Maps API Key (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu-api-key
```

### Dominio Personalizado

1. En Vercel Dashboard, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

## 📈 Analytics

Para agregar Google Analytics:

1. Crea una cuenta en Google Analytics
2. Obtén el ID de seguimiento
3. Agrega el script en `app/layout.tsx`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Academia Champ.

---

**Academia Champ** - Formando campeones dentro y fuera del tatami 🥋
