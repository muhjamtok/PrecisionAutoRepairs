import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Premier Auto Body did an amazing job repairing my car after a fender bender. The car looks brand new, and they completed the work ahead of schedule!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I was very impressed with the quality of work and attention to detail. The staff was friendly and kept me updated throughout the repair process.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "After a major collision, I thought my car would never look the same again. Premier Auto Body proved me wrong - the repair is flawless!",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Great service, fair pricing, and excellent results. They helped me with the insurance claim process and made everything stress-free.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100">
      <div className="container-section">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
