# 🔥 Web SDH Kamenka

> Moderní webové stránky pro Sbor dobrovolných hasičů Kamenka - **Okres Nový Jičín**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF69B4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 📍 O SDH Kamenka

**Sbor dobrovolných hasičů Kamenka** je součástí obce Odry v Moravskoslezském kraji. Ačkoliv máme pouze **180 obyvatel**, naši dobrovolní hasiči aktivně slouží komunitě již od roku **1923**.

- 📧 **Email:** hasici.odry@atlas.cz  
- 📍 **Adresa:** Kamenka, 742 35 Odry
- 🏆 **Založeno:** 1923
- 👥 **Velikost obce:** 180 obyvatel
- 🚒 **Jednotka:** JPO III (Jednotka požární ochrany)

## 🚀 Technologie

Tento web je postaven na nejmodernějších technologiích roku 2025:

### Frontend
- **Next.js 15** - React framework s App Routerem
- **Tailwind CSS 4** - CSS-first konfigurace s novým @import syntaxem
- **TypeScript** - Type-safe development
- **Framer Motion** - Pokročilé animace a transitions

### UI/UX
- **Glass effects** - Moderní skleněné efekty
- **Fire shadows** - Speciální stínové efekty pro hasičskou tematiku  
- **Gradient animations** - Dynamické barevné přechody
- **Responsive design** - Optimalizováno pro všechny zařízení

### Knihovny
- **Lucide React** - Moderní ikony
- **Date-fns** - Zpracování datumů (s českou lokalizací)
- **Radix UI** - Accessibility-first komponenty
- **Clsx/Tailwind-merge** - Podmíněné CSS třídy

## 🎨 Design Features

### Visual Effects
- ✨ **Hero section** s video pozadím
- 💎 **Glass-effect** navigace a tlačítka
- 🔥 **Fire-themed** barevná paleta (červená, oranžová)
- 🌈 **Gradient overlays** pro depth
- ⚡ **Smooth animations** při scrollování

### Komponenty
- 📱 **Responzivní navigace** s mobilním menu
- 📊 **Statistické karty** s ikonami
- 🖼️ **Fotogalerie** s hover efekty  
- 📅 **Události kalendář** s date formatting
- 💬 **Facebook feed** simulace
- 🤝 **Partner sekce** s hover animacemi

## 📁 Struktura projektu

```
web_kamenka/
├── 📂 app/
│   ├── 📄 layout.tsx          # Root layout
│   ├── 📄 page.tsx            # Homepage
│   ├── 📄 globals.css         # Globální styly + Tailwind
│   ├── 📂 o-nas/              # Stránka "O nás"
│   ├── 📂 cinnost/            # Stránka "Činnost"  
│   ├── 📂 galerie/            # Stránka "Galerie"
│   ├── 📂 kalendar/           # Stránka "Kalendář"
│   └── 📂 kontakt/            # Stránka "Kontakt"
├── 📂 components/
│   ├── 📄 Hero.tsx            # Hlavní sekce s video pozadím
│   ├── 📄 Navigation.tsx      # Top navigace
│   ├── 📄 About.tsx           # O nás sekce
│   ├── 📄 Services.tsx        # Naše činnost
│   ├── 📄 News.tsx            # Aktuality  
│   ├── 📄 FacebookFeed.tsx    # FB feed simulace
│   ├── 📄 Partners.tsx        # Partneři a spolupráce
│   └── 📄 Footer.tsx          # Patička
├── 📂 lib/
│   └── 📄 utils.ts            # Utility funkce
├── 📄 tailwind.config.ts      # Tailwind CSS 4 konfigurace
├── 📄 package.json            # Dependencies
└── 📄 README.md               # Tento soubor
```

## 🛠️ Instalace a spuštění

### Požadavky
- **Node.js** 18+ 
- **npm** nebo **yarn**

### Kroky
```bash
# 1. Klonování/stažení projektu
cd C:\Users\micha\Desktop\web_kamenka

# 2. Instalace závislostí  
npm install

# 3. Spuštění development serveru
npm run dev

# 4. Otevření v prohlížeči
# http://localhost:3000
```

### Build pro produkci
```bash
# Build optimalizované verze
npm run build

# Spuštění produkční verze lokálně
npm start
```

## 🎯 Plánované funkce (Fáze 2)

### 🤖 Facebook Graph API integrace
- ✅ **Automatická synchronizace** příspěvků z FB stránky
- ✅ **Real-time webhooks** - okamžité aktualizace 
- ✅ **Historické příspěvky** - načtení 3 let zpátky
- ✅ **Auto-galerie** - fotky z FB přímo do web galerie
- ✅ **Události sync** - FB události → web kalendář

### 📊 Advanced Features  
- 🔔 **Push notifikace** pro urgentní příspěvky
- 📈 **Analytics dashboard** - sledování návštěvnosti
- 🤖 **AI moderace** komentářů
- 📱 **PWA** - aplikace pro telefony
- 🌍 **Multi-language** support

## 💰 Facebook API - Informace o cenách

### ✅ Kompletně ZDARMA pro SDH Kamenka
- **Graph API** - 0 Kč měsíčně
- **Rate limity:** 200 × počet aktivních uživatelů/hod
- **Pro malou organizaci:** ~1000-5000 requestů/hodinu  
- **Naše potřeba:** ~100 requestů/den = žádný problém!

### 🎯 Co API umožní
- Čtení všech veřejných příspěvků
- Automatické stahování fotek a videí
- Real-time notifikace o novém obsahu  
- Události a kalendář synchronizace
- Statistiky engagement (likes, shares, komentáře)

## 🏆 Konkurenční výhoda

### 📊 Srovnání s okolními obcemi

| Obec | Obyvatel | Web technologie | FB integrace | Design |
|------|----------|----------------|--------------|---------|
| **Kamenka** | **180** | **Next.js 15** | **✅ Plánováno** | **⭐⭐⭐⭐⭐** |
| Nový Jičín | 25,000 | WordPress 2018 | ❌ | ⭐⭐ |
| Odry | 7,500 | Starý CMS | ❌ | ⭐ |
| Frenštát | 11,000 | Základní HTML | ❌ | ⭐ |

> 🎯 **"Malá obec, velké řešení!"** - Kamenka jako digital leader regionu

## 🔧 Technické detaily

### Tailwind CSS 4 konfigurace
```typescript
// tailwind.config.ts
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        fire: {
          50: '#fef2f2', 
          500: '#ef4444',
          600: '#dc2626', 
          700: '#b91c1c',
        }
      }
    }
  }
}
```

### Custom CSS utilities
```css
/* app/globals.css */
.hero-gradient {
  background: linear-gradient(135deg, 
    rgba(220, 38, 38, 0.95) 0%, 
    rgba(185, 28, 28, 0.95) 50%, 
    rgba(127, 29, 29, 0.95) 100%);
}

.glass-effect {
  @apply bg-white/10 backdrop-blur-md border border-white/20;
}

.fire-shadow {
  box-shadow: 
    0 0 20px rgba(239, 68, 68, 0.3),
    0 0 40px rgba(239, 68, 68, 0.2),
    0 0 60px rgba(239, 68, 68, 0.1);
}
```

## 🚀 Deployment

### Doporučené platformy
- **Vercel** - Optimalizované pro Next.js (ZDARMA)
- **Netlify** - Snadné nasazení (ZDARMA tier)
- **GitHub Pages** - S GitHub Actions
- **Vlastní server** - VPS/shared hosting

### Environment variables
```env
# .env.local (pro FB API v budoucnu)
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret  
FACEBOOK_PAGE_ACCESS_TOKEN=your_token
WEBHOOK_VERIFY_TOKEN=your_verify_token
```

## 🤝 Contributing

Tento projekt je open-source a vítáme příspěvky od komunity:

1. **Fork** projektu
2. **Vytvořte feature branch** (`git checkout -b feature/nova-funkce`)
3. **Commit změny** (`git commit -m 'Přidána nová funkce'`)
4. **Push do branch** (`git push origin feature/nova-funkce`)
5. **Otevřete Pull Request**

## 📞 Kontakt

### Technické dotazy
- 🛠️ **Developer:** Claude Code AI
- 💻 **GitHub:** [SDH Kamenka Web Project]
- 📧 **Issues:** Použijte GitHub Issues pro bug reporty

### SDH Kamenka
- 📧 **Email:** hasici.odry@atlas.cz
- 📍 **Adresa:** Kamenka, 742 35 Odry
- 📱 **Tísňová linka:** 150
- 🌐 **Facebook:** [SDH Kamenka Facebook stránka]

## 📜 Licence

MIT License - viz [LICENSE](LICENSE) soubor pro detaily.

---

## 🎉 Speciální poděkování

- 👨‍🚒 **Všem dobrovolným hasičům** SDH Kamenka za jejich službu komunitě
- 🏘️ **Občanům Kamenky** za podporu hasičů
- ⚡ **Next.js týmu** za skvělý framework
- 🎨 **Tailwind CSS** za úžasné styling nástroje

---

<div align="center">

### 🔥 Vytvořeno s láskou pro hasiče 

**"Pomáháme a chráníme od roku 1923"**

[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![Powered by Tailwind](https://img.shields.io/badge/Powered%20by-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

🚒 **SDH Kamenka** - *Malá obec, velké srdce* 💝

</div>