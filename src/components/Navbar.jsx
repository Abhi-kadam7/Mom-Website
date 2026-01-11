import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Function to add underline to active link
  const linkClasses = ({ isActive }) =>
    `hover:text-pink-200 transition ${
      isActive ? "border-b-2 border-white" : ""
    }`

  return (
    <nav className="bg-pink-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl md:text-2xl font-bold tracking-wide hover:text-pink-200 transition"
          >
            Shree Swami Samarth Tailor Shop
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/gallery" className={linkClasses}>
              Gallery
            </NavLink>
            <NavLink to="/booking" className={linkClasses}>
              Booking
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-pink-500 transition"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-600 px-4 pt-2 pb-4 space-y-2 font-medium transition-all duration-300">
          <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/gallery" className={linkClasses} onClick={() => setIsOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/booking" className={linkClasses} onClick={() => setIsOpen(false)}>
            Booking
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
