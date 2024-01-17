import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './layout.sass'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wooz Shortener App',
  description: 'More Than Url Shortener',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bd0023" />
      <meta name="msapplication-TileColor" content="#b91d47" />
      <meta name="theme-color" content="#ffffff" />
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
