'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, Heart, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const features = [
    {
      icon: Calendar,
      title: 'Založeno 1879',
      description: 'Více než 142 let tradice a služby občanům'
    },
    {
      icon: Award,
      title: 'Oceněný sbor',
      description: 'Držitel mnoha ocenění z hasičských soutěží'
    },
    {
      icon: Heart,
      title: 'Komunita',
      description: 'Aktivní zapojení do života obce Kamenka'
    },
    {
      icon: Target,
      title: 'Profesionalita',
      description: 'Pravidelná školení a moderní vybavení'
    }
  ]

  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Kdo jsme
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Sbor dobrovolných hasičů Kamenka je hrdou součástí obce již více než století. 
            Spojujeme tradici s moderním přístupem k požární ochraně.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/uvod.webp"
                  alt="SDH Kamenka - náš sbor"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                  loading="eager"
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Náš tým • 2025</p>
                <p className="text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">42 aktivních členů</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-800">
              <p>
                SDH Kamenka je součástí obce Kamenka, která patří k městu Odry v okrese 
                Nový Jičín. Naše jednotka JPO III zajišťuje požární ochranu pro místní 
                obyvatele a je součástí okrsku Odry od roku 2006.
              </p>
              <p>
                Původně jsme byli součástí okrsku Heřmánky, který sdružoval 9 hasičských 
                sborů z okolních obcí. Naše hasičárna se nachází v centru Kamenky a 
                disponujeme moderním vybavením pro zásahovou činnost.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg mb-3">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-800 font-medium mt-1">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/o-nas">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-xl hover:shadow-2xl border-2 border-red-700"
              >
                Více o naší historii →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}