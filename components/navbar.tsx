"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Set initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
              <span className={`text-xl font-oswald font-bold ml-2 ${scrolled ? "text-gray-900" : "text-white"}`}>
                PREMIER AUTO BODY
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition duration-300 ${
                  scrolled ? "text-gray-900 hover:text-red-600" : "text-white hover:text-red-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+15551234567"
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              <Phone size={18} className="mr-2" />
              <span>(555) 123-4567</span>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${
                scrolled ? "text-gray-900 hover:text-red-600" : "text-white hover:text-red-300"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-900 hover:bg-red-600 hover:text-white rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+15551234567"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center bg-red-600 text-white px-3 py-2 rounded-md mt-4"
            >
              <Phone size={18} className="mr-2" />
              <span>(555) 123-4567</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
