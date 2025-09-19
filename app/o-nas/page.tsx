'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Users, Shield, Trophy, Heart, Target, Truck, Award } from 'lucide-react'
import Image from 'next/image'

export default function ONasPage() {
  const leadership = [
    { position: 'Starosta', name: 'Dalibor Bűrgermeister', experience: 'Od roku 2023' },
    { position: 'Velitel', name: 'Jméno velitele', experience: 'Aktuální' },
    { position: 'Jednatel', name: 'Jméno jednatele', experience: 'Aktuální' },
    { position: 'Strojník', name: 'Jméno strojníka', experience: 'Aktuální' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Ochrana života',
      description: 'Naší prioritou je ochrana lidských životů při všech zásazích a situacích'
    },
    {
      icon: Heart,
      title: 'Služba komunitě',
      description: 'Sloužíme občanům Kamenky a okolí 24 hodin denně, 7 dní v týdnu'
    },
    {
      icon: Trophy,
      title: 'Tradice a hodnoty',
      description: 'Navazujeme na více než 142letou tradici dobrovolné hasičské služby'
    },
    {
      icon: Target,
      title: 'Profesionalita',
      description: 'Neustále se vzděláváme a zlepšujeme své schopnosti a vybavení'
    }
  ]

  const equipment = [
    { name: 'Dopravní automobil', type: 'DA 12 Iveco Daily', year: '2018' },
    { name: 'Cisternová automobilová stříkačka', type: 'CAS 32 Tatra 815', year: '1992' },
    { name: 'Přívěsný vozík', type: 'Pro technické zásahy', year: '2015' },
    { name: 'Motorová stříkačka', type: 'PS 12', year: '2020' }
  ]

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
              O nás
            </h1>
            <p className="text-lg text-fire-100 max-w-3xl mx-auto">
              SDH Kamenka - Sbor dobrovolných hasičů sloužící obci a jejím občanům od roku 1879
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kdo jsme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-red-600 mb-5">
                Kdo jsme
              </h2>
              <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Sbor dobrovolných hasičů Kamenka je jednotka požární ochrany kategorie JPO III,
                která zabezpečuje požární ochranu a pomoc při mimořádných událostech na území
                obce Kamenka a přilehlých oblastech. Jsme součástí Integrovaného záchranného
                systému České republiky.
              </p>
            </motion.div>

            {/* Fotka týmu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/9] relative">
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
                  <p className="text-xs font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Náš tým • 2025</p>
                  <p className="text-2xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">42 aktivních členů</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-red-600 mb-3">Naše poslání</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Ochrana života, zdraví a majetku občanů
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Hašení požárů a záchranné práce
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Technické zásahy při mimořádných událostech
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Preventivně výchovná činnost
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Práce s mládeží - kroužek mladých hasičů
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-red-600 mb-3">Základní údaje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Název:</strong> SHČMS - Sbor dobrovolných hasičů Kamenka</li>
                  <li><strong>IČO:</strong> 65472497</li>
                  <li><strong>Kategorie JPO:</strong> JPO III</li>
                  <li><strong>Okrsek:</strong> Odry</li>
                  <li><strong>Okres:</strong> Nový Jičín</li>
                  <li><strong>Adresa zbrojnice:</strong> Kamenka č.p. 40</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Naše hodnoty */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-red-600 mb-10"
          >
            Naše hodnoty
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">{value.title}</h3>
                <p className="text-xs text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vedení sboru */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-red-600 mb-10"
          >
            Vedení sboru
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.position}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-red-600 font-medium mb-2">{leader.position}</p>
                <p className="text-xs text-gray-600">{leader.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vybavení */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-red-600 mb-10"
          >
            Naše vybavení
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-600">{item.type}</p>
                  <p className="text-xs text-red-600 font-medium">Rok pořízení: {item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Členství */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="h-12 w-12 mx-auto mb-5 text-white/90" />
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">
                Staňte se součástí našeho týmu
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Hledáme nové členy, kteří chtějí aktivně pomáhat své komunitě.
                Nabízíme výcvik, moderní vybavení a skvělý kolektiv.
              </p>
              <motion.a
                href="/kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-2 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Kontaktujte nás
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}