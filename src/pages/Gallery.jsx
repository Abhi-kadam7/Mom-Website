import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gallery } from "../data/gallery"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => Math.abs(offset) * velocity

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

const Gallery = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex =
    ((page % gallery.length) + gallery.length) % gallery.length

  const currentDesign = gallery[imageIndex]

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  // ✅ WhatsApp image preview (NO BACKEND)
  const handleSend = (design) => {
    const imageUrl = window.location.origin + design.image

    const message = `🧵 Ladies Tailoring Design Selection

✨ Design Name: ${design.name}

📸 Design Image:
${imageUrl}

Please stitch this design for me.`

    window.open(
      `https://wa.me/917767884217?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-pink-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
        Our Blouse Designs
      </h2>

      {/* MAIN CARD */}
      <div className="relative w-full max-w-md h-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT ARROW */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/80 shadow-lg"
        >
          <ChevronLeftIcon className="w-7 h-7 text-pink-700" />
        </motion.button>

        {/* RIGHT ARROW */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/80 shadow-lg"
        >
          <ChevronRightIcon className="w-7 h-7 text-pink-700" />
        </motion.button>

        {/* SLIDER */}
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
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) paginate(1)
              else if (swipe > swipeConfidenceThreshold) paginate(-1)
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 cursor-grab select-none"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              {currentDesign.name}
            </h3>

            {/* IMAGE */}
            <motion.img
              src={currentDesign.image}
              alt={currentDesign.name}
              draggable={false}
              className="w-full h-64 object-cover rounded-xl shadow-lg pointer-events-none"
            />

            {/* SEND BUTTON */}
            <motion.button
              onClick={() => handleSend(currentDesign)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-medium shadow-md"
            >
              Select & Send 💬
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {gallery.map((_, idx) => (
            <motion.span
              key={idx}
              animate={{
                scale: idx === imageIndex ? 1.5 : 1,
                opacity: idx === imageIndex ? 1 : 0.4,
              }}
              className="w-3 h-3 rounded-full bg-pink-700"
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
