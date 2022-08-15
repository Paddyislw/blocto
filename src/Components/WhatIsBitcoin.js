import React from 'react'
import bitcoin from '../Media/bitcoin.png'


export default function WhatIsBitcoin() {
  return (
    <div className='whatblock  pt-20 mt-32 mb-10'>
        <p className='text-white text-4xl font-semibold text-center'>What is <span className='text-[#00E3A5]'>Bitcoin</span> ?</p>
        <div className=' rect bg-opacity-50 h-[400px]  mt-10 flex items-center px-20 py-4 rounded-[250px] justify-between'>
            <img src={bitcoin}  className='w-[250px] h-[250px]'/>
            <div className='text-white text-xl space-y-4'>
                <p>Bitcoin is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside </p>
                <p>the control of any one person group, or entity, and thus removing the need for third-party involvement </p>
                <p>in financial transactions  It is rewarded to blockchain miners for the work done to verify transactions  </p>
                <p>and can be purchased on several exchanges.Bitcoin was introduced to the public in 2009</p>
            </div>
        </div>
    </div>
  )
}
