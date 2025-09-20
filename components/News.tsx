'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Flame, Trophy, Users, CalendarPlus, Download, ChevronDown } from 'lucide-react'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale/cs'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { generateCalendarLinks, type CalendarEvent } from '@/lib/calendar-utils'
import * as LucideIcons from 'lucide-react'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  icon: string
  featured?: boolean
}

interface NewsData {
  news: NewsItem[]
  upcomingEvents: CalendarEvent[]
  stats2025: {
    vyjezdy: number
    cviceni: number
    skoleni: number
  }
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsData>({
    news: [],
    upcomingEvents: [],
    stats2025: { vyjezdy: 0, cviceni: 0, skoleni: 0 }
  })
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then((data: NewsData) => {
        setNewsData(data)
      })
      .catch(error => {
        console.error('Error loading news data:', error)
      })
  }, [])

  const getIcon = (iconName: string) => {
    const icons = {
      Trophy,
      Users,
      Flame
    } as any
    return icons[iconName] || Flame
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Aktuality
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Nejnovější zprávy z činnosti našeho sboru
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2 space-y-6">
            {newsData.news.map((item, index) => {
              const IconComponent = getIcon(item.icon)
              return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                  item.featured ? 'ring-2 ring-fire-500' : ''
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/5 h-32 md:h-auto bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="p-6 md:w-4/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold rounded-full shadow-md">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-900 text-sm font-bold">
                        <Calendar className="h-4 w-4 text-red-600" />
                        {format(new Date(item.date), 'd. MMMM yyyy', { locale: cs })}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-800 mb-4">
                      {item.excerpt}
                    </p>
                    
                  </div>
                </div>
              </motion.article>
              )
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-fire-50 to-orange-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-fire-600" />
                Nadcházející akce
              </h3>
              
              <div className="space-y-3">
                {newsData.upcomingEvents.map((event, index) => {
                  const calendarLinks = generateCalendarLinks(event)
                  const isExpanded = expandedEvent === event.title

                  return (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg overflow-hidden"
                    >
                      <div
                        className="p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => setExpandedEvent(isExpanded ? null : event.title)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{event.title}</p>
                            <div className="flex items-center gap-1 text-base text-gray-900 font-bold">
                              <Clock className="h-4 w-4 text-red-600" />
                              {event.time}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xl font-black rounded-lg shadow-lg">
                              {event.date}
                            </span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-gray-600"
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 pt-0 border-t border-gray-100">
                          <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                          <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">Místo:</span> {event.location}
                          </p>

                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold text-gray-700">Přidat do kalendáře:</p>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(calendarLinks.google, '_blank')
                                }}
                                className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                              >
                                <CalendarPlus className="h-4 w-4" />
                                Google
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(calendarLinks.outlook, '_blank')
                                }}
                                className="flex items-center justify-center gap-1 px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
                              >
                                <CalendarPlus className="h-4 w-4" />
                                Outlook
                              </button>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                calendarLinks.ics()
                              }}
                              className="flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all text-sm font-medium shadow-md"
                            >
                              <Download className="h-4 w-4" />
                              Stáhnout .ics soubor
                            </button>
                            <p className="text-xs text-gray-500 text-center italic">
                              Připomínky: 1 den a 2 hodiny předem
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              <Link href="/kalendar" className="block w-full">
                <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-xl">
                  Zobrazit kalendář
                </button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Statistiky 2025</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">Výjezdů</span>
                  <span className="font-bold text-2xl">{newsData.stats2025.vyjezdy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">Cvičení</span>
                  <span className="font-bold text-2xl">{newsData.stats2025.cviceni}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">Školení</span>
                  <span className="font-bold text-2xl">{newsData.stats2025.skoleni}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}