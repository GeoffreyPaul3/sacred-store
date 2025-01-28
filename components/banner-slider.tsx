"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const banners = [
  {
    id: 1,
    image: "/assets/img-9.jpg",
    title: "Crypto Savings",
    description: "Secure your future with our crypto solutions",
  },
  {
    id: 2,
    image: "/assets/img-10.jpg",
    title: "Clean Energy",
    description: "Efficient LP Gas for your home and business",
  },
  {
    id: 3,
    image: "/assets/img-11.jpg",
    title: "Mining Revolution",
    description: "Join the future of decentralized mining",
  },
]

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full">
      <div className="w-full aspect-[2.5/1] bg-muted flex items-center justify-center">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity overflow-hidden rounded-2xl duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={banner.image || "/placeholder.svg"} alt={banner.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{banner.title}</h2>
              <p className="text-white/80">{banner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

