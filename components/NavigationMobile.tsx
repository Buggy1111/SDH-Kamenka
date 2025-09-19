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

  // Funkce pro získání barev ikon
  const getIconColor = (label: string, isActive: boolean) => {
    if (isActive) return 'text-white'

    switch (label) {
      case 'Úvod':
        return 'text-blue-400 group-hover:text-blue-300'
      case 'O nás':
        return 'text-green-400 group-hover:text-green-300'
      case 'Historie':
        return 'text-amber-400 group-hover:text-amber-300'
      case 'Činnost':
        return 'text-red-400 group-hover:text-red-300'
      case 'Kalendář':
        return 'text-purple-400 group-hover:text-purple-300'
      case 'Galerie':
        return 'text-pink-400 group-hover:text-pink-300'
      case 'Kontakt':
        return 'text-cyan-400 group-hover:text-cyan-300'
      default:
        return 'text-fire-400 group-hover:text-fire-300'
    }
  }

  const getSubmenuIconColor = (label: string) => {
    switch (label) {
      case 'Soutěže':
        return 'text-yellow-400 group-hover:text-yellow-300'
      case 'Cvičení':
        return 'text-orange-400 group-hover:text-orange-300'
      case 'Zábava & Akce':
        return 'text-purple-400 group-hover:text-purple-300'
      default:
        return 'text-pink-400 group-hover:text-pink-300'
    }
  }

  const getSubmenuIconBackground = (label: string) => {
    switch (label) {
      case 'Soutěže':
        return 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/20 group-hover:from-yellow-500/30 group-hover:to-yellow-600/30'
      case 'Cvičení':
        return 'from-orange-500/20 to-orange-600/20 border-orange-500/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30'
      case 'Zábava & Akce':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/20 group-hover:from-purple-500/30 group-hover:to-purple-600/30'
      default:
        return 'from-pink-500/20 to-pink-600/20 border-pink-500/20 group-hover:from-pink-500/30 group-hover:to-pink-600/30'
    }
  }

  const getActiveIconBackground = (label: string) => {
    switch (label) {
      case 'Úvod':
        return 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30'
      case 'O nás':
        return 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30'
      case 'Historie':
        return 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30'
      case 'Činnost':
        return 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30'
      case 'Kalendář':
        return 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30'
      case 'Galerie':
        return 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/30'
      case 'Kontakt':
        return 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30'
      default:
        return 'bg-gradient-to-br from-fire-500 to-fire-600 shadow-lg shadow-fire-500/30'
    }
  }

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
            className="absolute inset-0 h-full w-full shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(31,41,55,0.98) 50%, rgba(0,0,0,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(239, 68, 68, 0.1)'
            }}
          >

            {/* Navigation Items with Premium Design - Auto Responsive Layout */}
            <div className="flex-1 px-4 flex flex-col justify-center min-h-0">
              <div className="space-y-1 sm:space-y-2" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 160px)',
                maxHeight: 'calc(100vh - 120px)'
              }}>
                {navItems.map((item, index) => {
                  // Fix for home page - exact match only for root path
                  const isActive = item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(item.href + '/')

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
                        className={`group relative flex items-center gap-2 rounded-lg transition-all duration-300 overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-r from-fire-600/20 to-fire-700/10 border border-fire-500/30 text-white scale-[1.02]'
                            : 'text-gray-300 hover:bg-white/5 hover:border-fire-500/20 border border-transparent active:scale-95'
                        }`}
                        style={{
                          padding: 'clamp(0.5rem, 2vh, 0.75rem) clamp(0.5rem, 2vw, 1rem)',
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
                          className={`relative z-10 p-1.5 sm:p-2 rounded-lg transition-all ${
                            isActive
                              ? getActiveIconBackground(item.label)
                              : 'bg-white/10 group-hover:bg-white/20'
                          }`}
                        >
                          <item.icon className={`${getIconColor(item.label, isActive)}`}
                            style={{
                              width: 'clamp(1rem, 3vw, 1.25rem)',
                              height: 'clamp(1rem, 3vw, 1.25rem)'
                            }} />
                        </motion.div>

                        <div className="flex-1 relative z-10">
                          <div className={`font-bold ${
                            isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                          }`}
                          style={{
                            fontSize: 'clamp(1rem, 4vw, 1.125rem)'
                          }}>
                            {item.label}
                          </div>
                        </div>

                        <motion.div
                          animate={{ x: isActive ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors ${
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
                                    className={`p-2 bg-gradient-to-br ${getSubmenuIconBackground(subItem.label)} rounded-lg border transition-all`}
                                  >
                                    {subItem.icon && <subItem.icon className={`h-4 w-4 ${getSubmenuIconColor(subItem.label)}`} />}
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

            {/* Ultra Luxury Footer - Compact */}
            <div className="relative p-3 border-t border-fire-500/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Decorative top line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-fire-500/50 to-transparent"></div>

              <div className="relative space-y-2">
                {/* Status indicator */}
                <div className="flex items-center justify-center gap-2">
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
                    className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-500/50"
                  />
                  <span className="text-xs font-medium text-gray-300">
                    Hasičská stanice v pohotovosti
                  </span>
                </div>

                {/* Branding */}
                <div className="text-center">
                  <p className="text-xs text-gray-400 font-medium">
                    SDH Kamenka • Est. 1883
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