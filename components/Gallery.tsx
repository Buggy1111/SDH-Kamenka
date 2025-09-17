'use client'

import { motion } from 'framer-motion'
import { Camera, ExternalLink, Calendar, Trophy, PartyPopper, Flame } from 'lucide-react'
import Link from 'next/link'

export default function Gallery() {
  const galleryCategories = [
    {
      title: "Soutěže",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
      thumbnailImage: "/images/soutez.webp",
      albums: [
        {
          name: "Soutěž Véska 2025",
          date: "27.7.2025",
          description: "Hasičská soutěž ve Vésce 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1258483725978093&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Okrsková soutěž Tošovice 2025",
          date: "11.5.2025",
          description: "Okrsková hasičská soutěž v Tošovicích 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1201540811672385&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Véska 2024",
          date: "29.7.2024",
          description: "Hasičská soutěž ve Vésce 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1000736068419528&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Véska 2023",
          date: "30.7.2023",
          description: "Hasičská soutěž ve Vésce 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.793983429094794&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Okrsková soutěž 2023",
          date: "14.5.2023",
          description: "Okrsková hasičská soutěž 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.751692923323845&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Luboměř 2013",
          date: "7.9.2013",
          description: "Hasičská soutěž v Luboměři 2013",
          fbUrl: "https://www.facebook.com/media/set/?set=a.585095908198328&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Odry 2012",
          date: "18.9.2012",
          description: "Hasičská soutěž v Odrách 2012",
          fbUrl: "https://www.facebook.com/media/set/?set=a.439115869463000&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Lukavec 2012",
          date: "16.7.2012",
          description: "Hasičská soutěž v Lukavci 2012",
          fbUrl: "https://www.facebook.com/media/set/?set=a.417724944935426&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Jerlochovice 2011",
          date: "3.9.2011",
          description: "Hasičská soutěž v Jerlochovicích 2011",
          fbUrl: "https://www.facebook.com/media/set/?set=a.244134115627844&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Vítovka 2011",
          date: "30.8.2011",
          description: "Naše první zdokumentovaná soutěž na Facebooku 2011",
          fbUrl: "https://www.facebook.com/media/set/?set=a.242177645823491&type=3",
          thumbnail: "🏆"
        },
        {
          name: "Soutěž Mankovice 2011",
          date: "27.8.2011",
          description: "Hasičská soutěž v Mankovicích 2011",
          fbUrl: "https://www.facebook.com/media/set/?set=a.242192405822015&type=3",
          thumbnail: "🏆"
        }
      ]
    },
    {
      title: "Cvičení",
      icon: Flame,
      color: "from-red-500 to-orange-600",
      thumbnailImage: "/images/cviceni.webp",
      albums: [
        {
          name: "Cvičení 2013",
          date: "5.8.2013",
          description: "Hasičské cvičení v roce 2013",
          fbUrl: "https://www.facebook.com/media/set/?set=a.569955286379057&type=3",
          thumbnail: "🚒"
        },
        {
          name: "Cvičení 2012",
          date: "12.6.2012",
          description: "První hasičské cvičení v roce 2012",
          fbUrl: "https://www.facebook.com/media/set/?set=a.410967798944474&type=3",
          thumbnail: "🚒"
        }
      ]
    },
    {
      title: "Zábava & Akce",
      icon: PartyPopper,
      color: "from-purple-500 to-pink-600",
      thumbnailImage: "/images/zabava_akce.webp",
      albums: [
        {
          name: "Kamenský špalek 2025",
          date: "13.9.2025",
          description: "Kamenský Špalek - tradiční setkání 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1297182052108260&type=3",
          thumbnail: "🎪"
        },
        {
          name: "Super prázdniny 2025",
          date: "9.8.2025",
          description: "Prázdninové akce a zábava pro děti 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1269240951569037&type=3",
          thumbnail: "🌞"
        },
        {
          name: "Červencová Noc 2025",
          date: "20.7.2025",
          description: "Červencová noc s hasičským sborem 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1253245413168591&type=3",
          thumbnail: "🌙"
        },
        {
          name: "Kácení máje 2025",
          date: "8.6.2025",
          description: "Tradiční kácení májky v obci 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1221660416327091&type=3",
          thumbnail: "🌳"
        },
        {
          name: "Stavění máje 2025",
          date: "11.5.2025",
          description: "Tradiční stavění májky v obci 2025",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1201546885005111&type=3",
          thumbnail: "🌳"
        },
        {
          name: "Povodně 2024",
          date: "4.10.2024",
          description: "Zásah hasičů při povodních v říjnu 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1045898787236589&type=3",
          thumbnail: "🌊"
        },
        {
          name: "Super prázdniny 2024",
          date: "23.8.2024",
          description: "Prázdninové akce a zábava pro děti 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.806804894479314&type=3",
          thumbnail: "🌞"
        },
        {
          name: "Super prázdniny 2024 II",
          date: "18.8.2024",
          description: "Další prázdninové akce a zábava pro děti 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.1013562530470215&type=3",
          thumbnail: "🌞"
        },
        {
          name: "Srpnová brigáda 2024",
          date: "8.8.2024",
          description: "Srpnová brigáda hasičského sboru",
          fbUrl: "https://www.facebook.com/media/set/?set=a.988092956350506&type=3",
          thumbnail: "🔨"
        },
        {
          name: "Červencová Noc 2024",
          date: "22.7.2024",
          description: "Červencová noc s hasičským sborem 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.996395648853570&type=3",
          thumbnail: "🌙"
        },
        {
          name: "Kácení Máje a Dětský den",
          date: "2.6.2024",
          description: "Kácení májky spojené s dětským dnem",
          fbUrl: "https://www.facebook.com/media/set/?set=a.966413931851742&type=3",
          thumbnail: "🎉"
        },
        {
          name: "Stavění Máje 2024",
          date: "5.5.2024",
          description: "Tradiční stavění májky v obci 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.949638716862597&type=3",
          thumbnail: "🌳"
        },
        {
          name: "Valná hromada 2024",
          date: "7.4.2024",
          description: "Výroční valná hromada hasičského sboru 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.932983155194820&type=3",
          thumbnail: "📋"
        },
        {
          name: "Dubnovář brigáda 2024",
          date: "6.4.2024",
          description: "Jarní brigáda hasičského sboru 2024",
          fbUrl: "https://www.facebook.com/media/set/?set=a.932982441861558&type=3",
          thumbnail: "🔨"
        },
        {
          name: "Listopadová brigáda 2023",
          date: "23.11.2023",
          description: "Listopadová brigáda hasičského sboru 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.856598576166612&type=3",
          thumbnail: "🔨"
        },
        {
          name: "Podzimní brigáda 2023",
          date: "20.10.2023",
          description: "Podzimní brigáda hasičského sboru 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.842845260875277&type=3",
          thumbnail: "🔨"
        },
        {
          name: "Kamenský Špalek 2023",
          date: "27.8.2023",
          description: "Kamenský Špalek - tradiční setkání 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.808781724281631&type=3",
          thumbnail: "🎪"
        },
        {
          name: "Senioři 60+ 2023",
          date: "23.8.2023",
          description: "Akce pro seniory nad 60 let 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.806799804479823&type=3",
          thumbnail: "👴"
        },
        {
          name: "Uctění památky zesnulého hasiče",
          date: "30.7.2023",
          description: "Pietní akt k uctění památky zesnulého hasiče",
          fbUrl: "https://www.facebook.com/media/set/?set=a.793984849094652&type=3",
          thumbnail: "🕯️"
        },
        {
          name: "Červencová noc 2023",
          date: "23.7.2023",
          description: "Červencová noc s hasičským sborem 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.790666802759790&type=3",
          thumbnail: "🌙"
        },
        {
          name: "Kácení Máje 2023",
          date: "8.6.2023",
          description: "Tradiční kácení máje s hasičským sborem 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.765848881908249&type=3",
          thumbnail: "🌳"
        },
        {
          name: "Máj a čarodějnice 2023",
          date: "7.5.2023",
          description: "Oslavy máje a čarodějnic s hasičským sborem 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.747666630393141&type=3",
          thumbnail: "🔥"
        },
        {
          name: "Rekonstrukce 2023",
          date: "7.4.2023",
          description: "Rekonstrukční práce hasičského sboru 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.731450552014749&type=3",
          thumbnail: "🔨"
        },
        {
          name: "Něco pro naše nejmenší členy 2023 :-)",
          date: "10.3.2023",
          description: "Akce pro mladé hasiče a nejmenší členy sboru 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.716407826852355&type=3",
          thumbnail: "👶"
        },
        {
          name: "Březnová brigáda 2023",
          date: "9.3.2023",
          description: "Společná brigáda hasičského sboru 2023",
          fbUrl: "https://www.facebook.com/media/set/?set=a.715448193614985&type=3",
          thumbnail: "🔨"
        },
        {
          name: "Ahoj prázdniny 2022",
          date: "9.6.2022",
          description: "Akce pro děti na rozloučenou se školním rokem 2022",
          fbUrl: "https://www.facebook.com/photo/?fbid=715447523615052&set=a.715447726948365",
          thumbnail: "🎉"
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {galleryCategories.map((category, categoryIndex) => {
          const anchorId = category.title === "Soutěže" ? "souteze" :
                          category.title === "Cvičení" ? "cviceni" :
                          category.title === "Zábava & Akce" ? "zabava" : ""

          return (
          <motion.div
            key={category.title}
            id={anchorId}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 last:mb-0"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">
                {category.title}
              </h3>
            </div>

            {/* Albums Grid */}
            {category.albums.length > 0 ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {category.albums.map((album, index) => (
                  <motion.div
                    key={album.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative"
                  >
                    <Link
                      href={album.fbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group-hover:scale-[1.02]">
                        {/* Thumbnail Image */}
                        <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-center">
                            <category.icon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <span className="text-gray-500 text-sm font-medium">{album.thumbnail}</span>
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white rounded-full p-3 shadow-lg">
                              <ExternalLink className="h-6 w-6 text-gray-900" />
                            </div>
                          </div>
                        </div>

                        {/* Album Info */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                            {album.name}
                          </h4>

                          <div className="flex items-center gap-2 text-gray-600 mb-3">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{album.date}</span>
                          </div>

                          <p className="text-gray-700 text-sm mb-4">
                            {album.description}
                          </p>

                          <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                            <Camera className="h-4 w-4" />
                            <span>Zobrazit na Facebooku</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Brzy přidáme alba z této kategorie</p>
              </div>
            )}
          </motion.div>
          )
        })}

        {/* More Albums CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            39 alb fotek od roku 2011
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Kompletní fotogalerie s historií od roku 2011 najdete na našem Facebook profilu.
            Zásahy, soutěže, společenské akce - vše na jednom místě!
          </p>
          <Link
            href="https://www.facebook.com/profile.php?id=100054494319025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl border-2 border-red-700 flex items-center gap-3 mx-auto"
            >
              <Camera className="h-6 w-6" />
              Zobrazit všechny fotky
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}