import React from 'react'

const Header = () => {
  return (
    <div className='min-h-[480px] sm:min-h-[580px] lg:h-[716px] bg-[url(./assets/img/headerbg.png)] flex justify-center items-end bg-center bg-no-repeat bg-cover px-3 pb-6 sm:pb-0'>

        <div className='w-full max-w-[600px] lg:h-[209px] text-center'>
            <h3 data-aos="zoom-out-up" className='font-popins text-[#C0C0C0] text-[12px] sm:text-[14px] uppercase tracking-[2px]'> Photographer & Filmmaker </h3>
            <h1 data-aos="zoom-out-up" className='text-[32px] xs:text-[38px] sm:text-[46px] lg:text-[54px] font-popins'> Aperture Studios </h1>
            <p data-aos="zoom-out-up" className='font-popins text-[13px] sm:text-[14px] text-[#C0C0C0]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. </p>
        </div>

    </div>
  )
}

export default Header
