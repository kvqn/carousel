"use client"

import { Carousel as MantineCarousel, type Embla } from "@mantine/carousel"
import { Chip } from "@mantine/core"
import { useState } from "react"

export function Carousel({
  slides,
}: {
  slides: { image: string; title: string }[]
}) {
  const [embla, setEmbla] = useState<Embla | null>(null)

  return (
    <div className="relative h-screen w-screen">
      <div className="-transform-x-1/2 absolute left-1/2 top-4 z-10 flex h-4 gap-4">
        {slides.map((slide, index) => (
          <Chip
            key={index}
            checked={false}
            onClick={() => {
              embla.scrollTo(index)
            }}
          >
            {slide.title}
          </Chip>
        ))}
      </div>
      <div className="overflow-hidden">
        <MantineCarousel
          draggable={false}
          withControls={false}
          getEmblaApi={setEmbla}
        >
          {slides.map((slide, index) => (
            <MantineCarousel.Slide key={index}>
              <img
                src={slide.image}
                className="h-screen w-screen object-cover"
              />
            </MantineCarousel.Slide>
          ))}
        </MantineCarousel>
      </div>
    </div>
  )
}

export function CarouselSlide({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <MantineCarousel.Slide className="relative" title="test">
      {title && (
        <Chip
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          checked={false}
        >
          {title}
        </Chip>
      )}
      {children}
    </MantineCarousel.Slide>
  )
}
