import React from 'react'
import Background from '../Media/Background.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [tab, setTab] = useState(1)
    const [bg, setbg] = useState(true)
    const [toggle, settoggle] = useState(false)
    const activeClass = 'text-xl text-[#00E3A5] cursor-pointer'
    const inactiveClass = 'text-xl text-white cursor-pointer'
    const bgTran = 'flex justify-between items-center text-white py-8 font-semibold  top-0 z-50 px-[135px] left-0 sticky 2xl:px-[90px]  xl:px-[85px]  lg:px-[50px] md:px-[20px] sm:px-[10px] '
    const bgGreen = 'flex justify-between items-center text-white py-8 font-semibold  top-0 z-50 bg-[#09251E] bg-opacity-100   px-[135px] left-0 sticky  2xl:px-[90px]  xl:px-[85px]  lg:px-[50px] md:px-[20px] sm:px-[10px] '

    const bgChange = () => {
        if (window.scrollY > 50) {
            setbg(false)
        }
        else {
            setbg(true)
        }
    }
    window.addEventListener('scroll', bgChange)
    return (
        <div className={bg ? bgTran : bgGreen} >
            <Link to='/'>
                <div>
                    <p className='text-4xl'>Bloc<span className='text-[#00E3A5] bg-opacity-50'>To</span></p>
                </div>
            </Link>
            <div className='flex items-center justify-between  space-x-16 lg:hidden'>
                <Link to='/'> <p className={tab === 1 ? activeClass : inactiveClass} onClick={() => { setTab(1) }}>Home</p> </Link>
                <Link to='/calculator'> <p className={tab === 2 ? activeClass : inactiveClass} onClick={() => { setTab(2) }}>Calcultaor</p></Link>
                <Link to='/chart'>  <p className={tab === 3 ? activeClass : inactiveClass} onClick={() => { setTab(3) }}>Chart</p></Link>
            </div>
            <div className='hidden lg:block relative'>
                <button onClick={() => { settoggle(!toggle) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" />
                    </svg>
                </button>
                {toggle && <div className='bg-gray-500 w-[170px] h-[165px] absolute right-0 flex-col flex items-center rounded-xl py-3 space-y-6'>
                    <Link to='/'> <p className={tab === 1 ? activeClass : inactiveClass} onClick={() => { setTab(1) }}>Home</p> </Link>
                    <Link to='/calculator'> <p className={tab === 2 ? activeClass : inactiveClass} onClick={() => { setTab(2) }}>Calcultaor</p></Link>
                    <Link to='/chart'>  <p className={tab === 3 ? activeClass : inactiveClass} onClick={() => { setTab(3) }}>Chart</p></Link>
                </div>}
            </div>
            <button className='text-base border-[1px] border-[#00E3A5] w-[160px] py-3 rounded hover:bg-[#00E3A5] hover:text-black lg:hidden'>Join For Free</button>
        </div>
    )
}
