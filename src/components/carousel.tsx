"use client"

import { Carousel as MantineCarousel } from "@mantine/carousel"
import { Chip } from "@mantine/core"

export function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <MantineCarousel draggable={false} withControls={false}>
      {children}
    </MantineCarousel>
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
