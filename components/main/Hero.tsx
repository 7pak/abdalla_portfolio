import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      {/* <video autoPlay muted loop className='rotate-180 absolute mt-10 max-sm:top-[-270px] max-md:top-[-420px] top-[-540px] right-[-420px] z-[1] w-full h-full object-cover opacity-50'>
        <source src='/blackhole.webm' type='video/webm' />
      </video> */}
      <HeroContent />
    </div>
  )
}

export default Hero