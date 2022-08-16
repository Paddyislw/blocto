import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchChartData } from '../Features/ChartSlice';
import { selectDataChart, selectLoadChart } from '../Features/ChartSlice';
import {MoonLoader} from 'react-spinners';

export default function ChartPage() {
  Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement)

  const [days, setdays] = useState(1)
  const load = useSelector(selectLoadChart)
  const dataOfChart = useSelector(selectDataChart)
  const dispatch = useDispatch()

  const activeClass = 'bg-[#00e3a5] text-black border-[1px] border-[#00e3a5] py-1 w-32 rounded'
  const inActiveClass = 'border-[1px] border-[#00e3a5] py-1 w-32 rounded'

  const [tab, settab] = useState(1)

  useEffect(() => {
    dispatch(fetchChartData(days))
  }, [days])

  return (
    <div className='text-white px-[135px] h-[400px] w-full'>
      {load && <Line
        data={{
          labels: dataOfChart.prices.map((coin) => {
            let date = new Date(coin[0]);
            let time = date.getHours() > 12
              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
              : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              data: dataOfChart.prices.map((coin) => coin[1]),
              label: `Price ( Past Days ) in USD`,
              borderColor: "#00e3a5",
            },
          ]
        }}
     
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
          maintainAspectRatio: false,
          hover: true,

        }}
      />}
      {!load && <div className='text-center h-[400px] flex justify-center items-center'><MoonLoader color="#00e3a5" size={40}/></div>}
      <div className='flex space-x-5'>
        <button className={tab===1?activeClass:inActiveClass} onClick={() => {
          setdays(1)
          settab(1)
        }
        }>24 Hours</button>
        <button className={tab===2?activeClass:inActiveClass} onClick={() => {
          setdays(30)
          settab(2)
        }}>30 Days</button>
        <button className={tab===3?activeClass:inActiveClass} onClick={() => {
          setdays(90)
          settab(3)
        }}>3 Months</button>
        <button className={tab===4?activeClass:inActiveClass} onClick={() => {
          setdays(365)
          settab(4)
        }}>1 Year</button>
      </div>
    </div>
  )
}
