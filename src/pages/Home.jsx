import { motion } from "framer-motion"

/* Floating animation */
const float = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

/* Rotate spool */
const rotate = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  },
}

/* Stagger container */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

/* Fade + slide */
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-50 to-pink-100 text-center px-4 overflow-hidden">

      {/* Fabric wave */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Floating Tailor Icons */}
      <motion.div {...float} className="absolute top-20 left-8 text-4xl">🧵</motion.div>
      <motion.div {...float} className="absolute top-40 right-14 text-4xl">✂️</motion.div>
      <motion.div {...float} className="absolute bottom-44 left-16 text-4xl">👗</motion.div>
      <motion.div {...rotate} className="absolute bottom-24 right-24 text-4xl">🧶</motion.div>

      {/* Measuring Tape */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-1/2 left-0 text-3xl"
      >
        📏
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold text-pink-700 drop-shadow"
        >
          Ladies Tailoring Services
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl mt-2 text-gray-700"
        >
          महिला शिवणकाम सेवा
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-xl mt-4 text-gray-600"
        >
          Perfect fitting, quality stitching & on-time delivery.
          <br />
          उत्कृष्ट फिटिंग आणि दर्जेदार शिवणकाम.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex gap-4 mt-6 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(236,72,153,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="/booking"
            className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Book Appointment
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="tel:9876543210"
            className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Call Now
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Needle Thread Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.4 }}
        className="origin-left mt-10 h-[2px] w-[65%] bg-pink-500 rounded"
      />

      {/* Dress Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 text-6xl"
      >
        👚
      </motion.div>

      {/* Decorative Bubble */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 50 }}
        className="absolute -bottom-36 -right-36 w-96 h-96 bg-pink-300 rounded-full opacity-30"
      />
    </div>
  )
}

export default Home
