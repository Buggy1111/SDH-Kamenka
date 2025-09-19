'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search,
  Menu,
  X,
  Flame,
  Phone
} from 'lucide-react'
import NavigationDesktop from './NavigationDesktop'
import NavigationMobile from './NavigationMobile'
import NavigationSearch from './NavigationSearch'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fix infinite scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* ULTRA MODERN NAVIGATION - APPLE INSPIRED */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-gray-100/50 shadow-sm'
            : 'bg-black/30 backdrop-blur-md'
        }`}
      >
        {/* Premium Background Effects */}
        {!isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
        )}
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
            {/* LOGO - Minimal Apple Style */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-2 sm:p-2.5 lg:p-3 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-br from-red-600 to-orange-500 shadow-lg shadow-red-500/30'
                    : 'bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.05, 0.95, 1.02, 1],
                    rotate: [-2, 1, -1, 2, -2],
                    y: [0, -2, 1, -1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: 'bottom center' }}
                >
                  <Flame className="h-5 w-5 lg:h-6 lg:w-6 text-white drop-shadow-[0_0_8px_rgba(255,69,0,0.9)]" />
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
                    <Flame className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-300" />
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
                    <Flame className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400" />
                  </motion.div>
                </motion.div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-red-600/20 to-transparent blur-xl animate-pulse" />
              </motion.div>
              
              <div className="block">
                <div className={`font-display text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                }`}>
                  SDH Kamenka
                </div>
                <div className={`text-[10px] sm:text-xs font-medium ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                }`}>
                  Est. 1883
                </div>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION - Centered Apple Style */}
            <NavigationDesktop isScrolled={isScrolled} />

            {/* RIGHT ACTIONS - Modern Minimal */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
              >
                <Search className="h-4 w-4" />
              </motion.button>

              {/* Emergency Contact */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:150"
                className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                <Phone className="h-4 w-4" />
                <span>150</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <NavigationMobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {/* SEARCH OVERLAY */}
      <NavigationSearch
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </>
  )
}