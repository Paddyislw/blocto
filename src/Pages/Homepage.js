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
            <div className='px-[135px]'>
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
