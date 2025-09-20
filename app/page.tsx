import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import UpcomingEventBanner from '@/components/UpcomingEventBanner'

// Lazy load komponenty co nejsou crítico "above the fold"
const Services = lazy(() => import('@/components/Services'))
const News = lazy(() => import('@/components/News'))
const Partners = lazy(() => import('@/components/Partners'))
const Footer = lazy(() => import('@/components/Footer'))

// Jednoduchý loading placeholder
const SectionLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
  </div>
)

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "SDH Kamenka - Sbor dobrovolných hasičů",
            "alternateName": "Sbor dobrovolných hasičů Kamenka",
            "description": "Oficiální sbor dobrovolných hasičů obce Kamenka, zásahová jednotka JPO III založená roku 1879",
            "url": "https://sdh-kamenka.vercel.app",
            "foundingDate": "1879",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kamenka č.p. 40",
              "addressLocality": "Kamenka",
              "addressRegion": "Moravskoslezský kraj",
              "postalCode": "742 35",
              "addressCountry": "CZ"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "49.6794",
                "longitude": "17.8781"
              },
              "geoRadius": "10000"
            },
            "serviceType": [
              "Požární zásahy",
              "Technická pomoc",
              "Záchranné operace",
              "Prevence požárů",
              "Hasičský sport",
              "Práce s mládeží"
            ],
            "parentOrganization": {
              "@type": "GovernmentOrganization",
              "name": "Hasičský záchranný sbor Moravskoslezského kraje"
            },
            "sameAs": [
              "https://www.facebook.com/sdhkamenka"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "SDH Kamenka",
            "legalName": "Sbor dobrovolných hasičů Kamenka",
            "description": "Sbor dobrovolných hasičů založený roku 1879 v obci Kamenka, okres Nový Jičín",
            "foundingDate": "1879",
            "logo": "https://sdh-kamenka.vercel.app/favicon.ico",
            "image": "https://sdh-kamenka.vercel.app/images/uvod.webp",
            "url": "https://sdh-kamenka.vercel.app",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kamenka",
              "addressRegion": "Moravskoslezský kraj",
              "addressCountry": "CZ"
            }
          })
        }}
      />
      <Navigation />
      <UpcomingEventBanner />
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <News />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Partners />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  )
}