import { motion } from "framer-motion"

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Soft Gray Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gray-400 opacity-20 blur-lg"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center gap-2 bg-gradient-to-br from-gray-700 to-gray-900 text-white px-5 py-3 rounded-full shadow-xl font-medium"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 28px rgba(0,0,0,0.6)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon */}
        <motion.span
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xl"
        >
          💬
        </motion.span>

        {/* Text */}
        <span className="hidden sm:block tracking-wide">
          WhatsApp
        </span>
      </motion.a>
    </motion.div>
  )
}

export default WhatsAppButton
