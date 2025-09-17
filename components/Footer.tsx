'use client'

import { motion } from 'framer-motion'
import { Facebook, Mail, MapPin, Phone, Flame, Heart, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { label: 'O nás', href: '/o-nas' },
    { label: 'Historie', href: '/historie' },
    { label: 'Činnost', href: '/cinnost' },
    { label: 'Kalendář', href: '/kalendar' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Kontakt', href: '/kontakt' }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Emergency Bar - Ultra Premium */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-3 relative">
          <div className="flex items-center justify-center gap-8">
            <motion.div
              className="flex items-center gap-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                <div className="relative bg-white rounded-full p-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <span className="text-white font-bold text-base tracking-wide">TÍSŇOVÁ LINKA: 150</span>
            </motion.div>

            <div className="hidden md:block h-6 w-px bg-white/30" />

            <div className="hidden md:flex items-center gap-4 text-white/90 text-xs font-medium">
              <span>🚑 155</span>
              <span>👮 158</span>
              <span>🆘 112</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Minimalistic Luxury */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">

            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl blur-xl opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-4">
                    <Flame className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SDH Kamenka</h3>
                  <p className="text-red-400 font-medium text-sm">Od roku 1883</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                Více než 140 let chráníme životy a majetek.
                Jsme hrdou součástí obce Kamenka.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/p/SDH-Kamenka-100054494319025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-blue-500/20 hover:border-blue-400/50 transition-all">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:hasici.odry@atlas.cz"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-red-500 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-red-500/20 hover:border-red-400/50 transition-all">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Rychlé odkazy</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <MapPin className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Hasičská zbrojnice</p>
                    <p className="text-gray-300">Kamenka č.p. 40</p>
                    <p className="text-gray-300">742 35 Odry</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-gray-300">Kontakt přes SDH Odry</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-500" />
                  <a href="mailto:hasici.odry@atlas.cz" className="text-gray-300 hover:text-white transition-colors">
                    hasici.odry@atlas.cz
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gray-900 px-4">
                <Flame className="h-4 w-4 text-red-500" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-gray-400 text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 SDH Kamenka • IČO: 65472497
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span>Vytvořeno s</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>pro obec Kamenka</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600" />
      </div>
    </footer>
  )
}