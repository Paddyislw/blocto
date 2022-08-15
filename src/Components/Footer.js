import React from 'react'
import facebook from '../Media/facebook.png'
import twitter from '../Media/twitter.png'
import instagram from '../Media/instagram.png'

export default function Footer() {
  return (
    <div className='footer px-[200px] flex items-center py-20 mt-32 justify-between '>
      <div className=''>
        <p className=' text-white text-5xl mb-6'>Bloc<span className='text-[#00E3A5]'>To</span></p>
        <div className='text-[#80AB9E] mb-8'>
          <p>A Lorem Ipsum is simply dummy text of the printing</p>
          <p>and typesetting industry. Lorem Ipsum has been</p>
          <p>the industry's  standard dummy text ever since the</p>
          <p> 1500s, when an unknow</p>
        </div>
        <p className='text-xl text-white font-semibold'>Social Media</p>
        <div className='flex mb-6 space-x-6 mt-4'>
          <img src={facebook} className='w-14' />
          <img src={twitter} className='w-14' />
          <img src={instagram} className='w-14' />
        </div>
        <p className='text-[#80AB9E]'>All rights reserved@2022</p>
      </div>
      <div className='border-gray-500 border-r-[1px] h-[360px]'></div>
      <div className=''>
        <p className='text-5xl text-white mb-12'>NewsLetter</p>
        <div className='relative inline-block mb-12'>
          <input className='border-[1px] border-[#00E3A5] bg-transparent px-3 py-2 rounded w-[450px]  text-white focus:outline-none' />
          <button className='absolute right-0 py-2 bg-[#00E3A5] top-[1px] w-28 rounded hover:text-white hover:border-[1px] hover:border-[#00E3A5] hover:bg-transparent'>Submit</button>
        </div>
        <hr className='border-[1px] border-[#80AB9E] mb-12 w-[450px]' />
        <div className='flex px-6 w-[450px] justify-between'>
          <div className='text-[#80AB9E] space-y-2'>
            <p className='text-xl font-semibold text-white mb-4'>About Us</p>
            <p>Whitepaper</p>
            <p>Blog</p>
            <p>Activity</p>
          </div>
          <div className='text-[#80AB9E] space-y-2'>
            <p className='text-xl font-semibold text-white mb-4'>Support</p>
            <p>Help & Support</p>
            <p>Community</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}
