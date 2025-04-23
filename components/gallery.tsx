"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Rear Bumper Repair",
    before: "/images/gallery/gallery1before.jpg",
    after: "/images/gallery/gallery1after.jpg",
    description: "Severe rear bumper damage from a parking lot collision completely restored to factory condition.",
  },
  {
    id: 2,
    title: "Door Dent Removal",
    before: "/images/gallery/gallery2before.jpg",
    after: "/images/gallery/gallery2after.jpg",
    description: "Deep door dent removed without the need for repainting, preserving the original finish.",
  },
  {
    id: 3,
    title: "Front End Collision",
    before: "/images/gallery/gallery3before.jpg",
    after: "/images/gallery/gallery3after.jpg",
    description: "Major front-end damage repaired with OEM parts and precise color matching.",
  },
  {
    id: 4,
    title: "Paint Restoration",
    before: "/images/gallery/gallery4before.jpg",
    after: "/images/gallery/gallery4after.jpg",
    description: "Faded and oxidized paint restored to a showroom shine with our multi-stage paint correction process.",
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("prev")
    setIsAnimating(true)

    setTimeout(() => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? galleryItems.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)

      setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 300)
    }, 200)
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("next")
    setIsAnimating(true)

    setTimeout(() => {
      const isLastSlide = currentIndex === galleryItems.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)

      setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 300)
    }, 200)
  }

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slideIndex === currentIndex) return

    if (slideIndex > currentIndex) {
      setDirection("next")
    } else {
      setDirection("prev")
    }

    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex(slideIndex)

      setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 300)
    }, 200)
  }

  const currentSlide = galleryItems[currentIndex]

  // Animation classes based on direction
  const getAnimationClass = () => {
    if (!isAnimating) return ""
    if (direction === "next") return "opacity-0 translate-x-8"
    if (direction === "prev") return "opacity-0 -translate-x-8"
    return ""
  }

  // Function to handle image errors and provide fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/placeholder.svg?height=600&width=800"
  }

  return (
    <section id="gallery" className="bg-white">
      <div className="container-section">
        <h2 className="section-title">Before & After Gallery</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 transition-all duration-500 ease-in-out ${getAnimationClass()}`}
            >
              <div className="relative h-64 md:h-80 lg:h-96">
                <Image
                  src={currentSlide.before || "/placeholder.svg"}
                  alt={`${currentSlide.title} - Before`}
                  fill
                  className="object-cover rounded-lg"
                  onError={handleImageError}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg">
                  Before
                </div>
              </div>
              <div className="relative h-64 md:h-80 lg:h-96">
                <Image
                  src={currentSlide.after || "/placeholder.svg"}
                  alt={`${currentSlide.title} - After`}
                  fill
                  className="object-cover rounded-lg"
                  onError={handleImageError}
                />
                <div className="absolute bottom-0 left-0 bg-red-600 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg">
                  After
                </div>
              </div>
            </div>

            <div
              className={`text-center mb-6 transition-all duration-500 ease-in-out ${isAnimating ? "opacity-0 translate-y-4" : ""}`}
            >
              <h3 className="text-xl md:text-2xl mb-2">{currentSlide.title}</h3>
              <p className="text-gray-600">{currentSlide.description}</p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/3 -translate-y-1/2 left-2 md:-left-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/3 -translate-y-1/2 right-2 md:-right-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4">
            {galleryItems.map((slide, slideIndex) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === slideIndex ? "bg-red-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
