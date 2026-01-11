import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gallery } from "../data/gallery"
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"

const swipeConfidenceThreshold = 1000
const swipePower = (offset, velocity) => Math.abs(offset) * velocity

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
}

const Gallery = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const [selectedImage, setSelectedImage] = useState(null)

  const imageIndex = ((page % gallery.length) + gallery.length) % gallery.length
  const currentDesign = gallery[imageIndex]

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

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
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-700 mb-8 sm:mb-10 drop-shadow-md text-center">
        Our Blouse Designs
      </h2>

      {/* MAIN CARD */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[480px] sm:h-[520px] bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
        {/* LEFT BUTTON */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-pink-100 transition"
        >
          <ChevronLeftIcon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-700" />
        </motion.button>

        {/* RIGHT BUTTON */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-pink-100 transition"
        >
          <ChevronRightIcon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-700" />
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
              x: { type: "spring", stiffness: 350, damping: 30 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) paginate(1)
              else if (swipe > swipeConfidenceThreshold) paginate(-1)
            }}
            className="flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 w-full cursor-grab select-none"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-pink-700 text-center">
              {currentDesign.name}
            </h3>

            {/* IMAGE */}
            <motion.img
              src={currentDesign.image}
              alt={currentDesign.name}
              onClick={() => setSelectedImage(currentDesign.image)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full max-h-48 sm:max-h-64 object-cover rounded-xl shadow-lg cursor-zoom-in"
            />

            <motion.button
              onClick={() => handleSend(currentDesign)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 sm:mt-3 w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white py-2 sm:py-3 rounded-xl shadow-lg hover:from-pink-700 hover:to-pink-600 transition text-sm sm:text-base"
            >
              Select & Send 💬
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {gallery.map((_, idx) => (
            <motion.span
              key={idx}
              layout
              animate={{
                scale: idx === imageIndex ? 1.3 : 1,
                backgroundColor: idx === imageIndex ? "#be185d" : "#fca5a5",
              }}
              className="w-3 h-3 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-full max-h-full rounded-xl shadow-2xl cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            />

            <motion.button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <XMarkIcon className="w-8 sm:w-10 h-8 sm:h-10" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
