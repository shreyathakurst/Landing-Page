import React from 'react'

function Navbar() {
  return (
    <div className=' text-black sticky w-full mx-auto h-20 border-b'>
    <div className=' w-full h-full flex items-center justify-between md:px-8 px-3'>
      <div className='font-play tracking-widest'>
        <img className='h-20 w-20'
         src="https://www.thepixelfreak.co.uk/wp-content/uploads/2023/08/Colourful-Bird-Logo-Design.png" alt="" />
      </div>
      <div className='flex md:gap-5 font-pop md:text-sm tracking-wide whitespace-nowrap text-xs gap-3'>
      <a href='#Home'>About</a>
      <a href='#block'>Features</a>
      <a href='#contact'>Contact</a>
    </div>
  </div>
  </div>
  )
}

export default Navbar