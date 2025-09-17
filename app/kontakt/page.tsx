'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Send,
  User,
  Navigation as NavigationIcon,
  CheckCircle,
  Flame,
  Loader2,
  AlertCircle
} from 'lucide-react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Obecný dotaz',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const contacts = [
    {
      position: 'Starosta sboru',
      name: 'Dalibor Bűrgermeister',
      phone: 'Přes SDH Odry',
      email: 'hasici.odry@atlas.cz',
      availability: 'Po domluvě',
      since: 'Od roku 2023'
    },
    {
      position: 'Velitel zásahové jednotky',
      name: 'Kontakt přes starostu',
      phone: 'Přes SDH Odry',
      email: 'hasici.odry@atlas.cz',
      availability: 'Po domluvě'
    }
  ]

  const emergencyContacts = [
    { service: 'Hasiči', number: '150', description: 'Požáry, technická pomoc', color: 'bg-red-600' },
    { service: 'Záchranná služba', number: '155', description: 'Zdravotnické služby', color: 'bg-green-600' },
    { service: 'Policie', number: '158', description: 'Veřejný pořádek, doprava', color: 'bg-blue-600' },
    { service: 'Jednotné číslo tísně', number: '112', description: 'Evropské číslo nouze', color: 'bg-orange-600' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        })
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: 'Obecný dotaz',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Došlo k neočekávané chybě'
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Došlo k chybě při odesílání zprávy. Zkontrolujte připojení k internetu.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />

      {/* Hero Section - stejný jako galerie/kalendář */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-fire-600 via-fire-700 to-fire-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Kontakt
            </h1>
            <p className="text-lg text-fire-100 max-w-3xl mx-auto">
              Jak nás můžete kontaktovat a kde nás najdete
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Emergency Contacts */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black mb-4 flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 animate-pulse" />
              TÍSŇOVÉ LINKY
            </h2>
            <p className="text-red-100 text-base font-medium">V případě nouze volejte okamžitě</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <motion.a
                key={contact.number}
                href={`tel:${contact.number}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${contact.color} rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-white/20 hover:border-white/40`}
              >
                <div className="text-4xl font-black mb-3 drop-shadow-lg">{contact.number}</div>
                <div className="text-lg font-bold mb-2">{contact.service}</div>
                <div className="text-sm text-white/90 font-medium">{contact.description}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4" />
                  <span>Zavolat</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps - Ultra Premium */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Kde nás najdete</h2>
            <p className="text-lg text-gray-600 font-medium">SDH Kamenka - severní část obce</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Premium Map Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.123456789!2d17.8456!3d49.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKamenka%2040%2C%20Odry%2074235!5e0!3m2!1scs!2scz!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa SDH Kamenka"
                className="w-full"
              ></iframe>

              {/* Luxury Map Footer */}
              <div className="bg-gradient-to-r from-gray-900 to-black p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-4 rounded-2xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">SDH Kamenka</h3>
                      <p className="text-lg text-gray-300 font-bold">Kamenka 40, Odry 74235</p>
                      <p className="text-gray-400 font-medium">Okres Nový Jičín, Moravskoslezský kraj</p>
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com/maps?q=Kamenka+40,+Odry+74235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-xl text-lg transition-all shadow-lg flex items-center gap-3"
                  >
                    <NavigationIcon className="h-6 w-6" />
                    Navigovat v Google Maps
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ultra Premium Contact Section - Light with Colors */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">

            {/* Contact Information - Colorful Design */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-fire-600 to-fire-700 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl font-display font-black text-red-600 mb-4">
                  Kontaktní informace
                </h2>
                <p className="text-red-600 font-bold text-lg">Jsme připraveni odpovědět na všechny vaše dotazy</p>
              </div>

              {/* Main Contact Card - White with Colorful Icons */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-2xl shadow-lg">
                    <Flame className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-black">SDH Kamenka</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-red-600 text-base mb-2">Adresa zbrojnice</p>
                      <p className="text-xl font-display font-black text-black">Kamenka 40</p>
                      <p className="text-xl font-display font-black text-black">Odry 74235</p>
                      <p className="text-black font-bold mt-2 text-base">Okres Nový Jičín • Moravskoslezský kraj</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-blue-600 text-base mb-2">Email kontakt</p>
                      <a
                        href="mailto:hasici.odry@atlas.cz"
                        className="text-lg font-display font-black text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        hasici.odry@atlas.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-blue-600 text-base mb-2">Sledujte nás</p>
                      <a
                        href="https://www.facebook.com/profile.php?id=100054494319025"
                        target="_blank"
                        className="text-lg font-display font-black text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Facebook - Dobrovolní hasiči
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Cards - Colorful */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-fire-600 to-fire-700 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-xl font-display font-black text-red-600">Vedení sboru</h3>
                </div>
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.position}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-display font-black text-black">{contact.name}</h4>
                        <p className="text-red-600 font-black text-sm mb-3">{contact.position}</p>
                        <div className="space-y-2 text-black font-bold text-sm">
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-green-600" />
                            <span>{contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-blue-600" />
                            <span>{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-orange-600" />
                            <span>Dostupnost: {contact.availability}</span>
                          </div>
                          {contact.since && (
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              <span className="text-green-600 font-black text-sm">{contact.since}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ČERNO-ČERVENO-BÍLÝ Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-black rounded-3xl p-10 shadow-2xl hover:shadow-red-500/50 transition-all duration-500 border-2 border-red-500"
            >
              <div className="mb-10">
                <h2 className="text-5xl font-display font-black text-white mb-6">
                  Napište nám
                </h2>
                <p className="text-white font-bold text-xl">Rádi zodpovíme všechny vaše dotazy</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-red-400 font-black text-xl mb-4">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-red-500 rounded-2xl focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all text-black font-bold placeholder-gray-500 shadow-lg text-lg"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label className="block text-red-400 font-black text-xl mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-red-500 rounded-2xl focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all text-black font-bold placeholder-gray-500 shadow-lg text-lg"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <label className="block text-red-400 font-black text-xl mb-4">
                    Předmět
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white border-2 border-red-500 rounded-2xl focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all text-black font-bold shadow-lg text-lg"
                  >
                    <option value="Obecný dotaz">Obecný dotaz</option>
                    <option value="Zájem o členství">Zájem o členství</option>
                    <option value="Mladí hasiči">Mladí hasiči</option>
                    <option value="Spolupráce">Spolupráce</option>
                    <option value="Jiné">Jiné</option>
                  </select>
                </div>

                <div>
                  <label className="block text-red-400 font-black text-xl mb-4">
                    Zpráva *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-white border-2 border-red-500 rounded-2xl focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all resize-none text-black font-bold placeholder-gray-500 shadow-lg text-lg"
                    placeholder="Vaše zpráva..."
                  ></textarea>
                </div>

                {/* Status messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl flex items-center gap-3 ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 text-green-800 border-2 border-green-300'
                        : 'bg-red-100 text-red-800 border-2 border-red-300'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="font-bold">{submitStatus.message}</span>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 px-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-4 shadow-xl hover:shadow-2xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-700 hover:via-red-800 hover:to-red-900'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin" />
                      Odesílám...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      Odeslat zprávu
                    </>
                  )}
                </motion.button>
              </form>

              <p className="text-white font-bold mt-8 text-center text-lg">
                * Povinné pole. Vaše údaje budou použity pouze pro zodpovězení dotazu.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}