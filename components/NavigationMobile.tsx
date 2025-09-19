'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronDown,
  MapPin,
  Phone,
  Flame
} from 'lucide-react'
import { navItems } from './navigationData'

interface NavigationMobileProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  setIsSearchOpen: (open: boolean) => void
}

export default function NavigationMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsSearchOpen
}: NavigationMobileProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Premium Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Ultra Luxury Slide Panel with Fire Theme */}
          <motion.div
            initial={{ x: '100%', scale: 0.95 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: '100%', scale: 0.95 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 250,
              mass: 0.8
            }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(31,41,55,0.98) 50%, rgba(0,0,0,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(239, 68, 68, 0.1)'
            }}
          >
            {/* Ultra Luxury Header with Fire Elements */}
            <div className="relative p-6 pt-16">
              <div className="absolute inset-0 bg-gradient-to-br from-fire-600/20 via-fire-700/10 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-500 to-transparent"></div>

              <div className="relative flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-fire-400 to-fire-600 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative p-4 bg-gradient-to-br from-fire-600 to-fire-800 rounded-2xl border border-fire-500/30">
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
                    >
                      <Flame className="h-7 w-7 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                </motion.div>

                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-display font-bold text-white mb-1"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                  >
                    SDH Kamenka
                  </motion.h2>
                  <p className="text-fire-200 text-sm font-medium">
                    Est. 1883 • Protecting Community
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-fire-500/50 to-transparent"></div>
            </div>

            {/* Navigation Items with Premium Design */}
            <div className="flex-1 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4 max-h-[calc(100vh-250px)]">
              <div className="space-y-2 sm:space-y-3">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-r from-fire-600/20 to-fire-700/10 border border-fire-500/30 text-white scale-[1.02]'
                            : 'text-gray-300 hover:bg-white/5 hover:border-fire-500/20 border border-transparent active:scale-95'
                        }`}
                        style={{
                          backdropFilter: isActive ? 'blur(10px)' : 'none',
                          boxShadow: isActive ? '0 8px 32px rgba(220, 38, 38, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : 'none'
                        }}
                      >
                        {/* Background glow for active item */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-fire-600/10 to-fire-700/5 animate-pulse"></div>
                        )}

                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          className={`relative z-10 p-3 rounded-xl transition-all ${
                            isActive
                              ? 'bg-gradient-to-br from-fire-500 to-fire-600 shadow-lg shadow-fire-500/30'
                              : 'bg-white/10 text-fire-400 group-hover:bg-fire-500/20 group-hover:text-fire-300'
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                        </motion.div>

                        <div className="flex-1 relative z-10">
                          <div className={`font-bold text-base mb-1 ${
                            isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                          }`}>
                            {item.label}
                          </div>
                          <div className={`text-xs font-medium ${
                            isActive ? 'text-fire-200' : 'text-gray-400 group-hover:text-fire-300'
                          }`}>
                            {item.description}
                          </div>
                        </div>

                        <motion.div
                          animate={{ x: isActive ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          <ChevronDown className={`h-4 w-4 transition-colors ${
                            isActive ? 'text-fire-300' : 'text-gray-500 group-hover:text-fire-400'
                          }`} />
                        </motion.div>
                      </Link>

                      {/* Luxury Expandable Submenu */}
                      <AnimatePresence>
                        {item.submenu && isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="ml-6 mt-3 space-y-2 overflow-hidden"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1, duration: 0.3 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-fire-600/10 hover:border-fire-500/30 transition-all duration-300 active:scale-95"
                                  style={{
                                    backdropFilter: 'blur(5px)'
                                  }}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="p-2 bg-gradient-to-br from-fire-500/20 to-fire-600/20 rounded-lg border border-fire-500/20 group-hover:from-fire-500/30 group-hover:to-fire-600/30 transition-all"
                                  >
                                    {subItem.icon && <subItem.icon className="h-4 w-4 text-fire-400 group-hover:text-fire-300" />}
                                  </motion.div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-sm text-gray-200 group-hover:text-white transition-colors">
                                      {subItem.label}
                                    </div>
                                    <div className="text-xs text-gray-400 group-hover:text-fire-300 transition-colors">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Ultra Luxury Footer */}
            <div className="relative p-6 border-t border-fire-500/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Decorative top line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-fire-500/50 to-transparent"></div>

              <div className="relative space-y-4">
                {/* Status indicator */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-500/50"
                  />
                  <span className="text-sm font-medium text-gray-300">
                    Hasičská stanice v pohotovosti
                  </span>
                </div>

                {/* Branding */}
                <div className="text-center">
                  <p className="text-xs text-gray-400 font-medium">
                    SDH Kamenka • Est. 1883
                  </p>
                  <p className="text-xs text-fire-400 mt-1">
                    Protecting Our Community Since 1883
                  </p>
                </div>
              </div>

              {/* Ambient glow effects */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-fire-600/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}