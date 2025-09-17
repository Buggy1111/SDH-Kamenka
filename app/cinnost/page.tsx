'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Truck, GraduationCap, Shield, Users, Zap, Droplets, Trophy, Clock, CheckCircle, Car, Wrench, Settings } from 'lucide-react'

export default function CinnostPage() {
  const activities = [
    {
      icon: Truck,
      title: 'Zásahová jednotka JPO III',
      description: 'Profesionální výjezdová jednotka připravená 24/7 pro zásahy v okrsku Odry',
      features: ['Požární zásahy', 'Technická pomoc', 'Dopravní nehody', 'Povodně a vichřice'],
      stats: '25+ výjezdů ročně',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: GraduationCap,
      title: 'Mladí hasiči',
      description: 'Kroužek pro děti a mládež od 6 do 18 let s pravidelnými tréninky a soutěžemi',
      features: ['Hasičské dovednosti', 'První pomoc', 'Sportovní příprava', 'Týmová práce'],
      stats: '15 mladých hasičů',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Preventivní činnost',
      description: 'Školení, kontroly a osvěta pro zvýšení požární bezpečnosti v obci',
      features: ['Školení občanů', 'Kontroly hydrantů', 'Požární prevence', 'Osvětové akce'],
      stats: '12+ akcí ročně',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Kulturní a společenské akce',
      description: 'Pořádání akcí pro obyvatele obce a podporu hasičské komunity',
      features: ['Hasičský ples', 'Dětský den', 'Adventní trhy', 'Obecní slavnosti'],
      stats: '8+ akcí ročně',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Droplets,
      title: 'Hasičský sport',
      description: 'Účast v soutěžích požárního sportu na místní, regionální i krajské úrovni',
      features: ['Požární útok', 'Štafeta dvojic', 'Liga Moravskoslezského kraje', 'Okrskové soutěže'],
      stats: 'Krajská liga',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Speciální činnosti',
      description: 'Další aktivity zaměřené na bezpečnost a pomoc občanům',
      features: ['Odchyt rojů', 'Likvidace nebezpečných hmyzu', 'Čištění komunikací', 'Pomoc při akcích'],
      stats: 'Dle potřeby',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const equipment = [
    { name: 'CAS 25 Škoda 706', type: 'Cisterna', year: '1985', capacity: '2500l', color: 'from-red-500 to-red-600', icon: Truck },
    { name: 'DA 8 Avia A21', type: 'Dopravní automobil', year: '1992', capacity: '8 osob', color: 'from-blue-500 to-blue-600', icon: Car },
    { name: 'Motorová stříkačka', type: 'PS 8', year: '2010', capacity: '800 l/min', color: 'from-green-500 to-green-600', icon: Zap },
    { name: 'Rozdělovače', type: 'B-C', count: '4ks', capacity: 'Různé', color: 'from-orange-500 to-orange-600', icon: Settings }
  ]

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
              Naše činnost
            </h1>
            <p className="text-lg text-fire-100 max-w-3xl mx-auto">
              Komplexní přehled všech aktivit a služeb SDH Kamenka pro naši komunitu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hlavní činnosti */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-gray-900 mb-12"
          >
            Naše hlavní činnosti
          </motion.h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col"
              >
                {/* Header with icon */}
                <div className={`p-6 bg-gradient-to-br ${activity.color} text-white min-h-[200px] flex flex-col`}>
                  <activity.icon className="h-9 w-9 mb-3 text-white" />
                  <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-3">{activity.description}</p>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-4 flex-1">
                    {activity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-700 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-black font-bold">Rozsah:</span>
                      <span className="font-bold text-black text-base">{activity.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technika a vybavení */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-gray-900 mb-10"
          >
            Naše technika
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-black font-bold text-base mb-1">{item.type}</p>
                    <div className="grid grid-cols-2 gap-2 text-base text-gray-900 font-semibold">
                      <div>
                        <span className="font-bold text-gray-800">Rok:</span> <span className="text-gray-900">{item.year || item.count}</span>
                      </div>
                      <div>
                        <span className="font-bold text-gray-800">Kapacita:</span> <span className="text-gray-900">{item.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Výsledky a úspěchy */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center mb-10"
          >
            Naše úspěchy v roce 2024
          </motion.h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Trophy, title: '2. místo', description: 'Okrskové soutěže Odry', detail: 'Čas: 18.32s' },
              { icon: Clock, title: '28 výjezdů', description: 'Zásahová činnost', detail: 'Průměrný čas: 4.5 min' },
              { icon: GraduationCap, title: '15 dětí', description: 'Mladí hasiči', detail: 'Nově přijato: 5' }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800 rounded-lg p-6"
              >
                <achievement.icon className="h-9 w-9 text-fire-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-200 mb-1 text-sm font-medium">{achievement.description}</p>
                <p className="text-sm text-fire-300 font-medium">{achievement.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}