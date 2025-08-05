'use client'

import { usePathname } from 'next/navigation'

import { Header } from './Header'

export const ShowHeader = () => {
  const pathname = usePathname()

  if (pathname == '/') return null

  return <Header />
}
