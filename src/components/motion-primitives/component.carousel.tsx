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
      Penal
    </h3>

    <p className="max-w-md text-black leading-relaxed text-center" style={{ fontFamily: "Jost, sans-serif" }}>
      Defensa y asesoramiento integral en todas las etapas del proceso penal, con una estrategia jurídica personalizada y un compromiso permanente con la protección de tus derechos.
    </p>

  </div>
</CarouselItem>

    <CarouselItem>
  <div className="h-80 rounded-xl flex flex-col items-center justify-center px-10 text-center">

    <h3 className="text-3xl font-semibold text-[#D2B48C] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
      Penal Económico
    </h3>

    <p className="max-w-md text-black leading-relaxed text-center" style={{ fontFamily: "Jost, sans-serif" }}>
     Asistencia legal especializada en delitos económicos, financieros y empresariales, brindando soluciones estratégicas para personas, profesionales y empresas.
    </p>

  </div>
</CarouselItem>

    <CarouselItem>
  <div className="h-80 rounded-xl flex flex-col items-center justify-center px-10 text-center">

    <h3 className="text-3xl font-semibold text-[#D2B48C] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
     Compliance
    </h3>

    <p className="max-w-md text-black leading-relaxed text-center" style={{ fontFamily: "Jost, sans-serif" }}>
      Implementación de programas de cumplimiento normativo para prevenir riesgos legales, fortalecer la transparencia y proteger la actividad de la organización.
    </p>

  </div>
</CarouselItem>

  </CarouselContent>

  <CarouselNavigation />
</Carousel>
  );
}