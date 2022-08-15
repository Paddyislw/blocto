import React from 'react'

export default function ProsVsCons() {
  return (
    <div className='mt-32'>
      <p className='text-center text-white text-4xl font-semibold'>Pros <span className='text-[#00E3A5]'>VS</span> cons of blockchain</p>
      <div className='flex justify-center space-x-20 mt-10'>
        <div className='w-[520px] h-[500px] bg-[#0c1311] rounded-2xl shadow-lg'>
          <p className='text-xl text-center text-[#00E3A5] my-6'>PROS</p>
          <hr className='mb-10 border-[1px] border-[#00E3A5] w-[450px]  mx-auto'/>
          <div className='text-white text-xl ml-4 space-y-16'>
            <p><span className='text-[#00E3A5] mr-1'>1.</span> Cost reductions by eliminating third-party verification</p>
            <p><span className='text-[#00E3A5] mr-1'>2.</span> Transactions are secure, private, and efficient</p>
            <p><span className='text-[#00E3A5] mr-1'>3.</span> Decentralization makes it harder to tamper with</p>
            <p><span className='text-[#00E3A5] mr-1'>4.</span> Transparent technology</p>
          </div>
        </div>
        <div className='w-[520px] h-[500px] bg-[#0c1311] rounded-2xl shadow-lg'>
          <p className='text-xl text-center text-[#00E3A5] my-6'>CONS</p>
          <hr className='mb-10 border-[1px] border-[#00E3A5] w-[450px]  mx-auto'/>
          <div className='text-white text-lg ml-4 space-y-16'>
            <p><span className='text-[#00E3A5] mr-1'>1.</span> Significant technology cost associated mining bitcoin</p>
            <p><span className='text-[#00E3A5] mr-1'>2.</span> History of use in illicit activities, such as on the dark web</p>
            <p><span className='text-[#00E3A5] mr-1'>3.</span> Regulation varies by jurisdiction and remains uncertain</p>
            <p><span className='text-[#00E3A5] mr-1'>4.</span> Low transactions per second</p>
          </div>
        </div>
      </div>
    </div>
  )
}
