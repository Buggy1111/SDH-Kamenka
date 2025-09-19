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

          {/* Ultra Modern Slide Panel */}
          <motion.div
            initial={{ x: '100%', scale: 0.95 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: '100%', scale: 0.95 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/98 backdrop-blur-3xl shadow-2xl"
            style={{
              backgroundImage: 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.05), transparent 50%)'
            }}
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black p-4 pt-12 sm:p-6 sm:pt-16">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/10"></div>
              <div className="relative flex items-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 sm:p-3 bg-red-600 backdrop-blur-sm rounded-xl border border-red-500 shadow-lg shadow-red-600/30"
                >
                  <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-md" />
                </motion.div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">SDH Kamenka</h2>
                  <p className="text-white/90 text-xs sm:text-sm drop-shadow-md">Est. 1883 • 24/7 Ready</p>
                </div>
              </div>
            </div>

            {/* Navigation Items with Premium Design */}
            <div className="flex-1 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4 max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-240px)]">
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
                        className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-[1.02]'
                            : 'text-gray-700 hover:bg-gray-50 active:scale-95'
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`p-2 sm:p-3 rounded-xl transition-all ${
                            isActive
                              ? 'bg-white/20'
                              : 'bg-fire-50 text-fire-600 group-hover:bg-fire-100'
                          }`}
                        >
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm sm:text-base">{item.label}</div>
                          <div className={`text-xs ${
                            isActive ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {item.description}
                          </div>
                        </div>
                        <ChevronDown className={`h-4 w-4 opacity-50 ${
                          isActive ? 'text-white/70' : 'text-gray-400'
                        }`} />
                      </Link>

                      {/* Expandable Submenu */}
                      <AnimatePresence>
                        {item.submenu && isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 p-3 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:text-fire-600 transition-all duration-200 active:scale-95"
                                >
                                  <div className="p-2 bg-gray-100 rounded-lg">
                                    {subItem.icon && <subItem.icon className="h-3 w-3" />}
                                  </div>
                                  <div>
                                    <div className="font-medium">{subItem.label}</div>
                                    <div className="text-xs text-gray-400">{subItem.description}</div>
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

            {/* Premium Bottom Actions */}
            <div className="p-4 bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/50">
              {/* Quick Actions Row */}
              <div className="flex gap-3 mb-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsSearchOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200"
                >
                  <Search className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Hledat</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-fire-100 hover:bg-fire-200 rounded-xl transition-all duration-200"
                >
                  <MapPin className="h-4 w-4 text-fire-600" />
                </motion.button>
              </div>


              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-2 mt-2 mb-4 text-xs text-gray-500">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span>Hasičská stanice je v pohotovosti</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}