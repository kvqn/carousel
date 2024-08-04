"use client"

import { Carousel as MantineCarousel } from "@mantine/carousel"
// import { Chip } from "@mantine/core"
import { useEffect, useState } from "react"
import { type EmblaCarouselType } from "embla-carousel"
import { cn } from "@/lib/utils"

export function Carousel({
  slides,
}: {
  slides: { image: string; title: string }[]
}) {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null)
  const [selectedSlide, setSelectedSlide] = useState(0)

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center justify-center gap-4 rounded-md p-2">
        {slides.map((slide, index) => (
          <Chip
            key={index}
            selected={selectedSlide == index}
            onClick={() => {
              if (!embla) return
              embla.scrollTo(index)
              setSelectedSlide(index)
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
            <MantineCarousel.Slide key={index} className="overflow-hidden">
              <img src={slide.image} className="object-contain" />
            </MantineCarousel.Slide>
          ))}
        </MantineCarousel>
      </div>
    </div>
  )
}

function Chip({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode
  selected: boolean
  onClick?: () => void
}) {
  return (
    <div
      className={cn(
        "cursor-pointer text-nowrap rounded-full bg-white px-4 py-2 text-sm transition-colors",
        {
          "bg-[#6e18fb] text-white": selected,
        },
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
