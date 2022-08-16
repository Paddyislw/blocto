import React from 'react'
import Hero from '../Media/Hero.png'

export default function HeroSec() {
    return (
        <div className='flex justify-between items-center pt-[70px] pb-[200px] sm:flex-col sm:items-center '>
            <div>
                <p className='text-[#80AB9E] text-xl sm:text-center'>Build the Future with</p>
                <p className='text-white text-5xl lg:text-3xl mt-3 mb-1 sm:text-center'>Blockchain technology</p>
                <p className='text-white text-5xl lg:text-3xl sm:text-center'>and Currency</p>
                <a href='https://bitcoin.org/bitcoin.pdf' target='_blank' className=''>
                    <button className=' sm:block sm:mx-auto sm:mt-20 sm:mb-6 bg-[#00E3A5]
                     mt-32 w-[200px] lg:w-[150px] py-4 rounded-lg 
                     font-semibold hover:bg-transparent hover:text-white
                     hover:border-[1px] hover:border-[#00E3A5]'>
                        Get Whitepaper
                    </button>
                </a>
            </div>
            <div>
                <img src={Hero} className='w-[900px] lg:w-[553px]' />
            </div>
        </div>
    )
}
