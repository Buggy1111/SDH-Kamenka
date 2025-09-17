'use client'

import { motion } from 'framer-motion'
import { Droplets, GraduationCap, Shield, Truck, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Zásahová jednotka',
      description: 'Profesionální výjezdová jednotka JPO III připravená 24/7',
      color: 'from-red-500 to-red-600',
      stats: '30+ výjezdů ročně'
    },
    {
      icon: GraduationCap,
      title: 'Mladí hasiči',
      description: 'Kroužek pro děti od 6 let s pravidelnými tréninky',
      color: 'from-blue-500 to-blue-600',
      stats: '15 mladých hasičů'
    },
    {
      icon: Shield,
      title: 'Prevence',
      description: 'Školení, ukázky a preventivní kontroly v obci',
      color: 'from-green-500 to-green-600',
      stats: '10+ akcí ročně'
    },
    {
      icon: Users,
      title: 'Kulturní akce',
      description: 'Hasičský ples, dětský den a další společenské akce',
      color: 'from-purple-500 to-purple-600',
      stats: '5+ akcí ročně'
    },
    {
      icon: Zap,
      title: 'Technická pomoc',
      description: 'Pomoc při živelných pohromách a technických zásazích',
      color: 'from-orange-500 to-orange-600',
      stats: 'Rychlá reakce'
    },
    {
      icon: Droplets,
      title: 'Hasičský sport',
      description: 'Účast v soutěžích požárního sportu',
      color: 'from-cyan-500 to-cyan-600',
      stats: 'Liga MSK'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Naše činnost
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Komplexní služby pro bezpečnost a rozvoj naší komunity
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
                  <div className="bg-gray-800 rounded-2xl p-6 h-full border border-gray-700 hover:border-gray-500 hover:shadow-xl transition-all">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 group-hover:text-gray-100 font-medium mb-4 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-bold rounded-lg shadow-lg">
                    {service.stats}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/15 transition-all pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/cinnost">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-2xl hover:shadow-orange-500/30 hover:shadow-3xl hover:scale-105 border-2 border-orange-500">
              Zjistit více o naší činnosti
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}