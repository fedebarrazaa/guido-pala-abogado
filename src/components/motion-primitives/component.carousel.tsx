// src/components/TestCarousel.tsx

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/motion-primitives/carousel";

export default function TestCarousel() {
  return (
   <Carousel className="w-full max-w-4xl mx-auto">
  <CarouselContent>

    <CarouselItem>
  <div className="h-80 rounded-xl bg-[#1F232B] flex flex-col items-center justify-center px-10 text-center">

    <h3 className="text-3xl font-semibold text-[#F8F7F5] mb-4">
      Derecho Civil
    </h3>

    <p className="max-w-md text-[#B7BCC5] leading-relaxed text-center">
      Asesoramiento integral en contratos, sucesiones, daños y perjuicios,
      buscando siempre soluciones eficientes y personalizadas para cada cliente.
    </p>

  </div>
</CarouselItem>

    <CarouselItem>
      <div className="h-80 rounded-2xl bg-[#1F232B] p-10 flex flex-col justify-center">
        <span className="text-[#C8A977] uppercase text-sm tracking-widest">
          Jurisdicción
        </span>

        <h3 className="mt-4 text-3xl font-bold text-white">
          Consultoría jurídica personalizada
        </h3>

        <p className="mt-4 text-[#B7BCC5] leading-7 max-w-lg">
          Intervención en C.A.B.A., Provincia de Buenos Aires, Santa Cruz y Rio Negro (matricula provincial). Delitos federales en todo el país.
        </p>
      </div>
    </CarouselItem>

    <CarouselItem>
      <div className="h-80 rounded-2xl bg-[#2F3846] p-10 flex flex-col justify-center">
        <span className="text-[#C8A977] uppercase text-sm tracking-widest">
          Representación
        </span>

        <h3 className="mt-4 text-3xl font-bold text-white">
          Defensa y representación judicial
        </h3>

        <p className="mt-4 text-[#F8F7F5]/80 leading-7 max-w-lg">
         Intervención en todas las etapas del proceso penal: investigación e instrucción, juicio oral, etapas recursivas, tribunales superiores provinciales y Corte Suprema de Justicia.
        </p>
      </div>
    </CarouselItem>

  </CarouselContent>

  <CarouselNavigation />
</Carousel>
  );
}