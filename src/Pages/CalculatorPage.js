import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataForCalculator, selectloading, selectval } from '../Features/CalculatorSlice'
import { dataOfCurr } from '../DataOfCurr'


export default function CalculatorPage() {
    const data = useSelector(selectval)
    const load = useSelector(selectloading)
    const dispatch = useDispatch()
    const [valueCurr, setValueCurr] = useState(null)
    const [currency, setCurrency] = useState('')
    const [loading, setloading] = useState(true)


    useEffect(() => {
        dispatch(fetchDataForCalculator({ currency: currency, value: valueCurr }))
    }, [valueCurr, currency])


    return (
        <div className='text-white flex justify-between px-[300px] items-center mt-32'>
            <div className='space-y-6'>
                <p className='text-6xl'><span className='text-[#00e3a5]'>Calculate</span> Exchange</p>
                <p className='text-6xl' >Rates Of your</p>
                <p className='text-6xl'> currency</p>
            </div>
            <div className='border-gray-500 border-r-[1px] h-[360px]'></div>
            <div className='bg-gray-500 w-[380px] h-[400px] rounded-[20px] flex-col flex px-10 py-10'>
                <p className='text-gray-800 font-semibold text-2xl mb-2'>Currency</p>
                <select onChange={(e) => { setCurrency(e.target.value) }} className='  bg-gray-400 py-3 rounded px-1 text-gray-800 focus:outline-none mb-4'>
                    <option selected >Open menu</option>
                    {dataOfCurr.map((e) => {
                        return (
                            <option value={e.name}>{e.name}</option>
                        )
                    })}
                </select>
                <p className='text-gray-800 font-semibold text-2xl mb-2'>Value</p>
                <input value={valueCurr}
                    onChange={(e) => { setValueCurr(e.target.value) }}
                    className='text-black focus:outline-none mb-10 bg-gray-400 py-[12px] rounded px-3'
                    type='number'
                    min='0' />
                {load && <p className='text-2xl text-center'><span className='text-gray-800 font-semibold'>Conversion:</span> {data}</p>}
                {currency && valueCurr ? null : <p className='text-2xl text-gray-800 font-semibold text-center'>!!!Enter the  Values!!!</p>}
            </div>
        </div>
    )
}
