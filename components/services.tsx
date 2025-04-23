import { Hammer, Paintbrush, AlignHorizontalJustifyCenter, Car, ShieldCheck, Clock } from "lucide-react"

const services = [
  {
    title: "Dent Repair",
    description: "Our skilled technicians can remove dents of all sizes without damaging your vehicle's paint.",
    icon: Hammer,
  },
  {
    title: "Paint Matching",
    description: "We use computerized color matching technology to ensure your vehicle's paint looks factory-fresh.",
    icon: Paintbrush,
  },
  {
    title: "Frame Straightening",
    description: "Our state-of-the-art equipment can restore your vehicle's frame to factory specifications.",
    icon: AlignHorizontalJustifyCenter,
  },
  {
    title: "Collision Repair",
    description: "From minor fender benders to major collisions, we have the expertise to restore your vehicle.",
    icon: Car,
  },
  {
    title: "Insurance Assistance",
    description: "We work directly with insurance companies to make the claims process as smooth as possible.",
    icon: ShieldCheck,
  },
  {
    title: "Express Service",
    description:
      "For minor repairs, our express service gets you back on the road quickly without sacrificing quality.",
    icon: Clock,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-100">
      <div className="container-section">
        <h2 className="section-title">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-600 p-3 rounded-md text-white mr-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
