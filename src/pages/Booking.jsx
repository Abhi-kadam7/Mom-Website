import { motion } from "framer-motion"
import { useState } from "react"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const field = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
    date: "",
    botField: "", // honeypot
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trimStart(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.botField) return

    const mobileRegex = /^[6-9]\d{9}$/
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number")
      return
    }

    const message = `
🧵 *Ladies Tailoring Appointment* 🧵

👩 Name: ${formData.name.trim()}
📞 Mobile: ${formData.mobile}
👗 Service: ${formData.service}
📅 Date: ${formData.date}

Thank you!
    `

    const whatsappUrl = `https://wa.me/919834720328?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-pink-50 flex justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8"
      >
        {/* Heading */}
        <motion.h2
          variants={field}
          className="text-2xl sm:text-3xl font-bold text-pink-700 mb-2 text-center"
        >
          Book Appointment
        </motion.h2>

        <motion.p
          variants={field}
          className="text-center text-gray-600 mb-6 text-sm sm:text-base"
        >
          Easy booking for perfect fitting 🧵
        </motion.p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Honeypot Field (Hidden) */}
          <input
            type="text"
            name="botField"
            value={formData.botField}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <motion.input
            variants={field}
            type="text"
            name="name"
            required
            minLength={2}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <motion.input
            variants={field}
            type="tel"
            name="mobile"
            required
            placeholder="Mobile Number"
            pattern="[6-9]{1}[0-9]{9}"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <motion.select
            variants={field}
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          >
            <option value="">Select Service</option>
            <option>Blouse Stitching</option>
            <option>Designer Blouse</option>
            <option>Salwar Suit</option>
            <option>Kurti Stitching</option>
            <option>Saree Fall & Pico</option>
            <option>Lehenga Alteration</option>
            <option>Dress Alterations</option>
            <option>Custom Bridal Wear</option>
            <option>Other</option>
          </motion.select>

          <motion.input
            variants={field}
            type="date"
            name="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Submit */}
          <motion.button
            variants={field}
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold tracking-wide text-sm sm:text-base"
          >
            Submit via WhatsApp 💬
          </motion.button>
        </form>

        {/* Stitch Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 h-[2px] w-full bg-pink-300 rounded origin-left"
        />
      </motion.div>
    </div>
  )
}

export default Booking
