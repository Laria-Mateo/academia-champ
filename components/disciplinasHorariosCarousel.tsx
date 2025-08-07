'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import horarios from '@/data/horarios.json'

interface DisciplinasHorariosCarouselProps {
  className?: string
  isMobile?: boolean
}

export function DisciplinasHorariosCarousel({ className = '', isMobile = true }: DisciplinasHorariosCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const disciplinas = [
    {
      name: "Boxeo Recreativo",
      description: "El noble arte del boxeo. Desarrollá velocidad, precisión y fortaleza mental de forma recreativa",
      image: "./boxeoGuante.webp"
    },
    {
      name: "Jiu Jitsu / Grappling",
      description: "Aprendé técnicas de suelo, sumisiones y estrategia de combate. Ideal para desarrollar fuerza mental y física",
      image: "./jiu-jitsu-ground-fighting.png"
    },
    {
      name: "Muay Thai / Kick Boxing",
      description: "El arte de las ocho extremidades. Mejorá tu resistencia, potencia y técnica con patadas y puños",
      image: "./kickboxing.webp"
    },
    {
      name: "Funcional",
      description: "Entrenamiento completo que mejora tu condición física, fuerza y resistencia de manera integral",
      image: "./gym-equipment-weights.png"
    }
  ]

  const goToSlide = (index: number) => {
    if (containerRef.current) {
      const slideWidth = containerRef.current.offsetWidth
      containerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const slideWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / slideWidth)
      setCurrentIndex(newIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const renderHorarios = (disciplina: string) => {
    const horariosDisciplina = horarios[disciplina as keyof typeof horarios]
    if (!horariosDisciplina) return null

    const horariosPorDia: { [key: string]: string[] } = {};
    horariosDisciplina.forEach((horario: any) => {
      if (!horariosPorDia[horario.dia]) {
        horariosPorDia[horario.dia] = [];
      }
      horariosPorDia[horario.dia].push(horario.hora);
    });

    const diasOrden = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const diasOrdenados = Object.keys(horariosPorDia).sort((a, b) => 
      diasOrden.indexOf(a) - diasOrden.indexOf(b)
    );

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
        {diasOrdenados.map((dia, idx) => {
          const horas = horariosPorDia[dia];
          return (
            <div key={idx} className="bg-zinc-800 border-l-4 border-[#1dec1c] p-3 min-w-0">
              <div className="font-bold text-zinc-300 uppercase tracking-wide text-sm mb-2 text-center break-words">{dia}</div>
              <div className="space-y-2">
                {horas.map((hora, horaIdx) => (
                  <div key={horaIdx} className="text-[#1dec1c] font-bold text-sm text-center break-words">
                    {hora}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`relative ${className}`}>
      {isMobile ? (
        <>
          <div className="relative">
            <div
              ref={containerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {disciplinas.map((disciplina, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-start"
                  style={{ minWidth: '100%' }}
                >
                  <Card className="bg-zinc-900 transition-all duration-300 group hover:transform hover:scale-105 rounded-none shadow-lg h-full" style={{ overflow: 'hidden' }}>
                    <CardContent className="p-4 text-center h-full flex flex-col">
                      <div className="relative mb-6 overflow-hidden w-48 h-48 mx-auto">
                        <Image
                          src={disciplina.image || "/placeholder.svg"}
                          alt={disciplina.name}
                          fill
                          className="transition-transform duration-300 group-hover:scale-110 rounded-none object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-black text-[#1dec1c] mb-3 uppercase tracking-wide">{disciplina.name}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-6">{disciplina.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-black text-[#1dec1c] mb-4 uppercase tracking-wide">Horarios</h4>
                        {renderHorarios(disciplina.name)}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {disciplinas.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#1dec1c] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <div
              ref={containerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {disciplinas.map((disciplina, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-start"
                  style={{ minWidth: '100%' }}
                >
                  <Card className="bg-zinc-900 border-b-4 border-transparent hover:border-b-[#1dec1c] transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-xl rounded-none shadow-lg overflow-hidden h-full" style={{ overflow: 'hidden' }}>
                    <CardContent className="p-4 text-center h-full flex flex-col">
                      <div className="relative mb-6 overflow-hidden w-48 h-48 mx-auto">
                        <Image
                          src={disciplina.image || "/placeholder.svg"}
                          alt={disciplina.name}
                          fill
                          className="transition-transform duration-300 group-hover:scale-110 rounded-none object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-black text-[#1dec1c] mb-3 uppercase tracking-wide">{disciplina.name}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-6">{disciplina.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-black text-[#1dec1c] mb-4 uppercase tracking-wide">Horarios</h4>
                        {renderHorarios(disciplina.name)}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <button
              onClick={() => goToSlide(currentIndex > 0 ? currentIndex - 1 : disciplinas.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-zinc-700 hover:border-[#1dec1c]"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => goToSlide(currentIndex < disciplinas.length - 1 ? currentIndex + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-zinc-700 hover:border-[#1dec1c]"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {disciplinas.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#1dec1c] scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <style>
        {`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  )
}
