import React, { useState } from 'react'
import navLogo from "../../assets/img/navlogo.png"

const links = ['Business areas', 'Featured images', 'Gear cage', 'Contact']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-50 h-[70px] md:h-[90px] bg-[black] flex justify-between items-center'>

        <img data-aos="zoom-in" className='w-[100px] md:w-[128px]' src={navLogo} alt="logo" />

        {/* Desktop / planshet menyu */}
        <ul className='hidden md:flex gap-[18px] lg:gap-[36px] items-center'>
            {links.map((l) => (
              <li key={l} data-aos="zoom-in" className='font-popins text-[12px] lg:text-[13px] cursor-pointer whitespace-nowrap'>{l}</li>
            ))}
            <button data-aos="zoom-in" className='btn bg-[white] text-[black] rounded-[14px] font-popins text-[14px] lg:text-[16px]'> Get template </button>
        </ul>

        {/* Hamburger tugma (telefon) */}
        <button
          type='button'
          aria-label='Menu'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className='md:hidden btn btn-ghost btn-square'
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Mobil dropdown menyu */}
        {open && (
          <ul className='md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 flex flex-col gap-1 p-4 shadow-lg'>
            {links.map((l) => (
              <li key={l} onClick={() => setOpen(false)} className='font-popins text-[14px] py-2 cursor-pointer'>{l}</li>
            ))}
            <button className='btn bg-[white] text-[black] rounded-[14px] font-popins mt-2 w-full'> Get template </button>
          </ul>
        )}

    </div>
  )
}

export default Navbar
