import React from 'react'
import secure2 from '../Media/secure2.png'

export default function BlockchainSecure() {
    return (
        <div className='mt-32'>
            <p className='  text-white text-4xl font-semibold'>Is <span className='text-[#00E3A5]'>Blockchain</span> secure ?</p>
            <div className='flex justify-between pt-10 items-center  '> 
                <div className='w-3/4 text-white text-xl bg-[#0c1311] flex flex-col  py-14 px-2 rounded-tr-[140px] rounded-br-[140px] pl-6 space-y-3 '>
                    <p>Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always</p>
                    <p>stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has </p>
                    <p>been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless </p>
                    <p>a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with </p>
                    <p>the hash of the block before it, as well as the previously mentioned timestamp.</p>
                </div>
                <div><img src={secure2} className='w-[220px]'/></div>
            </div>
        </div>
    )
}
