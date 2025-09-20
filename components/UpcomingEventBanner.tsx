'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, X, Sparkles, ChevronRight, Bell, CalendarDays } from 'lucide-react'
import { generateCalendarLinks, type CalendarEvent } from '@/lib/calendar-utils'

interface UpcomingEvent extends CalendarEvent {
  daysUntil?: number
  eventDate?: Date
}

export default function UpcomingEventBanner() {
  const [nextEvent, setNextEvent] = useState<UpcomingEvent | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hrs: 0, mins: 0, seconds: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [shouldShow, setShouldShow] = useState(true)

  useEffect(() => {
    // Check localStorage for user preference
    const hiddenUntil = localStorage.getItem('hideEventBanner')
    if (hiddenUntil) {
      const hiddenDate = new Date(hiddenUntil)
      if (hiddenDate > new Date()) {
        setShouldShow(false)
        return
      } else {
        localStorage.removeItem('hideEventBanner')
      }
    }

    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => {
        const events = data.upcomingEvents as CalendarEvent[]
        const now = new Date()
        const currentYear = now.getFullYear()

        // Find the next upcoming event
        const upcomingEvents = events.map((event) => {
          const [day, month] = event.date.split('.').map(n => parseInt(n.trim()))
          const [eventHrs, eventMins] = event.time.split(':').map(n => parseInt(n))

          let eventDate = new Date(currentYear, month - 1, day, eventHrs, eventMins)

          // If event already passed this year, use next year
          if (eventDate < now) {
            eventDate = new Date(currentYear + 1, month - 1, day, eventHrs, eventMins)
          }

          const timeDiff = eventDate.getTime() - now.getTime()
          const daysUntil = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

          return {
            ...event,
            eventDate,
            daysUntil
          }
        }).filter(event => event.daysUntil <= 30) // Show only events within 30 days
          .sort((a: any, b: any) => a.daysUntil - b.daysUntil)

        if (upcomingEvents.length > 0) {
          setNextEvent(upcomingEvents[0])
          setIsVisible(true)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error loading events:', error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!nextEvent || !shouldShow) return

    const timer = setInterval(() => {
      const now = new Date()
      const [day, month] = nextEvent.date.split('.').map(n => parseInt(n.trim()))
      const [eventHrs, eventMins] = nextEvent.time.split(':').map(n => parseInt(n))
      const currentYear = now.getFullYear()

      let eventDate = new Date(currentYear, month - 1, day, eventHrs, eventMins)
      if (eventDate < now) {
        eventDate = new Date(currentYear + 1, month - 1, day, eventHrs, eventMins)
      }

      const timeDiff = eventDate.getTime() - now.getTime()

      if (timeDiff <= 0) {
        setCountdown({ days: 0, hrs: 0, mins: 0, seconds: 0 })
        setIsVisible(false)
        return
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      const hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

      setCountdown({ days, hrs, mins, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [nextEvent, shouldShow])

  const handleClose = () => {
    setIsVisible(false)
    // Hide banner for 24 hours
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    localStorage.setItem('hideEventBanner', tomorrow.toISOString())
    setShouldShow(false)
  }

  const handleAddToCalendar = () => {
    if (!nextEvent) return
    const links = generateCalendarLinks(nextEvent)
    links.ics()
  }

  if (!shouldShow || !isVisible || !nextEvent || isLoading) return null

  const eventTypeColors = {
    'ples': 'from-amber-500 to-orange-600',
    'valná hromada': 'from-blue-600 to-indigo-700',
    'soutěž': 'from-red-600 to-pink-600',
    'cvičení': 'from-green-600 to-teal-600',
    'default': 'from-fire-600 to-orange-600'
  }

  const getEventColor = (title: string) => {
    const lowerTitle = title.toLowerCase()
    for (const [key, value] of Object.entries(eventTypeColors)) {
      if (lowerTitle.includes(key)) return value
    }
    return eventTypeColors.default
  }

  const gradientColor = getEventColor(nextEvent.title)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`fixed top-16 left-0 right-0 z-40 px-4 py-3 ${isExpanded ? 'md:top-20' : ''}`}
      >
        <div className={`container mx-auto max-w-7xl`}>
          <div className={`relative bg-gradient-to-r ${gradientColor} rounded-2xl shadow-2xl overflow-hidden`}>
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full opacity-10"
                  style={{
                    width: Math.random() * 4 + 1,
                    height: Math.random() * 4 + 1,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>

            <div className="relative px-4 py-3 md:px-6 md:py-4">
              <div className="flex items-center justify-between">
                {/* Left section - Event info */}
                <div className="flex-1 flex items-center gap-3 md:gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="hidden sm:block"
                  >
                    <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      className="flex flex-col md:flex-row md:items-center md:gap-4 cursor-pointer"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-white/90 text-xs md:text-sm font-medium">
                          Nejbližší akce:
                        </span>
                        <h3 className="text-white font-bold text-sm md:text-lg">
                          {nextEvent.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="hidden md:block"
                        >
                          <ChevronRight className="h-5 w-5 text-white/80" />
                        </motion.div>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 text-white/90 text-xs md:text-sm mt-1 md:mt-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="font-semibold">{nextEvent.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="font-semibold">{nextEvent.time}</span>
                        </span>
                        <span className="hidden sm:flex items-center gap-1">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="font-semibold">{nextEvent.location}</span>
                        </span>
                      </div>
                    </motion.div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t border-white/20"
                        >
                          <p className="text-white/90 text-sm mb-3">{nextEvent.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={handleAddToCalendar}
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                            >
                              <CalendarDays className="h-4 w-4" />
                              Přidat do kalendáře
                            </button>
                            <button
                              onClick={() => window.location.href = '/kalendar'}
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              Všechny akce
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right section - Countdown and actions */}
                <div className="flex items-center gap-2 md:gap-4">
                  {/* Countdown timer */}
                  <div className="hidden lg:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                    <Bell className="h-4 w-4 text-white animate-pulse" />
                    <div className="flex items-center gap-1 text-white">
                      {countdown.days > 0 && (
                        <>
                          <motion.span
                            key={`days-${countdown.days}`}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="font-bold text-lg min-w-[2ch] text-center"
                          >
                            {countdown.days}
                          </motion.span>
                          <span className="text-xs">dní</span>
                        </>
                      )}
                      <motion.span
                        key={`hrs-${countdown.hrs}`}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="font-bold text-lg min-w-[2ch] text-center"
                      >
                        {String(countdown.hrs).padStart(2, '0')}
                      </motion.span>
                      <span className="text-xs">h</span>
                      <motion.span
                        key={`mins-${countdown.mins}`}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="font-bold text-lg min-w-[2ch] text-center"
                      >
                        {String(countdown.mins).padStart(2, '0')}
                      </motion.span>
                      <span className="text-xs">m</span>
                      <motion.span
                        key={`secs-${countdown.seconds}`}
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="font-bold text-lg min-w-[2ch] text-center"
                      >
                        {String(countdown.seconds).padStart(2, '0')}
                      </motion.span>
                      <span className="text-xs">s</span>
                    </div>
                  </div>

                  {/* Mobile countdown - simpler */}
                  <div className="flex lg:hidden items-center gap-1 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs">
                    <Bell className="h-3 w-3 animate-pulse" />
                    <span className="font-bold">
                      {countdown.days > 0 ? `${countdown.days} dní` : `${countdown.hrs}h ${countdown.mins}m`}
                    </span>
                  </div>

                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 transition-colors"
                    title="Zavřít (skrýt na 24 hodin)"
                  >
                    <X className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}