import { LucideIcon } from 'lucide-react'
import {
  Home,
  Users,
  Activity,
  Calendar,
  Camera,
  Phone,
  Clock,
  Trophy,
  PartyPopper,
  Flame,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  description: string
  submenu?: {
    label: string
    href: string
    icon?: LucideIcon
    description: string
  }[]
}

export interface SearchResult {
  type: string
  title: string
  description: string
  url: string
  keywords: string[]
  relevanceScore?: number
}

export const navItems: NavItem[] = [
  {
    label: 'Úvod',
    href: '/',
    icon: Home,
    description: 'Hlavní stránka'
  },
  {
    label: 'O nás',
    href: '/o-nas',
    icon: Users,
    description: 'Kdo jsme a co děláme'
  },
  {
    label: 'Historie',
    href: '/historie',
    icon: Clock,
    description: '145+ let tradice'
  },
  {
    label: 'Činnost',
    href: '/cinnost',
    icon: Activity,
    description: 'Naše aktivity a služby'
  },
  {
    label: 'Kalendář',
    href: '/kalendar',
    icon: Calendar,
    description: 'Události a akce'
  },
  {
    label: 'Galerie',
    href: '/galerie',
    icon: Camera,
    description: 'Fotografie z akcí',
    submenu: [
      {
        label: 'Soutěže',
        href: '/galerie#souteze',
        icon: Trophy,
        description: 'Hasičské soutěže a závody'
      },
      {
        label: 'Cvičení',
        href: '/galerie#cviceni',
        icon: Flame,
        description: 'Hasičská cvičení a příprava'
      },
      {
        label: 'Zábava & Akce',
        href: '/galerie#zabava',
        icon: PartyPopper,
        description: 'Společenské akce a zábava'
      }
    ]
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
    icon: Phone,
    description: 'Jak nás najít'
  }
]

export const searchDatabase: SearchResult[] = [
  // Stránky
  { type: 'page', title: 'Úvod', description: 'Hlavní stránka SDH Kamenka', url: '/', keywords: ['úvod', 'domů', 'hlavní', 'home'] },
  { type: 'page', title: 'O nás', description: 'Informace o našem sboru', url: '/o-nas', keywords: ['o nás', 'sbor', 'hasiči', 'vedení', 'členové', 'vybavení'] },
  { type: 'page', title: 'Historie', description: '145+ let tradice od roku 1879', url: '/historie', keywords: ['historie', 'tradice', '1879', 'založení', 'minulost', 'kroniky'] },
  { type: 'page', title: 'Činnost', description: 'Naše aktivity a služby', url: '/cinnost', keywords: ['činnost', 'zásahy', 'cvičení', 'aktivity', 'služby'] },
  { type: 'page', title: 'Kalendář', description: 'Události a akce', url: '/kalendar', keywords: ['kalendář', 'události', 'akce', 'termíny', 'program'] },
  { type: 'page', title: 'Galerie', description: 'Fotografie z akcí', url: '/galerie', keywords: ['galerie', 'fotografie', 'obrázky', 'foto', 'soutěže', 'cvičení'] },
  { type: 'page', title: 'Kontakt', description: 'Kontaktní údaje', url: '/kontakt', keywords: ['kontakt', 'telefon', 'adresa', 'email', 'spojení'] },

  // Konkrétní témata
  { type: 'info', title: 'Tísňové volání', description: 'Hasiči: 150, Záchranná služba: 155', url: 'tel:150', keywords: ['tísň', '150', '155', '112', 'nouze', 'pomoc'] },
  { type: 'info', title: 'Mladí hasiči', description: 'Kroužek pro děti od 6 let', url: '/cinnost', keywords: ['mladí hasiči', 'děti', 'kroužek', 'mládež', 'výchova'] },
  { type: 'info', title: 'Hasičské soutěže', description: 'Požární sport a soutěže', url: '/galerie', keywords: ['soutěže', 'sport', 'závody', 'liga', 'véska'] },
  { type: 'info', title: 'Zbrojnice', description: 'Kamenka č.p. 40, 742 35 Odry', url: '/kontakt', keywords: ['zbrojnice', 'adresa', 'kamenka', 'odry'] },
  { type: 'info', title: 'JPO III', description: 'Zásahová jednotka požární ochrany', url: '/o-nas', keywords: ['jpo', 'jednotka', 'zásahy', 'ochrana'] },

  // Historie
  { type: 'history', title: 'Založení 1879', description: 'První hasičská zbrojnice', url: '/historie', keywords: ['1879', 'založení', 'první', 'zbrojnice'] },
  { type: 'history', title: 'Franz Tengler', description: 'Zakladatel sboru 1883', url: '/historie', keywords: ['franz tengler', 'zakladatel', '1883'] },
  { type: 'history', title: 'Dalibor Bűrgermeister', description: 'Starosta od roku 2023', url: '/o-nas', keywords: ['dalibor', 'bűrgermeister', 'starosta'] },
]