import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import { Space_Grotesk, Inter, Poppins, DM_Sans } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import SiteFooter from '@/components/site-footer'
import { GeistSans } from 'geist/font/sans'
import LocalFont from 'next/font/local'
import NavMain from '@/components/nav'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext', 'devanagari'],
  variable: '--font-pops',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmsans',
})

const calSans = LocalFont({
  src: '../public/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} ${calSans.variable} ${poppins.variable} ${GeistSans.variable} ${dm_sans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blogs.antonyjudeshaman.vercel.app/" />
      <meta property="og:title" content="Antony Jude Shaman" />
      <meta property="og:description" content="Portfolio website" />
      <meta
        property="og:image"
        content="https://blogs.antonyjudeshaman.vercel.app/my-banner.jpeg"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white p-3 text-black antialiased selection:bg-green-400 dark:bg-gray-950 dark:text-white dark:selection:bg-purple-950 md:m-0">
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-geist">
              <NavMain />
              <main className="mb-auto">{children}</main>
              <SiteFooter />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
