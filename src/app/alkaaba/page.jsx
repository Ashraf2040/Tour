import EmblaCarousel from '@/components/EmbalaCaresoul'
import React from 'react'
import "../../components/css/embla.css"
import "../../components/css/base.css"
import "../../components/css/sandbox.css"


export default function page() {
    const OPTIONS = { containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className='h-screen w-screen'>
       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}
