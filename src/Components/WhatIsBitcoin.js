import React from 'react'
import bitcoin from '../Media/bitcoin.png'


export default function WhatIsBitcoin() {
  return (
    <div className='whatblock  pt-20 mt-32 mb-10'>
      <p className='text-white text-4xl font-semibold text-center'>What is <span className='text-[#00E3A5]'>Bitcoin</span> ?</p>
      <div className=' bg-[#0c1311]  mt-10 flex items-center px-20 py-12 rounded-[250px] justify-between xl:px-12 md:flex-col md:px-0 '>
        <img src={bitcoin} className='w-[250px] h-[250px] xl:w-[220px] xl:h-[220px] lg:w-[150px] lg:h-[150px] ' />
        <div className='text-white text-xl md:px-10 py-4'>          
          <p className=' md:px-1 text-center'>
            Bitcoin is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside
            the control of any one person group, or entity, and thus removing the need for third-party involvement
            in financial transactions  It is rewarded to blockchain miners for the work done to verify transactions
            and can be purchased on several exchanges.Bitcoin was introduced to the public in 2009
          </p>
        </div>
      </div>
    </div>
  )
}
