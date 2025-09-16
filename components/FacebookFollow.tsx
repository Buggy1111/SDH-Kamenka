'use client'

import { motion } from 'framer-motion'
import { Facebook } from 'lucide-react'
import Link from 'next/link'

export default function FacebookFollow() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white rounded-full p-4 shadow-xl"
            >
              <Facebook className="h-12 w-12 text-blue-600" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Sledujte nás na Facebooku
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Zůstaňte v kontaktu s naším sborem a nezmeškejte žádné aktuality, akce ani fotografie z našich zásahů
          </p>

          <Link
            href="https://www.facebook.com/profile.php?id=100054494319025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl border-2 border-blue-300 flex items-center gap-3 mx-auto"
            >
              <Facebook className="h-6 w-6" />
              Sledovat na Facebooku
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}