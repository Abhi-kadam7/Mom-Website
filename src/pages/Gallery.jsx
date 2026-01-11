import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gallery } from "../data/gallery"
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"

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
  const [selectedImage, setSelectedImage] = useState(null)

  const imageIndex =
    ((page % gallery.length) + gallery.length) % gallery.length

  const currentDesign = gallery[imageIndex]

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  // WhatsApp
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
      <h2 className="text-3xl font-bold text-pink-700 mb-8">
        Our Blouse Designs
      </h2>

      {/* MAIN CARD */}
      <div className="relative w-full max-w-md h-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center"
        >
          <ChevronLeftIcon className="w-7 h-7 text-pink-700" />
        </button>

        {/* RIGHT */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center"
        >
          <ChevronRightIcon className="w-7 h-7 text-pink-700" />
        </button>

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
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) paginate(1)
              else if (swipe > swipeConfidenceThreshold) paginate(-1)
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              {currentDesign.name}
            </h3>

            {/* IMAGE (CLICK TO OPEN FULLSCREEN) */}
            <motion.img
              src={currentDesign.image}
              alt={currentDesign.name}
              onClick={() => setSelectedImage(currentDesign.image)}
              className="w-full h-64 object-cover rounded-xl shadow-lg cursor-zoom-in"
            />

            <button
              onClick={() => handleSend(currentDesign)}
              className="mt-5 w-full bg-black text-white py-3 rounded-lg"
            >
              Select & Send 💬
            </button>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {gallery.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === imageIndex ? "bg-pink-700 scale-125" : "bg-pink-300"
              }`}
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            />

            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
