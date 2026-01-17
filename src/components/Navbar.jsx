import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition
     ${isActive ? "bg-pink-500 text-white" : "hover:bg-pink-500/70"}`

  return (
    <nav className="bg-pink-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="text-lg md:text-2xl font-bold tracking-wide hover:text-pink-200 transition"
          >
श्री स्वामी समर्थ टेलर शॉप
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/gallery" className={linkClasses}>Gallery</NavLink>
            <NavLink to="/booking" className={linkClasses}>Booking</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-pink-500 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pb-4 space-y-2 bg-pink-600">
          <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/gallery" className={linkClasses} onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/booking" className={linkClasses} onClick={() => setIsOpen(false)}>Booking</NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
