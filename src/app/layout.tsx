import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'A simple hello world application with preview URL display',
  keywords: ['hello world', 'next.js', 'react', 'preview'],
  authors: [{ name: 'BLACKBOX.AI' }],
  creator: 'BLACKBOX.AI',
  publisher: 'BLACKBOX.AI',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Hello World App',
    description: 'A simple hello world application with preview URL display',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello World App',
    description: 'A simple hello world application with preview URL display',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}