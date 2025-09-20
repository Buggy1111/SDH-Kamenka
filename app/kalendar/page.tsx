'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Trophy, Heart, Flame, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'
import * as LucideIcons from 'lucide-react'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  type: string
  description: string
  icon: string
  color: string
}

interface CalendarData {
  events: Event[]
  stats: {
    totalEvents: number
    competitions: number
    culturalEvents: number
    trainings: number
    yearsOfExperience: number
  }
}

export default function KalendarPage() {
  const [calendarData, setCalendarData] = useState<CalendarData>({
    events: [],
    stats: {
      totalEvents: 0,
      competitions: 0,
      culturalEvents: 0,
      trainings: 0,
      yearsOfExperience: 142
    }
  })

  useEffect(() => {
    fetch('/data/calendar.json')
      .then(res => res.json())
      .then((data: CalendarData) => {
        setCalendarData(data)
      })
      .catch(error => {
        console.error('Error loading calendar data:', error)
      })
  }, [])

  const getIcon = (iconName: string) => {
    const icons = {
      Heart,
      Trophy,
      GraduationCap,
      Flame,
      Users,
      Calendar,
      Clock,
      MapPin
    } as any
    return icons[iconName] || Heart
  }

  const monthlyEvents = calendarData.events.reduce((acc, event) => {
    const month = new Date(event.date).toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })
    if (!acc[month]) acc[month] = []
    acc[month].push(event)
    return acc
  }, {} as Record<string, Event[]>)

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Kulturní akce': 'bg-pink-100 text-pink-700',
      'Oficiální': 'bg-blue-100 text-blue-700',
      'Trénink': 'bg-orange-100 text-orange-700',
      'Mladí hasiči': 'bg-green-100 text-green-700',
      'Soutěž': 'bg-yellow-100 text-yellow-700'
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Kalendář akcí
            </h1>
            <p className="text-lg text-fire-100 max-w-3xl mx-auto">
              Přehled všech nadcházejících akcí, cvičení a soutěží SDH Kamenka
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rychlý přehled */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Celkem akcí', value: calendarData.stats.totalEvents, color: 'fire' },
              { label: 'Soutěže', value: calendarData.stats.competitions, color: 'yellow' },
              { label: 'Kulturní akce', value: calendarData.stats.culturalEvents, color: 'pink' },
              { label: 'Cvičení', value: calendarData.stats.trainings, color: 'green' },
              { label: 'Let zkušeností', value: calendarData.stats.yearsOfExperience, color: 'blue' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-4 rounded-lg bg-gradient-to-br ${
                  stat.color === 'fire' ? 'from-red-500 to-red-600' :
                  stat.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  stat.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                  stat.color === 'pink' ? 'from-pink-500 to-pink-600' :
                  'from-green-500 to-green-600'
                } text-white`}
              >
                <div className="text-xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kalendář akcí */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center mb-10 text-black"
          >
            Nadcházející akce
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(monthlyEvents).map(([month, monthEvents]) => (
              <motion.div
                key={month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-black mb-5 capitalize border-l-4 border-fire-500 pl-3">
                  {month}
                </h3>
                
                <div className="space-y-4">
                  {monthEvents.map((event, index) => {
                    const IconComponent = getIcon(event.icon)
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                      >
                        <div className="flex">
                          {/* Date column */}
                          <div className={`w-24 flex-shrink-0 bg-gradient-to-br ${event.color} text-white p-4 flex flex-col items-center justify-center`}>
                            <div className="text-xl font-bold">
                              {new Date(event.date).getDate()}
                            </div>
                            <div className="text-xs uppercase">
                              {new Date(event.date).toLocaleDateString('cs-CZ', { month: 'short' })}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-lg font-bold text-black mb-1">
                                  {event.title}
                                </h4>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                  {event.type}
                                </span>
                              </div>
                              <IconComponent className={`h-6 w-6 text-fire-600`} />
                            </div>

                          <p className="text-black mb-3 text-sm font-medium">{event.description}</p>

                          <div className="flex flex-wrap gap-4 text-xs text-black font-bold">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-gray-800" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-gray-800" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
              <Calendar className="h-9 w-9 text-white mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Chcete být informováni o všech akcích?
              </h3>
              <p className="text-white mb-4 text-sm font-medium">
                Sledujte nás na Facebooku a buďte vždy informováni o našich akcích
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.facebook.com/p/SDH-Kamenka-100054494319025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-base shadow-md inline-block"
                >
                  Sledovat na Facebooku
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}