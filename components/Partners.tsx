'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Partners() {
  const partners = [
    { name: 'Město Odry', logo: 'ODRY' },
    { name: 'Obec Kamenka', logo: 'KAMENKA' },
    { name: 'SDH Véska', logo: 'VÉSKA' },
    { name: 'SDH Heřmanice', logo: 'HEŘMANICE' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Naši partneři a sponzoři
          </h2>
          <p className="text-lg text-gray-800">
            Děkujeme všem, kteří nás podporují
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex items-center justify-center h-24"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">
                  {partner.logo}
                </div>
                <p className="text-xs text-gray-900 font-medium mt-1">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/kontakt">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-red-700">
              Staňte se naším partnerem
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}