'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Flame, Trophy, Users } from 'lucide-react'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale/cs'
import Link from 'next/link'

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Kamenský špalek 2025',
      excerpt: 'Tradiční setkání Kamenský Špalek se konalo 13. září 2025. Skvělá atmosféra a účast!',
      date: new Date('2025-09-13'),
      category: 'Akce',
      icon: Trophy,
      image: null,
      featured: true
    },
    {
      id: 2,
      title: 'Super prázdniny 2025',
      excerpt: 'Prázdninové akce a zábava pro děti proběhly v srpnu. Děti si užily spoustu zábavy!',
      date: new Date('2025-08-09'),
      category: 'Děti',
      icon: Users,
      image: null
    },
    {
      id: 3,
      title: 'Soutěž Véska 2025',
      excerpt: 'Naši hasiči se zúčastnili hasičské soutěže ve Vésce dne 27. července 2025.',
      date: new Date('2025-07-27'),
      category: 'Soutěže',
      icon: Flame,
      image: null
    }
  ]

  const upcomingEvents = [
    { date: '15.2.', title: 'Hasičský ples', time: '20:00' },
    { date: '22.2.', title: 'Výroční valná hromada', time: '17:00' },
    { date: '1.3.', title: 'Začátek přípravy na sezónu', time: '16:00' }
  ]

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
            {news.map((item, index) => (
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
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="p-6 md:w-4/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold rounded-full shadow-md">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-900 text-sm font-bold">
                        <Calendar className="h-4 w-4 text-red-600" />
                        {format(item.date, 'd. MMMM yyyy', { locale: cs })}
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
            ))}
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
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{event.title}</p>
                      <div className="flex items-center gap-1 text-base text-gray-900 font-bold">
                        <Clock className="h-4 w-4 text-red-600" />
                        {event.time}
                      </div>
                    </div>
                    <span className="inline-flex px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xl font-black rounded-lg shadow-lg">
                      {event.date}
                    </span>
                  </motion.div>
                ))}
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
                  <span className="font-bold text-2xl">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">Cvičení</span>
                  <span className="font-bold text-2xl">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">Školení</span>
                  <span className="font-bold text-2xl">1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}