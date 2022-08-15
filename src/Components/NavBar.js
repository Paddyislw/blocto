import React from 'react'
import Background from '../Media/Background.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [tab, setTab] = useState(1)
    const [bg, setbg] = useState(true)
    const activeClass = 'text-xl text-[#00E3A5] cursor-pointer'
    const inactiveClass = 'text-xl text-white cursor-pointer'
    const bgTran ='flex justify-between items-center text-white py-8 font-semibold  top-0 z-50 px-[135px] left-0 sticky  '
    const bgGreen = 'flex justify-between items-center text-white py-8 font-semibold  top-0 z-50 bg-[#09251E] bg-opacity-100   px-[135px] left-0 sticky   '
    
    const bgChange = () =>{
        if (window.scrollY > 50){
            setbg(false)
        }
        else{
            setbg(true)
        }
    }
    window.addEventListener('scroll',bgChange)
    return (
        <div className={bg?bgTran:bgGreen} >
            <div>
                <p className='text-3xl '>Bloc<span className='text-[#00E3A5] bg-opacity-50'>To</span></p>
            </div>
            <div className='flex items-center justify-between  space-x-16'>
              <Link to='/'> <p className={tab===1?activeClass:inactiveClass} onClick={()=>{setTab(1)}}>Home</p> </Link> 
              <Link to='/calculator'> <p className={tab===2?activeClass:inactiveClass} onClick={()=>{setTab(2)}}>Calcultaor</p></Link> 
              <Link to='/chart'>  <p className={tab===3?activeClass:inactiveClass} onClick={()=>{setTab(3)}}>Chart</p></Link>
            </div>
            <button className='text-base border-[1px] border-[#00E3A5] w-[160px] py-3 rounded hover:bg-[#00E3A5] hover:text-black'>Join For Free</button>
        </div>
    )
}
