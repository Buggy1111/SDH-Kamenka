'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Users, Award, Flame, Shield, Heart, ChevronDown, MapPin, Clock, History, Target } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const timelineEvents = [
  {
    year: 1879,
    title: "První hasičská zbrojnice",
    description: "Vybudování první hasičské zbrojnice na návsi (č.p. 84) - počátek hasičské tradice v Kamenka",
    icon: Shield,
    color: "from-red-500 to-orange-600"
  },
  {
    year: 1883,
    title: "Oficiální založení sboru",
    description: "Dobrovolnický hasičský sbor byl v Kamenka oficiálně založen z podnětu Franze Tenglera z č.p. 42. Název: 'Freiwillige Feuerwehr zu Steineck'",
    icon: Flame,
    color: "from-orange-500 to-red-600"
  },
  {
    year: 1885,
    title: "Rychlý růst",
    description: "Sbor má už 53 členů a velitelem je Franz Löw z č.p. 55. Franz Löw vede sbor až do roku 1945 - nejdelší vedení v historii",
    icon: Users,
    color: "from-red-600 to-red-700"
  },
  {
    year: 1945,
    title: "Starosta František Ramík",
    description: "František Ramík (č.p. 77) se stává prvním starostou sboru po válce a obnovuje jeho činnost. Zbrojnice měla jen motorovou stříkačku bez hadić",
    icon: Heart,
    color: "from-blue-600 to-indigo-600"
  },
  {
    year: 1950,
    title: "Velký rozkvět",
    description: "Sbor zaznamenal velký rozkvět. Významný rozmach zejména kolem 30. let a v roce 1950",
    icon: Award,
    color: "from-yellow-500 to-amber-600"
  },
  {
    year: 1958,
    title: "Předsedové Albín Chromek a Bohumil Vardžák",
    description: "Funkce starosty nahrazena předsedou. Albín Chromek předseda, Karel Holubčík velitel. V listopadu 1958 přebírá Bohumil Vardžák",
    icon: Users,
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: 1961,
    title: "Předseda Albín Chromek (návrat)",
    description: "Albín Chromek znovu zvolen předsedou (1961-1971), Karel Holubčík st. zůstává velitelem",
    icon: Users,
    color: "from-purple-500 to-blue-600"
  },
  {
    year: 1971,
    title: "Předseda Silvestr Vardžák",
    description: "Silvestr Vardžák se stává předsedou sboru (1971-1980). Období stabilizace a rozvoje",
    icon: Users,
    color: "from-green-500 to-teal-600"
  },
  {
    year: 1980,
    title: "Předseda Jaroslav Helísek",
    description: "Jaroslav Helísek vede sbor jako předseda (1980-1992). Příprava na změny po revoluci 1989",
    icon: Users,
    color: "from-indigo-500 to-purple-600"
  },
  {
    year: 1991,
    title: "Nový hasičský okrsek",
    description: "Vznik čísla sboru Odry - nový hasičský okrsek. Změna organizační struktury",
    icon: MapPin,
    color: "from-green-500 to-teal-600"
  },
  {
    year: 1992,
    title: "Starosta Josef Polcík",
    description: "Josef Polcík ve funkci starosty sboru v roce 1992. Období přechodu po změnách v organizační struktuře",
    icon: Users,
    color: "from-cyan-500 to-blue-600"
  },
  {
    year: 1994,
    title: "Starosta Zdeněk Vardžák",
    description: "Zdeněk Vardžák nastupuje jako starosta (1994-1998). První období jeho dlouhodobého vedení sboru",
    icon: Users,
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: 1995,
    title: "Právní subjekt",
    description: "Zapsání do obchodního rejstříku dne 28. srpna 1995 pod názvem SH ČMS - Sbor dobrovolných hasičů Kamenka, IČ 65472497",
    icon: Shield,
    color: "from-indigo-500 to-purple-600"
  },
  {
    year: 1998,
    title: "Starostka Olga Hajčlová",
    description: "Olga Hajčlová se stala první ženou ve funkci starostky sboru (1998-2001). Převratný moment v dějinách vedení",
    icon: Users,
    color: "from-purple-500 to-pink-600"
  },
  {
    year: 2001,
    title: "Starosta Radek Bürgermeister",
    description: "Radek Bürgermeister ve funkci starosty (2001-2002). Krátké, ale významné období vedení. Rodina Bürgermeisterů v hasičské tradici",
    icon: Users,
    color: "from-orange-500 to-red-600"
  },
  {
    year: 2002,
    title: "Starosta Zdeněk Vardžák (2. období)",
    description: "Zdeněk Vardžák se vrací do funkce starosty (2002-11.11.2006). Druhé období jeho vedení sboru do listopadu 2006",
    icon: Users,
    color: "from-emerald-500 to-green-600"
  },
  {
    year: 2005,
    title: "Modernizace",
    description: "Sbor se erudovaným předsedou 44 členů a fungoval registrací. Období technické modernizace",
    icon: Target,
    color: "from-blue-500 to-cyan-600"
  },
  {
    year: 2006,
    title: "Starosta Dalibor Bürgermeister",
    description: "Valná hromada 11. listopadu 2006 zvolila starostou Dalibora Bürgermeistera. Ve funkci setrvale až do 16. ledna 2015 - nejdelší období vedení",
    icon: Users,
    color: "from-purple-500 to-pink-600"
  },
  {
    year: 2015,
    title: "Starosta Tomáš Bouda",
    description: "Tomáš Bouda se stává starostou SDH Kamenka (16.1.2015 - 21.2.2020). Pětiletné období vedení sboru",
    icon: Users,
    color: "from-blue-500 to-purple-600"
  },
  {
    year: 2016,
    title: "Nový název a adresa",
    description: "Oficiální název změněn na SHČMS - Sbor dobrovolných hasičů Kamenka. Změna sídla a adresy spolku",
    icon: Flame,
    color: "from-red-600 to-orange-600"
  },
  {
    year: 2020,
    title: "Starosta Jan Pavlica",
    description: "Jan Pavlica nastupuje do funkce starosty (21.2.2020 - 14.1.2023). Vedení sboru během obtížného období pandemie COVID-19",
    icon: Users,
    color: "from-green-500 to-blue-600"
  },
  {
    year: 2023,
    title: "Starosta Dalibor Bűrgermeister (návrat)",
    description: "Dalibor Bűrgermeister se vrací jako starosta sboru (od 14.1.2023). Po osmi letech se vrací do vedení sboru",
    icon: Users,
    color: "from-yellow-500 to-orange-600"
  }
]

export default function HistoriePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9])

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
              Historie
            </h1>
            <p className="text-lg text-fire-100 max-w-3xl mx-auto">
              142 let tradice a služby občanům - od roku 1883 chráníme životy a majetek
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center text-red-500 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HISTORICKÉ MILNÍKY
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500" />

            {/* Timeline events */}
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-center mb-16 sm:mb-20 md:mb-24 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} text-center px-2 sm:px-4 mb-6 md:mb-0`}>
                    <motion.div
                      className="glass-effect p-3 sm:p-4 md:p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:z-50 relative cursor-pointer max-w-sm sm:max-w-md mx-auto md:mx-0"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${event.color} text-transparent bg-clip-text mb-1 sm:mb-2`}>
                        {event.year}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-500 mb-1 sm:mb-2">{event.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-red-300 leading-tight" dangerouslySetInnerHTML={{ __html: event.description }} />
                    </motion.div>
                  </div>

                  {/* Center icon - hidden on mobile, only visible on md+ */}
                  <motion.div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${event.color} p-1 shadow-xl`}>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-lg">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile icon - only visible on mobile */}
                  <motion.div
                    className="md:hidden flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${event.color} p-1 shadow-xl`}>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-lg">
                        <Icon className="w-4 h-4 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailní historie */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-red-600 mb-10"
          >
            Podrobná historie SDH Kamenka
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Začátky */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:z-50 relative"
            >
              <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-3">
                <History className="h-5 w-5" />
                Vznik a počátky (1879-1885)
              </h3>
              <p className="text-gray-900 leading-relaxed mb-4">
                Ještě před oficiálním založením sboru vybudovali obyvatelé Kamenky v roce <strong>1879</strong> první
                hasičskou zbrojnici (č.p. 84) na návsi, která stála naproti statku č. 14. <strong>Podle kroniky z roku 2006</strong>
                byl sbor dobrovolných hasičů v Kamenka oficiálně založen v roce <strong>1883</strong> z iniciativy <strong>Franze Tenglera</strong> z č.p. 42.
              </p>
              <p className="text-gray-900 leading-relaxed">
                Už v roce 1885 měl sbor 53 členů a velitelem byl <strong>Franz Löw</strong> z č.p. 55. Vznik sboru byl reakcí
                na vysoké riziko požárů v hospodářské obci ležící u Oderských vrchů.
              </p>
            </motion.div>

            {/* Válečné období */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:z-50 relative"
            >
              <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-3">
                <Shield className="h-5 w-5" />
                Válečná léta a obnova (1945)
              </h3>
              <p className="text-gray-900 leading-relaxed mb-4">
                V meziválečných letech sbor sdružoval kolem padesáti členů a spolupracoval s německými
                i českými obyvateli obce. Kromě zásahů se podílel na plesech, zábavách a dětských akcích.
              </p>
              <p className="text-gray-900 leading-relaxed">
                V květnu 1945 byla během bojů zbrojnice poškozena dělostřelbou. Po příchodu českých
                osídlenců byl v srpnu 1945 založen nový sbor - první organizace v obci po válce.
                Prvním starostou se stal <strong>František Ramík</strong> z č.p. 77.
              </p>
            </motion.div>

            {/* Zlatá éra */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:z-50 relative"
            >
              <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-3">
                <Award className="h-5 w-5" />
                Zlatá éra padesátých let (1958)
              </h3>
              <p className="text-gray-900 leading-relaxed mb-4">
                Největší rozvoj zažila &quot;Místní jednota československé požární ochrany&quot; koncem 50. let,
                zejména v roce 1958. Předsedou MNV byl <strong>Albín Chromek</strong> z č.p. 28, velitelem <strong>Karel Holubčík</strong> z č.p. 8.
                Jednotka se úspěšně účastnila okrskových i okresních soutěží.
              </p>
              <p className="text-gray-900 leading-relaxed">
                Ve stejném roce získali hasiči novou zbrojnici - zemědělské družstvo darovalo budovu č.p. 40,
                která slouží jako hasičská zbrojnice <strong>dodnes</strong>. Původní objekt byl roku 1968 zbourán.
              </p>
            </motion.div>

            {/* Moderní doba */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:z-50 relative"
            >
              <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-3">
                <Target className="h-5 w-5" />
                Moderní historie (1989-současnost)
              </h3>
              <p className="text-gray-900 leading-relaxed mb-4">
                Po společenských změnách roku 1989 se celostátní Svaz požární ochrany přejmenoval na
                Sdružení hasičů Čech, Moravy a Slezska. Místní organizace začaly používat historický
                název &quot;Sbor dobrovolných hasičů&quot;.
              </p>
              <p className="text-gray-900 leading-relaxed">
                SDH Kamenka je od 28. srpna 1995 zapsán v obchodním rejstříku jako pobočný spolek.
                V roce 2006 byl přeřazen z okrsku Heřmanice do okrsku Odry.
                V roce 2016 byl název oficiálně upraven na &quot;SHČMS - Sbor dobrovolných hasičů Kaménka&quot;.
              </p>
              <p className="text-gray-900 leading-relaxed mt-4">
                <strong>Kompletní historie vedení sboru:</strong><br />
                <strong>1883-1945:</strong> Franz Löw (velitel) - nejdelší období vedení v historii<br />
                <strong>1945-1958:</strong> František Ramík (první starosta po válce)<br />
                <strong>1958-1961:</strong> Albín Chromek, Bohumil Vardžák (předsedové)<br />
                <strong>1961-1971:</strong> Albín Chromek (předseda)<br />
                <strong>1971-1980:</strong> Silvestr Vardžák (předseda)<br />
                <strong>1980-1992:</strong> Jaroslav Helísek (předseda)<br />
                <strong>Od 1992 - moderní starostové:</strong> Josef Polcík (1992), Zdeněk Vardžák (1994-1998, 2002-2006),
                Olga Hajchlová (1998-2001, první žena), Radek Bürgermeister (2001-2002),
                Dalibor Bürgermeister (2006-2015), Tomáš Bouda (2015-2020),
                Jan Pavlica (2020-2023), Dalibor Bűrgermeister (od 2023).
              </p>

              {/* Luxusní poděkování kronikáři */}
              <motion.div
                className="mt-16 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Pozadí s gradientem a efekty */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,140,0,0.15),transparent_50%)]"></div>

                {/* Dekorativní elementy */}
                <div className="absolute top-6 right-6 w-20 h-20 border border-yellow-400/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border border-orange-400/30 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-400/50 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 right-16 w-1 h-1 bg-orange-400/50 rounded-full animate-pulse"></div>

                {/* Obsah */}
                <div className="relative z-10 p-12">
                  <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {/* Ikona a dekorace */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                          <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl flex items-center justify-center">
                            <span className="text-4xl">📚</span>
                          </div>
                        </div>
                        {/* Světelný efekt */}
                        <div className="absolute -inset-2 bg-yellow-400/20 rounded-2xl blur-xl"></div>
                      </motion.div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <motion.h4
                        className="text-3xl lg:text-4xl font-display font-bold text-transparent bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-100 bg-clip-text mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        Pocta kronikáři
                      </motion.h4>

                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <p className="text-lg text-amber-50 leading-relaxed">
                          <strong className="text-yellow-200">Tato historie byla sepsána panem Milanem Tomášem</strong>,
                          dlouholetým kronikářem obce Kamenka a místním učitelem, který s láskou a pečlivostí
                          zdokumentoval dějiny naší obce i hasičského sboru.
                        </p>

                        <p className="text-amber-100 leading-relaxed">
                          Jeho práce byla publikována v časopise <em className="text-yellow-200">Poodří 4/2006</em>,
                          kde zpracoval kapitolu <strong>&quot;Historie po roce 1945&quot;</strong> a mnoho dalších textů
                          o našem krásném regionu.
                        </p>

                        <motion.div
                          className="pt-4 border-t border-yellow-400/30"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                        >
                          <p className="text-xl text-yellow-100 font-medium italic flex items-center gap-3">
                            <span className="text-2xl">🕊️</span>
                            Vzdáváme čest jeho památce a děkujeme za zachování naší historie pro budoucí generace.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Spodní dekorativní linie */}
                  <motion.div
                    className="mt-8 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistiky */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-center text-red-600 mb-10"
          >
            SDH Kamenka v číslech
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Calendar, number: '142', label: 'Let tradice' },
              { icon: Users, number: '44', label: 'Členů v roce 2006' },
              { icon: Shield, number: '3', label: 'Zbrojnice v historii' },
              { icon: History, number: '1879', label: 'Rok založení' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-9 w-9 text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-red-400 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values and Motto */}
      <section className="py-20 bg-gradient-to-b from-black via-red-950 to-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            viewport={{ once: true }}
            className="relative cursor-pointer"
          >
            <Flame className="w-24 h-24 text-orange-500 mx-auto mb-6" />

            <h2 className="text-4xl md:text-5xl font-black text-red-500 mb-6">
&quot;BOHU KE CTI,<br />BLIŽNÍMU KU POMOCI&quot;
            </h2>

            <p className="text-lg md:text-xl text-red-400 max-w-3xl mx-auto">
              Toto historické motto zůstává základem naší služby již více než 142 let.
              Spojuje tradici s moderními hodnotami a připomíná nám náš závazek vůči komunitě.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}