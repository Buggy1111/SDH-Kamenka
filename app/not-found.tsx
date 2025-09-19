'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Flame, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated fire background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-8 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
            }}
            animate={{
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.8, 0.4, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glass effect container */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative max-w-2xl w-full text-center"
      >
        {/* Glass morphism card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-yellow-500/20 rounded-3xl blur-xl -z-10" />

          {/* Fire icon with animation */}
          <motion.div
            className="relative mx-auto w-24 h-24 mb-8"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative p-6 bg-gradient-to-br from-red-600 to-orange-700 rounded-2xl border border-red-500/30">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
                style={{ transformOrigin: 'bottom center' }}
              >
                <Flame className="h-12 w-12 text-white drop-shadow-[0_0_8px_rgba(255,69,0,0.9)]" />
                {/* Multiple flame layers for depth */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.1, 0.9, 1],
                    opacity: [0.5, 0.7, 0.4, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                >
                  <Flame className="h-12 w-12 text-yellow-300" />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 0.95, 1.08, 1],
                    opacity: [0.3, 0.5, 0.2, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                >
                  <Flame className="h-12 w-12 text-orange-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* 404 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-8xl font-display font-bold text-white mb-6"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}
          >
            404
          </motion.h1>

          {/* Warning icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <AlertTriangle className="h-6 w-6 text-orange-400" />
            <h2 className="text-2xl font-display font-bold text-white">
              Stránka nenalezena
            </h2>
            <AlertTriangle className="h-6 w-6 text-orange-400" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Požár už uhašen! Stránka, kterou hledáte, nebyla nalezena nebo byla přesunuta.
            <br />
            <span className="text-red-300">Vraťte se na bezpečné území.</span>
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Home button */}
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-xl hover:from-red-700 hover:to-orange-700 transition-all border-2 border-red-500/30"
              >
                <Home className="h-5 w-5" />
                Zpět domů
              </motion.button>
            </Link>

            {/* Back button */}
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
              Zpět
            </motion.button>
          </motion.div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-white/10"
          >
            <p className="text-sm text-gray-400">
              SDH Kamenka • Est. 1883 • Protecting Community Since 1883
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Ambient particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}