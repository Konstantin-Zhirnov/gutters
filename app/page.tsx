'use client'

import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'

import { Proud } from './components/Proud'

import { Warranties } from './components/Warranties'

import { Customer } from './components/Customer'
import { WorkShowcase } from '@/app/components/WorkShowcase'
import { GetInTouch } from '@/app/components/GetInTouch'
import { Certificates } from '@/app/components/Certificates'

export default function Home() {
  return (
    <>
      <Hero />

      <Intro />

      <Services />

      <Proud />

      <Customer />

      <WorkShowcase />

      <Warranties />

      <GetInTouch />

      <Certificates />
    </>
  )
}
