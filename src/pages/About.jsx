import { motion } from "framer-motion"
import momImg from "../assets/mom.jpg"

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-pink-700 mb-6 text-center"
        >
          About Us
        </motion.h2>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <motion.img
            src={momImg}
            alt="Ladies Tailor"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-56 h-56 object-cover rounded-full border-4 border-pink-300 shadow-lg"
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Professional Ladies Tailor
            </h3>

            <p className="text-gray-700 leading-relaxed">
              I am a professional ladies tailor with more than{" "}
              <span className="font-semibold text-pink-600">
                20+ years of experience
              </span>.
              I specialize in blouse stitching, salwar suits, alterations,
              designer wear, and custom outfits.
              <br /><br />
              My priority is{" "}
              <span className="font-semibold">
                perfect fitting, quality stitching, and customer satisfaction
              </span>.
            </p>

            {/* Experience Badges */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">
                10+ Years Experience
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">
                Perfect Fitting
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">
                Custom Designs
              </span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="my-10 h-[2px] w-full bg-pink-300 rounded origin-left"
        />

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Location
          </h3>

          <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <iframe
  title="Tailor Location"
  src="https://www.google.com/maps?q=16.87891,74.85495&z=17&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
></iframe>

          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
