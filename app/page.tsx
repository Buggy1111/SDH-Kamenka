import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'

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
      <Navigation />
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