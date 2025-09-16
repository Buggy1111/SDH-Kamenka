'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Trophy, Heart, Flame, GraduationCap } from 'lucide-react'

export default function KalendarPage() {
  const events = [
    {
      id: 1,
      title: 'Hasičský ples 2025',
      date: '2025-02-15',
      time: '20:00',
      location: 'Sokolovna Kamenka',
      type: 'Kulturní akce',
      description: 'Tradiční hasičský ples s bohatým programem, tombolou a taneční zábavou',
      icon: Heart,
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 2,
      title: 'Výroční valná hromada',
      date: '2025-02-22',
      time: '17:00', 
      location: 'Hasičská zbrojnice',
      type: 'Oficiální',
      description: 'Hodnocení činnosti za uplynulý rok a plánování na rok 2025',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Začátek přípravy na sezónu',
      date: '2025-03-01',
      time: '16:00',
      location: 'Hasičská zbrojnice',
      type: 'Trénink',
      description: 'Zahájení přípravy na hasičskou sezónu 2025 - kontrola techniky',
      icon: Flame,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Mladí hasiči - nábor',
      date: '2025-03-08',
      time: '16:00',
      location: 'Hasičská zbrojnice',
      type: 'Mladí hasiči',
      description: 'Den otevřených dveří pro nové zájemce o kroužek mladých hasičů',
      icon: GraduationCap,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 5,
      title: 'Okrskové cvičení',
      date: '2025-04-12',
      time: '14:00',
      location: 'Odry - náměstí',
      type: 'Soutěž',
      description: 'Společné cvičení hasičů z okrsku Odry',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const monthlyEvents = events.reduce((acc, event) => {
    const month = new Date(event.date).toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })
    if (!acc[month]) acc[month] = []
    acc[month].push(event)
    return acc
  }, {} as Record<string, typeof events>)

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
      <section className="pt-24 pb-12 bg-gradient-to-br from-fire-600 via-fire-700 to-fire-800 text-white">
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Celkem akcí', value: events.length, color: 'fire' },
              { label: 'Tento měsíc', value: 2, color: 'blue' },
              { label: 'Soutěže', value: 1, color: 'yellow' },
              { label: 'Kulturní akce', value: 1, color: 'pink' },
              { label: 'Tréninky', value: 1, color: 'green' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <div className={`text-xl font-bold mb-1 ${stat.color === 'fire' ? 'text-fire-600' : `text-${stat.color}-600`}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-800 font-medium">{stat.label}</div>
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
            className="text-2xl md:text-3xl font-display font-bold text-center mb-10"
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
                <h3 className="text-xl font-bold text-gray-900 mb-5 capitalize border-l-4 border-fire-500 pl-3">
                  {month}
                </h3>
                
                <div className="space-y-4">
                  {monthEvents.map((event, index) => (
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
                              <h4 className="text-lg font-bold text-gray-900 mb-1">
                                {event.title}
                              </h4>
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                {event.type}
                              </span>
                            </div>
                            <event.icon className={`h-6 w-6 text-fire-500`} />
                          </div>

                          <p className="text-gray-700 mb-3 text-sm">{event.description}</p>

                          <div className="flex flex-wrap gap-4 text-xs text-gray-900 font-semibold">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
            <div className="bg-fire-50 border border-fire-200 rounded-lg p-8 max-w-2xl mx-auto">
              <Calendar className="h-9 w-9 text-fire-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Chcete být informováni o všech akcích?
              </h3>
              <p className="text-gray-800 mb-3 text-sm">
                Sledujte nás na Facebooku nebo se přihlaste k odběru novinek
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-fire-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-fire-700 transition-colors text-sm">
                  Sledovat na Facebooku
                </button>
                <button className="border border-fire-600 text-fire-600 px-5 py-2 rounded-lg font-semibold hover:bg-fire-50 transition-colors text-sm">
                  Přihlásit k odběru
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}