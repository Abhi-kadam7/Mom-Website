import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Gallery = lazy(() => import("./pages/Gallery"))
const Booking = lazy(() => import("./pages/Booking"))
const Contact = lazy(() => import("./pages/Contact"))

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar & WhatsApp floating button */}
      <Navbar />
      <WhatsAppButton />

      {/* Main Routes with Suspense fallback */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-pink-600 text-lg animate-pulse">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-pink-50">
                <h1 className="text-6xl font-extrabold text-pink-700 mb-4">404</h1>
                <p className="text-lg text-gray-700 mb-6">Oops! Page not found.</p>
                <a
                  href="/"
                  className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                >
                  Go Home
                </a>
              </div>
            }
          />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
