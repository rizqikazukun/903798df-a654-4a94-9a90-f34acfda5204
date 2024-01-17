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
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
