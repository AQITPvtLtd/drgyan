import React from 'react'
import AboutUs from './AboutUs'
import About from '@/components/homepage/About'
import Faq from '@/components/homepage/Faq'

const page = () => {
  return (
    <div className='mt-20'>
        <About />
        <AboutUs />
        <Faq />
    </div>
  )
}

export default page