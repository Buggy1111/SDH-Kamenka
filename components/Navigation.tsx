'use client'

interface SearchResult {
  type: string;
  title: string;
  description: string;
  url: string;
  keywords: string[];
  relevanceScore?: number;
}

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Users,
  Activity,
  Calendar,
  Camera,
  Phone,
  Search,
  Menu,
  X,
  Flame,
  ChevronDown,
  MapPin,
  Clock,
  Trophy,
  PartyPopper,
  FileText,
  Info,
  History as HistoryIcon,
  Loader2
} from 'lucide-react'

const navItems = [
  {
    label: 'Úvod',
    href: '/',
    icon: Home,
    description: 'Hlavní stránka'
  },
  {
    label: 'O nás',
    href: '/o-nas',
    icon: Users,
    description: 'Kdo jsme a co děláme'
  },
  {
    label: 'Historie',
    href: '/historie',
    icon: Clock,
    description: '145+ let tradice'
  },
  {
    label: 'Činnost',
    href: '/cinnost',
    icon: Activity,
    description: 'Naše aktivity a služby'
  },
  { 
    label: 'Kalendář', 
    href: '/kalendar',
    icon: Calendar,
    description: 'Události a akce'
  },
  {
    label: 'Galerie',
    href: '/galerie',
    icon: Camera,
    description: 'Fotografie z akcí',
    submenu: [
      {
        label: 'Soutěže',
        href: '/galerie#souteze',
        icon: Trophy,
        description: 'Hasičské soutěže a závody'
      },
      {
        label: 'Cvičení',
        href: '/galerie#cviceni',
        icon: Flame,
        description: 'Hasičská cvičení a příprava'
      },
      {
        label: 'Zábava & Akce',
        href: '/galerie#zabava',
        icon: PartyPopper,
        description: 'Společenské akce a zábava'
      }
    ]
  },
  { 
    label: 'Kontakt', 
    href: '/kontakt',
    icon: Phone,
    description: 'Jak nás najít'
  }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Profesionální vyhledávací databáze
  const searchDatabase = useMemo(() => [
    // Stránky
    { type: 'page', title: 'Úvod', description: 'Hlavní stránka SDH Kamenka', url: '/', keywords: ['úvod', 'domů', 'hlavní', 'home'] },
    { type: 'page', title: 'O nás', description: 'Informace o našem sboru', url: '/o-nas', keywords: ['o nás', 'sbor', 'hasiči', 'vedení', 'členové', 'vybavení'] },
    { type: 'page', title: 'Historie', description: '145+ let tradice od roku 1879', url: '/historie', keywords: ['historie', 'tradice', '1879', 'založení', 'minulost', 'kroniky'] },
    { type: 'page', title: 'Činnost', description: 'Naše aktivity a služby', url: '/cinnost', keywords: ['činnost', 'zásahy', 'cvičení', 'aktivity', 'služby'] },
    { type: 'page', title: 'Kalendář', description: 'Události a akce', url: '/kalendar', keywords: ['kalendář', 'události', 'akce', 'termíny', 'program'] },
    { type: 'page', title: 'Galerie', description: 'Fotografie z akcí', url: '/galerie', keywords: ['galerie', 'fotografie', 'obrázky', 'foto', 'soutěže', 'cvičení'] },
    { type: 'page', title: 'Kontakt', description: 'Kontaktní údaje', url: '/kontakt', keywords: ['kontakt', 'telefon', 'adresa', 'email', 'spojení'] },

    // Konkrétní témata
    { type: 'info', title: 'Tísňové volání', description: 'Hasiči: 150, Záchranná služba: 155', url: 'tel:150', keywords: ['tísň', '150', '155', '112', 'nouze', 'pomoc'] },
    { type: 'info', title: 'Mladí hasiči', description: 'Kroužek pro děti od 6 let', url: '/cinnost', keywords: ['mladí hasiči', 'děti', 'kroužek', 'mládež', 'výchova'] },
    { type: 'info', title: 'Hasičské soutěže', description: 'Požární sport a soutěže', url: '/galerie', keywords: ['soutěže', 'sport', 'závody', 'liga', 'véska'] },
    { type: 'info', title: 'Zbrojnice', description: 'Kamenka č.p. 40, 742 35 Odry', url: '/kontakt', keywords: ['zbrojnice', 'adresa', 'kamenka', 'odry'] },
    { type: 'info', title: 'JPO III', description: 'Zásahová jednotka požární ochrany', url: '/o-nas', keywords: ['jpo', 'jednotka', 'zásahy', 'ochrana'] },

    // Historie
    { type: 'history', title: 'Založení 1879', description: 'První hasičská zbrojnice', url: '/historie', keywords: ['1879', 'založení', 'první', 'zbrojnice'] },
    { type: 'history', title: 'Franz Tengler', description: 'Zakladatel sboru 1883', url: '/historie', keywords: ['franz tengler', 'zakladatel', '1883'] },
    { type: 'history', title: 'Dalibor Bűrgermeister', description: 'Starosta od roku 2023', url: '/o-nas', keywords: ['dalibor', 'bűrgermeister', 'starosta'] },
  ], [])

  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      setSelectedIndex(-1)
      return
    }

    setIsSearching(true)

    // Simulace vyhledávání s malým zpožděním pro UX
    setTimeout(() => {
      const searchTerm = query.toLowerCase().trim()

      const results = searchDatabase
        .map(item => {
          // Pokročilý systém bodování relevance
          let score = 0

          // Přesná shoda názvu - nejvyšší priorita
          if (item.title.toLowerCase() === searchTerm) score += 100
          else if (item.title.toLowerCase().includes(searchTerm)) {
            // Bonus za začátek názvu
            if (item.title.toLowerCase().startsWith(searchTerm)) score += 80
            else score += 50
          }

          // Shoda v popisu
          if (item.description.toLowerCase().includes(searchTerm)) score += 20

          // Klíčová slova
          item.keywords.forEach(keyword => {
            if (keyword.toLowerCase() === searchTerm) score += 90
            else if (keyword.toLowerCase().includes(searchTerm)) score += 40
            else if (searchTerm.includes(keyword.toLowerCase())) score += 30
          })

          // Bonus za kratší názvy (relevantnější)
          if (score > 0) score += Math.max(0, 50 - item.title.length)

          // Bonus podle typu obsahu
          if (score > 0) {
            switch (item.type) {
              case 'page': score += 10; break
              case 'info': score += 15; break
              case 'history': score += 5; break
            }
          }

          return { ...item, relevanceScore: score }
        })
        .filter(item => item.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, 8) // Maximálně 8 výsledků

      setSearchResults(results)
      setSelectedIndex(-1) // Reset výběru
      setIsSearching(false)
    }, 180) // Rychlejší odezva
  }, [searchDatabase])

  const handleSearch = (selectedResult?: SearchResult) => {
    if (selectedResult) {
      // Klik na konkrétní výsledek
      if (selectedResult.url.startsWith('tel:')) {
        window.location.href = selectedResult.url
      } else {
        window.location.href = selectedResult.url
      }
    } else if (searchQuery.trim()) {
      // Enter bez vybrání - přejdi na první výsledek
      if (searchResults.length > 0) {
        window.location.href = searchResults[0].url
      }
    }

    setIsSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }

  // Vyhledávání při psaní
  useEffect(() => {
    if (searchQuery.length > 0) {
      performSearch(searchQuery)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchQuery, performSearch])

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        handleSearch(searchResults[selectedIndex])
      } else {
        handleSearch()
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, -1))
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setSearchQuery('')
      setSelectedIndex(-1)
    }
  }

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
        
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* LOGO - Minimal Apple Style */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-2.5 lg:p-3 rounded-xl transition-all duration-300 ${
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
                <div className={`font-display text-sm sm:text-base lg:text-lg font-bold tracking-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                }`}>
                  SDH Kamenka
                </div>
                <div className={`text-xs font-medium ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                }`}>
                  Est. 1883
                </div>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION - Centered Apple Style */}
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

      {/* ULTRA MODERN MOBILE MENU - FULL SCREEN EXPERIENCE */}
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
              className="absolute right-0 top-0 h-full w-full bg-white/98 backdrop-blur-3xl shadow-2xl"
              style={{
                backgroundImage: 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.05), transparent 50%)'
              }}
            >
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 pt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/10"></div>
                <div className="relative flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-red-600 backdrop-blur-sm rounded-xl border border-red-500 shadow-lg shadow-red-600/30"
                  >
                    <Flame className="h-6 w-6 text-white drop-shadow-md" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold text-white drop-shadow-lg">SDH Kamenka</h2>
                    <p className="text-white/90 text-sm drop-shadow-md">Est. 1883 • 24/7 Ready</p>
                  </div>
                </div>
              </div>

              {/* Navigation Items with Premium Design */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-3">
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
                          className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                            isActive 
                              ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-[1.02]' 
                              : 'text-gray-700 hover:bg-gray-50 active:scale-95'
                          }`}
                        >
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className={`p-3 rounded-xl transition-all ${
                              isActive 
                                ? 'bg-white/20' 
                                : 'bg-fire-50 text-fire-600 group-hover:bg-fire-100'
                            }`}
                          >
                            <item.icon className="h-5 w-5" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="font-semibold text-base">{item.label}</div>
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
                    onClick={() => setIsSearchOpen(true)}
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
                
                {/* Emergency Call Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:150"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-semibold text-base shadow-lg shadow-red-500/25 transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="p-1 bg-white/20 rounded-full"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <div>Tísňové volání</div>
                    <div className="text-sm opacity-90">Zavolejte 150</div>
                  </div>
                </motion.a>
                
                {/* Status Indicator */}
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
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

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-start justify-center pt-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => {
                setIsSearchOpen(false)
                setSearchQuery('')
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Hledat..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  className="flex-1 text-lg font-medium text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                  autoFocus
                />
                <button
                  onClick={() => {
                setIsSearchOpen(false)
                setSearchQuery('')
              }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {/* Loading spinner */}
                {isSearching && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-red-600" />
                    <span className="ml-2 text-gray-600">Vyhledávám...</span>
                  </div>
                )}

                {/* Search results */}
                {!isSearching && searchResults.length > 0 && (
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-700 mb-3">
                      Výsledky vyhledávání ({searchResults.length})
                    </div>
                    {searchResults.map((result, index) => {
                      const getIcon = () => {
                        switch (result.type) {
                          case 'page': return <FileText className="h-4 w-4 text-red-600" />
                          case 'info': return <Info className="h-4 w-4 text-blue-600" />
                          case 'history': return <HistoryIcon className="h-4 w-4 text-amber-600" />
                          default: return <Search className="h-4 w-4 text-gray-600" />
                        }
                      }

                      const highlightText = (text: string, query: string) => {
                        if (!query.trim()) return text
                        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
                        const parts = text.split(regex)
                        return parts.map((part, i) =>
                          regex.test(part) ?
                            <mark key={i} className="bg-yellow-200 text-yellow-900 rounded px-0.5">{part}</mark> :
                            part
                        )
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleSearch(result)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all text-left group ${
                            selectedIndex === index ? 'bg-red-50 border-red-200 border' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="mt-0.5">{getIcon()}</div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                              {highlightText(result.title, searchQuery)}
                            </div>
                            <div className="text-sm text-gray-600 mt-0.5 line-clamp-1">
                              {highlightText(result.description, searchQuery)}
                            </div>
                            <div className="text-xs text-gray-400 mt-1 capitalize">
                              {result.type === 'page' ? 'Stránka' :
                               result.type === 'info' ? 'Informace' :
                               result.type === 'history' ? 'Historie' : 'Výsledek'}
                            </div>
                          </div>
                          <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* No results */}
                {!isSearching && searchQuery.length > 0 && searchResults.length === 0 && (
                  <div className="py-8 text-center">
                    <Search className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Žádné výsledky</p>
                    <p className="text-sm text-gray-500">Zkuste jiné klíčové slovo</p>
                  </div>
                )}

                {/* Default quick links when no search */}
                {!isSearching && searchQuery.length === 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 mb-4">Rychlé odkazy</div>
                    <Link href="/galerie" onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery('')
                    }} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <Camera className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-gray-900">Fotogalerie</span>
                    </Link>
                    <Link href="/kontakt" onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery('')
                    }} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <Phone className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-gray-900">Kontakt</span>
                    </Link>
                    <Link href="/historie" onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery('')
                    }} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <HistoryIcon className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-gray-900">Historie</span>
                    </Link>
                    <Link href="/cinnost" onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery('')
                    }} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <Flame className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-gray-900">Činnost</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}