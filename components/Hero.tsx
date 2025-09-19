'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Flame, Shield, Users, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {

  const stats = [
    { icon: Shield, label: 'Let zkušeností', value: '142' },
    { icon: Users, label: 'Aktivních členů', value: '42' },
    { icon: Flame, label: 'Zásahů ročně', value: '30+' },
    { icon: Clock, label: 'Minut do výjezdu', value: '< 5' },
  ]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-orange-800" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <Link href="/o-nas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass-effect px-4 py-2 text-sm font-medium cursor-pointer hover:glass-effect-hover transition-all"
            >
              <Flame className="h-4 w-4 text-orange-400" />
              <span>SDH Kamenka • Okres Nový Jičín</span>
            </motion.div>
          </Link>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            POMÁHÁME A{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              CHRÁNÍME
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Sbor dobrovolných hasičů Kamenka • Okrsek Odry • JPO III
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-9"
          >
            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base text-white transition-all hover:from-red-700 hover:to-orange-700 shadow-xl hover:shadow-2xl border-2 border-red-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Staň se členem
                </span>
              </motion.button>
            </Link>
            <Link href="/o-nas">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-white/20 backdrop-blur-md border-2 border-white/30 px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base text-white transition-all hover:bg-white/30 hover:border-white/50 shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Poznej náš sbor
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => {
              // Definuj kam který box naviguje
              const getNavigationPath = (label: string) => {
                switch (label) {
                  case 'Let zkušeností': return '/o-nas'
                  case 'Aktivních členů': return '/o-nas'
                  case 'Zásahů ročně': return '/cinnost'
                  case 'Minut do výjezdu': return '/cinnost'
                  default: return '/o-nas'
                }
              }

              return (
                <Link key={stat.label} href={getNavigationPath(stat.label)}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/95 backdrop-blur-sm border-2 border-white/90 rounded-lg p-2 sm:p-3 shadow-2xl cursor-pointer hover:shadow-3xl transition-all hover:border-red-300"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      WebkitBackdropFilter: 'blur(4px)',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1 sm:mb-2 text-red-600" />
                    <div className="text-2xl sm:text-3xl font-black text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-800 font-bold mt-1">{stat.label}</div>
                    {/* Hover indikátor */}
                    <div className="hidden sm:block mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Klikněte pro více info →
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          onClick={() => {
            const nextSection = document.querySelector('#about-section')
            nextSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-105 transition-all"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="h-8 w-8 text-white/80 hover:text-white" />
          </motion.div>
        </motion.button>
      </div>

    </section>
  )
}