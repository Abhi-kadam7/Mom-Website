import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Contact = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 bg-pink-50 flex justify-center items-start">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4 sm:mb-6 text-center"
        >
          Contact Us
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-600 mb-6 sm:mb-8 text-center text-sm sm:text-base"
        >
          Reach us easily via phone, WhatsApp, or visit our shop. 🧵
        </motion.p>

        {/* Contact Details */}
        <motion.div 
          variants={item} 
          className="flex flex-col gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base"
        >
          <p>📞 Phone: <a href="tel:9834720328" className="text-pink-700 hover:underline">9834720328</a></p>
          <p>💬 WhatsApp: <a href="https://wa.me/919834720328" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:underline">Chat Now</a></p>
          <p>✉️ Email: <a href="mailto:nirmala@gmail.com" className="text-pink-700 hover:underline">nirmala@gmail.com</a></p>
          <p>📍 Address: Kadamwadi, Maharashtra, India</p>
          <p>🕒 Working Hours: 10 AM – 8 PM</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
