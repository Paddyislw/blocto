import React from 'react'
import what1r from '../Media/what1r.png'
import what2r from '../Media/what2r.png'
import star from '../Media/star.png'
import light from '../Media/light.png'

export default function WhatIsBlockchain() {
    return (
        <div className='flex flex-col pt-20 mt-8 mb-10 '>
            <p className='text-white text-4xl font-semibold'>What is <span className='text-[#00E3A5]'>Blockchain</span> ?</p>
            <div className='  my-10 rounded-[30px]  py-6 flex flex-col  space-y-20'>

                <div className='flex items-center'>
                    <img src={star} className='w-[120px] h-[120px]'/>
                    <div className='my-6 ml-auto rect h-[270px] px-28 pt-14'>
                        <p className='text-[#00E3A5] text-2xl '>Defination</p>
                        <div className='text-white text-lg mt-3'>
                            <p>A blockchain is a distributed database or ledger that is shared among the nodes of a computer network.As a database, a blockchain stores </p>
                            <p>information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin,</p>
                            <p>for maintaining a secure and decentralized record of transactions.The innovation with a blockchain is that it guarantees the fidelity </p>
                            <p>and security of a record of data and generates trust without the need for a trusted third party</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <img  src={light} className='w-[120px] h-[120px]'/>
                    <div className='pb-16 rect ml-auto h-[270px] px-28 pt-4'>
                        <p className='text-[#00E3A5] text-2xl '>Key Takeaways</p>
                        <ul className='text-white text-lg mt-6 space-y-2' >
                            <li><span className='text-[#00E3A5] mr-3'>1:</span>Blockchain is a type of shared database that differs from a typical database in the way that it stores information</li>
                            <li><span className='text-[#00E3A5] mr-3'>2:</span>As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is chained onto the previous block</li>
                            <li><span className='text-[#00E3A5] mr-3'>3:</span>In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control</li>
                            <li><span className='text-[#00E3A5] mr-3'>4:</span>Decentralized blockchains are immutable, which means that the data entered is irreversible</li>
                            <li><span className='text-[#00E3A5] mr-3'>5:</span>Different types of information can be stored on a blockchain, but the most common use so far has been as a ledger for transactions. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
