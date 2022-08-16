import React from 'react'
import BitcoinSecure from '../Components/BlockchainSecure'
import Footer from '../Components/Footer'
import HeroSec from '../Components/HeroSec'
import NavBar from '../Components/NavBar'
import ProsVsCons from '../Components/ProsVsCons'
import WhatIsBitcoin from '../Components/WhatIsBitcoin'
import WhatIsBlockchain from '../Components/WhatIsBlockchain'

export default function Homepage() {
    return (
        <>
            <div className='px-[135px] 2xl:px-[90px]  xl:px-[85px]  lg:px-[50px] md:px-[20px] sm:px-[10px]'>
                <HeroSec />
                <WhatIsBlockchain />
                <WhatIsBitcoin />
                <BitcoinSecure />
                <ProsVsCons />
            </div>
            <Footer />
        </>
    )
}
