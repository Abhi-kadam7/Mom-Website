import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar & WhatsApp button */}
      <Navbar />
      <WhatsAppButton />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: fallback route for 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl font-bold text-pink-700">404</h1>
              <p className="mt-4 text-gray-600">Page not found</p>
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
