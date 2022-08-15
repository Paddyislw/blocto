import React from 'react'
import Hero from '../Media/Hero.png'

export default function HeroSec() {
    return (
        <div className='flex justify-between items-center pt-[70px] pb-[200px] '>
            <div>
                <p className='text-[#80AB9E] text-xl'>Build the Future with</p>
                <p className='text-white text-5xl mt-3 mb-1'>Blockchain technology</p>
                <p className='text-white text-5xl'>and Currency</p>
                <a href='https://bitcoin.org/bitcoin.pdf' target='_blank'>
                    <button className='bg-[#00E3A5] mt-32 w-[200px] py-4 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border-[1px] hover:border-[#00E3A5]'>Get Whitepaper</button>
                </a>
            </div>
            <div>
                <img src={Hero} className='w-[900px]' />
            </div>
        </div>
    )
}
