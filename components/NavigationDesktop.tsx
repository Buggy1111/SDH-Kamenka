'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { navItems } from './navigationData'

interface NavigationDesktopProps {
  isScrolled: boolean
}

export default function NavigationDesktop({ isScrolled }: NavigationDesktopProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
      <div className={`flex items-center gap-1 p-1.5 rounded-2xl transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-50/80 backdrop-blur-sm border border-gray-200/50'
          : 'bg-white/10 backdrop-blur-md border border-white/20'
      }`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-xl font-medium text-xs lg:text-sm transition-all duration-300 group ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/25 scale-105 ring-2 ring-gray-900/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-fire-600 hover:bg-white/80'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                <item.icon className="h-3 w-3 lg:h-4 lg:w-4" />
                <span>{item.label}</span>
                {item.submenu && (
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                )}
              </Link>

              {/* ULTRA MODERN MEGA DROPDOWN */}
              <AnimatePresence>
                {item.submenu && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] xl:w-[560px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border ${
                      isScrolled
                        ? 'bg-white/95 backdrop-blur-2xl border-gray-200/50'
                        : 'bg-gray-900/95 backdrop-blur-2xl border-white/10'
                    }`}
                  >
                    {/* Dropdown Header */}
                    <div className={`px-6 py-4 border-b ${
                      isScrolled ? 'border-gray-100' : 'border-white/10'
                    }`}>
                      <h3 className={`text-lg font-semibold ${
                        isScrolled ? 'text-gray-900' : 'text-white'
                      }`}>
                        {item.label}
                      </h3>
                      <p className={`text-sm ${
                        isScrolled ? 'text-gray-600' : 'text-gray-300'
                      }`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Grid Layout - 2 Columns Side by Side */}
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`group flex items-start gap-3 p-4 rounded-xl transition-all duration-200 ${
                              isScrolled
                                ? 'hover:bg-fire-50 hover:border-fire-200 border border-transparent'
                                : 'hover:bg-white/10 hover:border-white/20 border border-transparent'
                            }`}
                          >
                            <div className={`p-2 rounded-lg transition-colors ${
                              isScrolled
                                ? 'bg-fire-100 text-fire-600 group-hover:bg-fire-200'
                                : 'bg-white/20 text-white group-hover:bg-white/30'
                            }`}>
                              {subItem.icon && <subItem.icon className="h-4 w-4" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-medium text-sm ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                              }`}>
                                {subItem.label}
                              </div>
                              <div className={`text-xs mt-1 ${
                                isScrolled ? 'text-gray-600' : 'text-gray-300'
                              }`}>
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}