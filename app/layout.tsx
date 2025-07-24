import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Footer } from '@/app/components/Footer'

import './globals.css'
import { Phone } from '@/app/components/Phone'

export const metadata: Metadata = {
  title: 'Gutters | Victoria, Nanaimo, Campbell River | Fast service - Aarsen Gutters',
  description:
    'Get a free estimate in 24 hrs. Expert gutter installation, repair & cleaning in Victoria, Nanaimo & Campbell River. Trusted by 4000+ homeowners.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        <Footer />

        <Phone />
      </body>
    </html>
  )
}
