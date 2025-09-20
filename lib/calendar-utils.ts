export interface CalendarEvent {
  title: string
  date: string
  time: string
  description?: string
  location?: string
  duration?: number // v hodinách
}

export function generateICSFile(event: CalendarEvent): string {
  const year = new Date().getFullYear()
  const [day, month] = event.date.split('.').map(n => n.trim())
  const [hours, minutes] = event.time.split(':')

  // Vytvoření datumu pro událost
  const startDate = new Date(year, parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes))
  const endDate = new Date(startDate)
  endDate.setHours(endDate.getHours() + (event.duration || 3)) // Defaultní doba 3 hodiny

  // Formátování do ICS formátu (YYYYMMDDTHHMMSS)
  const formatDate = (date: Date) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    const h = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')
    return `${y}${m}${d}T${h}${min}00`
  }

  const uid = `${Date.now()}@sdhkamenka.cz`
  const now = formatDate(new Date())
  const start = formatDate(startDate)
  const end = formatDate(endDate)

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SDH Kamenka//Event Calendar//CZ',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    event.description ? `DESCRIPTION:${event.description}` : '',
    event.location ? `LOCATION:${event.location}` : 'LOCATION:Hasičská zbrojnice Kamenka',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-P1D', // Připomínka 1 den předem
    'ACTION:DISPLAY',
    `DESCRIPTION:Připomínka: ${event.title} zítra v ${event.time}`,
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H', // Připomínka 2 hodiny předem
    'ACTION:DISPLAY',
    `DESCRIPTION:Připomínka: ${event.title} dnes v ${event.time}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(line => line).join('\r\n')

  return icsContent
}

export function downloadICSFile(event: CalendarEvent): void {
  const icsContent = generateICSFile(event)
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${event.title.replace(/\s+/g, '_')}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// Generování URL pro různé kalendářové služby
export function generateCalendarLinks(event: CalendarEvent) {
  const year = new Date().getFullYear()
  const [day, month] = event.date.split('.').map(n => n.trim())
  const [hours, minutes] = event.time.split(':')

  const startDate = new Date(year, parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes))
  const endDate = new Date(startDate)
  endDate.setHours(endDate.getHours() + (event.duration || 3))

  // Google Calendar format
  const googleStart = startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const googleEnd = endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${googleStart}/${googleEnd}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location || 'Hasičská zbrojnice Kamenka')}`

  // Outlook Calendar format
  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${googleStart}&enddt=${googleEnd}&body=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location || 'Hasičská zbrojnice Kamenka')}`

  return {
    google: googleUrl,
    outlook: outlookUrl,
    ics: () => downloadICSFile(event)
  }
}