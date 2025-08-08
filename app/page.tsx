'use client'

import { useState, useEffect } from 'react'
import { Phone, MapPin, Instagram, Facebook, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import { DisciplinasHorariosCarousel } from "@/components/disciplinasHorariosCarousel"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from 'next/image'

const profesores = [
  {
    nombre: "Carlos Martínez",
    disciplina: "Taekwondo",
    descripcion: "Cinturón negro 4° Dan. Hace más de 15 años que enseña y forma campeones. Especialista en técnicas tradicionales.",
    imagen: "/images/taekwondo-instructor.png"
  },
  {
    nombre: "Ana Rodriguez",
    disciplina: "Muay Thai / Kick Boxing",
    descripcion: "Campeona nacional de Muay Thai. Hace 10 años que entrena y enseña el arte de las ocho extremidades.",
    imagen: "/images/female-muay-thai-instructor.png"
  },
  {
    nombre: "Miguel Santos",
    disciplina: "Jiu Jitsu",
    descripcion: "Cinturón morado de Jiu Jitsu. Especialista en técnicas de suelo y te va a enseñar a defenderte de verdad.",
    imagen: "/images/jiu-jitsu-instructor.png"
  },
  {
    nombre: "Ema",
    disciplina: "Funcional",
    descripcion: "Instructora certificada en entrenamiento funcional. Te va a ayudar a mejorar tu condición física de manera integral.",
    imagen: "/images/profeEma.webp"
  }
]

export default function AcademiaChamp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const sectionMap: { [key: string]: string } = {
      'home': 'home',
      'quienes-somos': 'quienes-somos',
      'profesores': 'profesores',
      'disciplinas-y-horarios': 'disciplinas',
      'ubicacion': 'ubicacion'
    }
    
    const targetId = sectionMap[sectionId] || sectionId
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-x-hidden">
      <header 
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          isScrolled 
            ? 'bg-zinc-900/30 backdrop-blur-sm border-zinc-700/50' 
            : 'bg-zinc-900/95 backdrop-blur-sm border-zinc-700'
        } ${
          isHovered ? 'bg-zinc-900/95 backdrop-blur-sm border-zinc-700' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-20 h-16 bg-black rounded-lg flex items-center justify-center border-2 border-[#1dec1c] shadow-lg overflow-hidden">
                <Image
                  src="/images/logoAcademiaChamp.png"
                  alt="Academia Champ Logo"
                  width={80}
                  height={64}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            <nav className="hidden lg:flex space-x-4 xl:space-x-6">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Quiénes Somos', id: 'quienes-somos' },
                { name: 'Profesores', id: 'profesores' },
                { name: 'Disciplinas y Horarios', id: 'disciplinas-y-horarios' },
                { name: 'Ubicación', id: 'ubicacion' }
              ].map((item, index) => (
                <button 
                  key={index}
                  onClick={() => scrollToSection(item.id)} 
                  className="relative text-zinc-300 hover:text-[#1dec1c] transition-colors duration-300 font-semibold tracking-wide uppercase text-xs lg:text-sm whitespace-nowrap group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1dec1c] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            <button 
              className="lg:hidden text-[#1dec1c] p-2 rounded-lg bg-zinc-800 border border-zinc-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 bg-zinc-800 rounded-lg border border-zinc-700">
              <nav className="flex flex-col space-y-1 p-4">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Quiénes Somos', id: 'quienes-somos' },
                  { name: 'Profesores', id: 'profesores' },
                  { name: 'Disciplinas y Horarios', id: 'disciplinas-y-horarios' },
                  { name: 'Ubicación', id: 'ubicacion' }
                ].map((item, index) => (
                  <button 
                    key={index}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left py-3 px-4 text-zinc-300 hover:text-[#1dec1c] hover:bg-zinc-700 rounded-lg transition-all duration-300 font-semibold uppercase text-sm tracking-wide"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="min-h-screen relative flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/modern-martial-arts-gym.png"
            alt="Academia Champ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl border border-white/30">
            <div className="mb-6">
              <div className="bg-black rounded-lg p-4 border-2 border-[#1dec1c] shadow-lg inline-block">
                <Image
                  src="/logoAcademiaChamp.png"
                  alt="Academia Champ"
                  width={300}
                  height={150}
                  className="w-auto h-auto max-w-xs md:max-w-sm mx-auto object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-wide">
              FORJA TU FUERZA INTERIOR
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
              Boxeo • Jiu Jitsu • Muay Thai • Kick Boxing • Funcional
            </p>
            
            <Button 
              onClick={() => scrollToSection('disciplinas')} 
              className="bg-[#1dec1c] hover:bg-[#17c018] text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
            >
              Ver Disciplinas
            </Button>
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="py-20 pt-32 relative bg-zinc-900 overflow-x-hidden" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '16px 16px'
      }}>
        <div className="container mx-auto px-6 relative overflow-x-hidden">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
              Quiénes <span className="text-[#1dec1c]">Somos</span>
            </h2>
            <div className="w-24 h-1 bg-[#1dec1c] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                <span className="text-[#1dec1c] font-bold">ACADEMIA CHAMP</span> no es solo un gimnasio, 
                es tu segundo hogar donde vas a encontrar tu mejor versión.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                Hace más de 10 años que formamos no solo atletas, sino personas de bien, 
                enseñando <span className="text-[#1dec1c] font-bold">DISCIPLINA</span>, 
                <span className="text-[#1dec1c] font-bold">RESPETO</span> y  
                <span className="text-[#1dec1c] font-bold"> PERSEVERANCIA</span>.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                Tenemos todo el equipamiento que necesitás y un ambiente copado para que 
                te superes día a día, sin importar tu nivel o edad.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/quienesSomos.webp"
                alt="Interior de Academia Champ"
                width={600}
                height={400}
                className="rounded-none shadow-2xl border-4 border-zinc-700"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-center mb-12 uppercase tracking-wide">
              Nuestro <span className="text-[#1dec1c]">Espacio</span>
            </h3>
            <Carousel className="md:hidden">
              {[
                {
                  title: "Área de Entrenamiento",
                  description: "Tatamis profesionales y espacio amplio para todas las disciplinas",
                  image: "/martial-arts-training.png"
                },
                {
                  title: "Ring de Boxeo",
                  description: "Ring profesional para entrenamientos y sparring especializado",
                  image: "/boxing-ring-gym.png"
                },
                {
                  title: "Preparación Física",
                  description: "Equipamiento completo para fortalecimiento y acondicionamiento",
                  image: "/gym-equipment-weights.png"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-zinc-800 border-2 border-zinc-700 hover:border-[#1dec1c] transition-all duration-300 group rounded-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="transition-transform duration-300 group-hover:scale-105 rounded-none"
                      />
                    </div>
                    <h4 className="text-xl font-black text-[#1dec1c] mb-3 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed font-medium">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Área de Entrenamiento",
                  description: "Tatamis profesionales y espacio amplio para todas las disciplinas",
                  image: "/martial-arts-training.png"
                },
                {
                  title: "Ring de Boxeo",
                  description: "Ring profesional para entrenamientos y sparring especializado",
                  image: "/boxing-ring-gym.png"
                },
                {
                  title: "Preparación Física",
                  description: "Equipamiento completo para fortalecimiento y acondicionamiento",
                  image: "/gym-equipment-weights.png"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-zinc-800 border-2 border-zinc-700 hover:border-[#1dec1c] transition-all duration-300 group rounded-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="transition-transform duration-300 group-hover:scale-105 rounded-none"
                      />
                    </div>
                    <h4 className="text-xl font-black text-[#1dec1c] mb-3 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed font-medium">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profesores" className="py-20 pt-32 bg-zinc-800 overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
              Nuestros <span className="text-[#1dec1c]">Maestros</span>
            </h2>
            <div className="w-24 h-1 bg-[#1dec1c] mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
              Expertos dedicados que combinan técnica, experiencia y pasión por la enseñanza
            </p>
          </div>
          
          <Carousel className="md:hidden">
            {profesores.map((profesor, index) => (
              <Card key={index} className="bg-zinc-900 border-2 border-zinc-700 hover:border-[#1dec1c] transition-all duration-300 group hover:transform hover:scale-105 rounded-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6 w-32 h-32 mx-auto">
                    <Image
                      src={profesor.imagen || "/placeholder.svg"}
                      alt={profesor.nombre}
                      fill
                      className="rounded-full border-4 border-zinc-600 group-hover:border-[#1dec1c] transition-colors duration-300 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-black text-[#1dec1c] mb-2 uppercase tracking-wide">{profesor.nombre}</h3>
                  <p className="text-lg font-bold text-zinc-300 mb-4 uppercase text-sm tracking-widest">{profesor.disciplina}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">{profesor.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </Carousel>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profesores.map((profesor, index) => (
              <Card key={index} className="bg-zinc-900 border-2 border-zinc-700 hover:border-[#1dec1c] transition-all duration-300 group hover:transform hover:scale-105 rounded-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6 w-32 h-32 mx-auto">
                    <Image
                      src={profesor.imagen || "/placeholder.svg"}
                      alt={profesor.nombre}
                      fill
                      className="rounded-full border-4 border-zinc-600 group-hover:border-[#1dec1c] transition-colors duration-300 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-black text-[#1dec1c] mb-2 uppercase tracking-wide">{profesor.nombre}</h3>
                  <p className="text-lg font-bold text-zinc-300 mb-4 uppercase text-sm tracking-widest">{profesor.disciplina}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">{profesor.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="disciplinas" className="py-20 pt-32 relative bg-zinc-900 overflow-x-hidden" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '16px 16px'
      }}>
        <div className="container mx-auto px-6 relative overflow-x-hidden">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
              Nuestras <span className="text-[#1dec1c]">Disciplinas</span>
            </h2>
            <div className="w-24 h-1 bg-[#1dec1c] mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium">
              Cuatro caminos hacia la excelencia física y mental, cada uno con su propia filosofía y técnica
            </p>
          </div>
          
          <DisciplinasHorariosCarousel className="md:hidden mb-16" isMobile={true} />
          
          <div className="hidden md:block">
            <DisciplinasHorariosCarousel className="mb-16" isMobile={false} />
          </div>
        </div>
      </section>

      <section id="ubicacion" className="py-20 pt-32 bg-zinc-800 overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
              Nuestra <span className="text-[#1dec1c]">Ubicación</span>
            </h2>
            <div className="w-24 h-1 bg-[#1dec1c] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-zinc-900 rounded-none border-l-4 border-[#1dec1c]">
                <MapPin className="text-[#1dec1c] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-lg font-bold mb-1">Entre Ríos. Int. Olleros 837</p>
                  <p className="text-lg text-zinc-400">Paraná, Entre Ríos 3100</p>
                </div>
              </div>
              
              <p className="text-zinc-400 leading-relaxed font-medium">
                Estratégicamente ubicados en el corazón de Paraná, nuestras instalaciones 
                modernas ofrecen el ambiente perfecto para tu desarrollo atlético y personal.
              </p>
              
              <div className="flex items-center space-x-4 p-4 bg-zinc-900 rounded-none">
                <Phone className="text-[#1dec1c]" size={20} />
                <span className="text-lg font-bold">+54 9 343 698 7971</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-zinc-900 rounded-none p-4 border-2 border-zinc-700 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.7!2d-60.50693455836299!3d-31.754902696232666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9c4b1234567%3A0x1234567890abcdef!2sOlleros%20837%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1234567890123"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-none"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t-4 border-[#1dec1c] bg-zinc-900 overflow-x-hidden" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '16px 16px'
      }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center border-2 border-[#1dec1c] shadow-lg overflow-hidden">
                  <Image
                    src="/images/logoAcademiaChamp.png"
                    alt="Academia Champ Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1dec1c] tracking-wide">
                    ACADEMIA CHAMP
                  </h3>
                  <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest">Deportes de Contacto</p>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed font-medium">
                Formando campeones dentro y fuera del tatami. 
                Hace más de 10 años que nos dedicamos a las artes marciales.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-black text-[#1dec1c] mb-6 uppercase tracking-wide">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-zinc-800 border-l-4 border-[#1dec1c]">
                  <Phone size={18} className="text-[#1dec1c]" />
                  <span className="text-zinc-300 font-bold">+54 9 343 698 7971</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-zinc-800 border-l-4 border-[#1dec1c]">
                  <MapPin size={18} className="text-[#1dec1c] mt-0.5" />
                  <span className="text-zinc-300 font-bold">Entre Ríos. Int. Olleros 837<br />Paraná, Entre Ríos</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-black text-[#1dec1c] mb-6 uppercase tracking-wide">Síguenos</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/academiachamp/" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100084218615664" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-[#1dec1c] hover:bg-[#1dec1c] hover:text-black hover:border-[#1dec1c] transition-all duration-300 transform hover:scale-110 rounded-none"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-zinc-700 pt-8 text-center">
            <p className="text-zinc-500 font-bold uppercase tracking-wide">
              © {new Date().getFullYear()} Academia Champ. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton 
        phoneNumber="5493436987971"
        message="Hola! Me interesa conocer más sobre Academia Champ y sus disciplinas. ¿Podrían darme más información?"
      />
    </div>
  )
}
