import React from 'react'
import secure2 from '../Media/secure2.png'

export default function BlockchainSecure() {
    return (
        <div className='mt-32'>
            <p className='  text-white text-4xl font-semibold'>Is <span className='text-[#00E3A5]'>Blockchain</span> secure ?</p>
            <div className='flex justify-between pt-10 items-center space-x-4 md:flex-col md:items-center'>
                <div className='w-3/4 text-white text-xl bg-[#081f19] flex flex-col  py-14 px-2 rounded-tr-[140px] rounded-br-[140px] pl-6 space-y-3 '>
                    <p className='pr-4 leading-8'>
                        Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always
                        stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has
                        been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless
                        a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with
                        the hash of the block before it, as well as the previously mentioned timestamp.
                    </p>
                </div>
                <img src={secure2} className='w-[220px] xl:w-[180px] lg:w-[150px] md:w-[180px] md:mt-6' />
            </div>
        </div>
    )
}
