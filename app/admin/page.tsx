'use client'

import { motion } from 'framer-motion'
import { Settings, Info, AlertTriangle } from 'lucide-react'

export default function AdminPage() {


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Settings className="h-6 w-6 text-fire-600" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel - SDH Kamenka</h1>
          </div>

          {/* Info Section */}
          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-base font-semibold text-blue-900 mb-2">Stav webových stránek</h2>
                  <p className="text-blue-800 mb-3 text-sm">
                    Webové stránky SDH Kamenka jsou v plně funkčním stavu. Facebook API integrace byla odstraněna
                    pro zjednodušení a lepší výkon.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <strong>Aktivní funkce:</strong>
                      <ul className="list-disc list-inside text-blue-700 mt-1 space-y-1">
                        <li>Responzivní design</li>
                        <li>Lazy loading komponent</li>
                        <li>SEO optimalizace</li>
                        <li>Moderní navigace</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Technologie:</strong>
                      <ul className="list-disc list-inside text-blue-700 mt-1 space-y-1">
                        <li>Next.js 15.5.3</li>
                        <li>React 19.1.0</li>
                        <li>Tailwind CSS 4</li>
                        <li>Framer Motion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 rounded-full p-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-green-900 mb-2">Systém je online</h3>
                  <p className="text-green-800 text-sm">
                    Všechny služby fungují správně. Webové stránky jsou optimalizované pro rychlost a dostupnost.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Note about Facebook API removal */}
          <div className="mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-yellow-900 mb-2">Poznámka o Facebook integraci</h3>
                  <p className="text-yellow-800 text-sm">
                    Facebook API integrace byla kompletně odstraněna pro zjednodušení architektury a lepší výkon webu.
                    Obsah je nyní statický a plně optimalizovaný.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}