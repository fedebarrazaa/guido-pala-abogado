// src/components/TestCarousel.tsx

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/motion-primitives/carousel";

export default function TestCarousel() {
  return (
   <Carousel className="w-full max-w-2xl mx-auto"   autoplay
  autoplayInterval={3500}>
  <CarouselContent>

  <CarouselItem>
  <div className="h-80 rounded-xl flex flex-col items-center justify-center px-10 text-center">

    <h3 className="text-3xl font-semibold text-[#D2B48C] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
      Derecho Civil
    </h3>

    <p className="max-w-md text-black leading-relaxed text-center" style={{ fontFamily: "Jost, sans-serif" }}>
      Asesoramiento integral en contratos, sucesiones, daños y perjuicios,
      buscando siempre soluciones eficientes y personalizadas para cada cliente.
    </p>

  </div>
</CarouselItem>

    <CarouselItem>
  <div className="h-80 rounded-xl flex flex-col items-center justify-center px-10 text-center">

    <h3 className="text-3xl font-semibold text-[#D2B48C] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
      Jurisdicción
    </h3>

    <p className="max-w-md text-black leading-relaxed text-center" style={{ fontFamily: "Jost, sans-serif" }}>
     Intervención en C.A.B.A., Provincia de Buenos Aires, Santa Cruz y Rio Negro (matricula provincial). Delitos federales en todo el país.
    </p>

  </div>
</CarouselItem>

    <CarouselItem>
  <div className="h-80 rounded-xl flex flex-col items-center justify-center px-10 text-center">

    <h3 className="text-3xl font-semibold text-[#D2B48C] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
     Representación
    </h3>

    <p className="max-w-md text-black leading-relaxed text-center" style={{ fontFamily: "Jost, sans-serif" }}>
      Intervención en todas las etapas del proceso penal: investigación e instrucción, juicio oral, etapas recursivas, tribunales superiores provinciales y Corte Suprema de Justicia.
    </p>

  </div>
</CarouselItem>

  </CarouselContent>

  <CarouselNavigation />
</Carousel>
  );
}