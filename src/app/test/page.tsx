"use client"
import { Carousel } from "@mantine/carousel"
import Image from "next/image"

function Demo() {
  const height = 300
  const width = 200
  return (
    <Carousel withIndicators height={"full"}>
      <Carousel.Slide>
        <img src="/images/1.jpg" alt="1" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/2.jpg" alt="2" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="/images/3.jpg" alt="3" />
      </Carousel.Slide>
    </Carousel>
  )
}

export default function Page() {
  return (
    <div className="flex h-screen w-fit items-center justify-center bg-neutral-200">
      <Demo />
    </div>
  )
}
