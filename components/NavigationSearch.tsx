'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  X,
  ChevronDown,
  Camera,
  Phone,
  Flame,
  FileText,
  Info,
  History as HistoryIcon,
  Loader2
} from 'lucide-react'
import { SearchResult, searchDatabase } from './navigationData'

interface NavigationSearchProps {
  isSearchOpen: boolean
  setIsSearchOpen: (open: boolean) => void
}

export default function NavigationSearch({ isSearchOpen, setIsSearchOpen }: NavigationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

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
  }, [])

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

  const closeSearch = () => {
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
      closeSearch()
      setSelectedIndex(-1)
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
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
            onClick={closeSearch}
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
                onKeyDown={handleSearchKeyPress}
                className="flex-1 text-lg font-medium text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                autoFocus
              />
              <button
                onClick={closeSearch}
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
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all text-left group ${
                        selectedIndex === index ? 'bg-red-50 border-red-200 border' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="mt-0.5">{getIcon(result.type)}</div>
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
                  ))}
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
                  <Link href="/galerie" onClick={closeSearch} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Camera className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-gray-900">Fotogalerie</span>
                  </Link>
                  <Link href="/kontakt" onClick={closeSearch} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-gray-900">Kontakt</span>
                  </Link>
                  <Link href="/historie" onClick={closeSearch} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <HistoryIcon className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-gray-900">Historie</span>
                  </Link>
                  <Link href="/cinnost" onClick={closeSearch} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
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
  )
}