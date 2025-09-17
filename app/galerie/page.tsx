'use client'

import Navigation from '@/components/Navigation'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function GaleriePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-fire-600 via-fire-700 to-fire-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Fotogalerie
            </h1>
            <p className="text-lg text-fire-100 max-w-3xl mx-auto">
              Více než 13 let hasičské historie v obrazech - soutěže, cvičení, zásahy a společenské akce od roku 2011
            </p>
          </motion.div>
        </div>
      </section>

      <Gallery />

      <Footer />
    </>
  )
}