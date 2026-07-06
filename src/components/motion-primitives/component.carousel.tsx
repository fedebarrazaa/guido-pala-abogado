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
      <div className="h-80 rounded-xl bg-red-500" />
    </CarouselItem>

    <CarouselItem>
      <div className="h-80 rounded-xl bg-blue-500" />
    </CarouselItem>

    <CarouselItem>
      <div className="h-80 rounded-xl bg-green-500" />
    </CarouselItem>

  </CarouselContent>
  <CarouselNavigation />
</Carousel>
  );
}