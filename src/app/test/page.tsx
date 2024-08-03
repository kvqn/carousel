"use client"
import { Carousel, CarouselSlide } from "@/components/carousel"
import Image from "next/image"

function Demo() {
  const height = 300
  const width = 200
  return (
    <Carousel>
      <CarouselSlide title="Slide 1">
        <img
          src="/images/1.jpg"
          alt="1"
          className="h-screen w-screen object-cover"
        />
      </CarouselSlide>
      <CarouselSlide title="Slide 2">
        <img
          src="/images/2.jpg"
          alt="2"
          className="h-screen w-screen object-cover"
        />
      </CarouselSlide>
      <CarouselSlide title="Slide 3">
        <img
          src="/images/3.jpg"
          alt="3"
          className="h-screen w-screen object-cover"
        />
      </CarouselSlide>
    </Carousel>
  )
}

export default function Page() {
  return (
    <div className="flex max-h-screen w-fit items-center justify-center bg-neutral-200">
      <div className="object-cover">
        <Demo />
      </div>
    </div>
  )
}
