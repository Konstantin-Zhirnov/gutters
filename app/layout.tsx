import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Footer } from '@/app/components/Footer'

import './globals.css'
import { Phone } from '@/app/components/Phone'

export const metadata: Metadata = {
  title: 'Havana classic car tours',
  description:
    'One of the most iconic ways to immerse oneself in the spirit of Havana is through a tour with Havana Classic Cars. You will enjoy a relaxing ride, travel with ease with an experience driver and witness authentic Cuban culture and lifestyle.',
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
