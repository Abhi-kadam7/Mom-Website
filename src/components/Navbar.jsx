import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shree Ladies Tailor</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
