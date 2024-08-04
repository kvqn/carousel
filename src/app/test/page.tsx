"use client"
import { Carousel } from "@/components/carousel"
import Image from "next/image"

function Demo() {
  const height = 300
  const width = 200
  return (
    <Carousel
      slides={[
        { title: "Slide 1", image: "/images/1.jpg" },
        { title: "Slide 2", image: "/images/2.jpg" },
        { title: "Slide 3", image: "/images/3.jpg" },
      ]}
    ></Carousel>
  )
}

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-120 max-w-[400px] overflow-hidden p-2">
        <Demo />
      </div>
    </div>
  )
}
