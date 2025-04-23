import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Auto body repair shop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container-section relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Premier Auto Body Repair</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Restoring your vehicle to its pre-accident condition with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary text-center">
              Get a Free Estimate
            </Link>
            <Link href="#services" className="btn-secondary text-center">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
