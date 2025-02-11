import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MockingBird Memes - Laugh Loud. Meme Hard.',
  description: 'Create, remix, and share memes effortlessly. Join MockingBird Memes today!',
  appleWebApp: {
    capable: true,
    title: 'MockingBird Memes',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'MockingBird Memes - Laugh Loud. Meme Hard.',
    description: 'Create, remix, and share memes effortlessly. Join MockingBird Memes today!',
    url: 'https://mockingbirdmemes.com',
    siteName: 'MockingBird Memes',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

