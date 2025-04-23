import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Logo />
              <span className="text-xl font-oswald font-bold text-white ml-2">PREMIER AUTO BODY</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Premier Auto Body has been providing top-quality auto body repair services for over 20 years. We take
              pride in our workmanship and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition duration-300">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Dent Repair
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Paint Matching
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Frame Straightening
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Collision Repair
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition duration-300">
                  Insurance Assistance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Premier Auto Body. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
