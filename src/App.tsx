import { useState, useRef } from 'react'
import './App.css'
import Chart from './Chart';

const initialRecords = [
  {
    Date: new Date("2022-01-01"),
    Dollars: 15,
  }, {
    Date: new Date("2022-01-02"),
    Dollars: 100,
  }, {
    Date: new Date("2022-01-03"),
    Dollars: 77,
  }, {
    Date: new Date("2022-01-04"),
    Dollars: 55,
  }, {
    Date: new Date("2022-01-05"),
    Dollars: 42,
  }, {
    Date: new Date("2022-01-06"),
    Dollars: 53,
  }, {
    Date: new Date("2022-01-07"),
    Dollars: 32,
  }
]
/*<Chart data={initialRecords}/>*/

function App() {
  const [expenses, setExpenses] = useState(initialRecords);
  const curBalance = 2786;
  const spending = initialRecords.map(v => v.Dollars).reduce((prev, cur) => prev + cur, 0);
  const weekKey = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  return (

    <div className='flex flex-1 h-[100vh] justify-center items-center bg-[#1099A1]'>
      <div className='flex flex-col w-[350px]  gap-2'>
        <div className='flex  flex-row  rounded-md  justify-between items-center bg-[#ED7B2F] p-3' >
          <div className='flex flex-col basis-[200px]'>
            <h3 className=''>My balance</h3>
            <p className='font-bold'>${curBalance+500}</p>
          </div>
          <img className='flex w-8 h-8' src='logo.svg' />
        </div>
        <div className='flex flex-col rounded-md justify-between items-center leading-[none] text-left bg-white p-3'>
          <h3 className='pb-2 w-full font-bold text-lg r'>Spending - Last 7 days</h3>
          <Chart data={initialRecords}></Chart>
          <div className='flex flex-1 w-full flex-row capitalize'>
            <div className='flex flex-col basis-1/2'>
              <p className='text-lg text-[#585858c2]'> Total this month</p>
              <span className='font-bold text-[2rem] '>${spending.toFixed(2)}$</span>
            </div>
            <div className='flex flex-col basis-1/2  text-right  justify-center'>
              <p className='font-bold text-base l'>+2.4%</p>
              <span className=' text-base text-[#585858c2]'> from last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
