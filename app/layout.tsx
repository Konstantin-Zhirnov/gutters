import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import { ShowHeader } from './components/ShowHeader'
import { Footer } from './components/Footer'
import { Phone } from './components/Phone'

import './globals.css'

export const metadata: Metadata = {
  title: 'Gutters | Victoria, Nanaimo, Campbell River | Fast service - Aarsen Gutters',
  description:
    'Get a free estimate in 24 hrs. Expert gutter installation, repair & cleaning in Victoria, Nanaimo & Campbell River. Trusted by 4000+ homeowners.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ShowHeader />

        <main>{children}</main>

        <Footer />

        <Phone />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  )
}
