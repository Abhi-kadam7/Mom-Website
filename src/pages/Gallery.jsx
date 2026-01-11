import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gallery } from "../data/gallery"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => Math.abs(offset) * velocity

const Gallery = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = ((page % gallery.length) + gallery.length) % gallery.length
  const currentDesign = gallery[imageIndex]

  const paginate = (newDirection) => setPage([page + newDirection, newDirection])

  const handleSend = (design) => {
    const message = `
🧵 *Ladies Tailoring Design Selection* 🧵

I like this design: ${design.name}
Front: ${window.location.origin + design.front}
Back: ${window.location.origin + design.back}
    `
    const whatsappUrl = `https://wa.me/919834720328?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-pink-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
        Our Blouse Designs
      </h2>

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Arrow */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.2, backgroundColor: "#ec4899", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white bg-opacity-70 shadow-lg cursor-pointer"
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.2, backgroundColor: "#ec4899", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white bg-opacity-70 shadow-lg cursor-pointer"
        >
          <ChevronRightIcon className="w-7 h-7" />
        </motion.button>

        {/* Swipeable Carousel */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { type: "spring", stiffness: 300, damping: 30 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) paginate(1)
              else if (swipe > swipeConfidenceThreshold) paginate(-1)
            }}
            className="flex flex-col items-center p-6 cursor-grab select-none"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-4">{currentDesign.name}</h3>

            <motion.div className="grid grid-cols-1 gap-4 w-full">
              <motion.img
                src={currentDesign.front}
                alt={`${currentDesign.name} Front`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img
                src={currentDesign.back}
                alt={`${currentDesign.name} Back`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>

            <motion.button
              onClick={() => handleSend(currentDesign)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-medium shadow-md transition-all"
            >
              Select & Send 💬
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex gap-2 justify-center mt-6 mb-2">
          {gallery.map((_, idx) => (
            <motion.span
              key={idx}
              animate={{ scale: idx === imageIndex ? 1.5 : 1, opacity: idx === imageIndex ? 1 : 0.5 }}
              className={`w-3 h-3 rounded-full bg-pink-700`}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-gray-500 text-sm">
        Swipe or click arrows to view more designs
      </p>
    </div>
  )
}

export default Gallery
