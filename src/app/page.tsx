import React from 'react'
// import HomePage from './Home/page'
import HomePage from '@/app/home-page'
import { ParadeEventJsonLd } from '@/components/structured-data'

const page = () => {
  return (
    <div>
      <ParadeEventJsonLd />
      <HomePage />
    </div>
  )
}

export default page
