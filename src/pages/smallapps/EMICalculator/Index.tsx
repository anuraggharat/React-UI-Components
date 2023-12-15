import React, { ChangeEvent, useEffect, useState } from 'react';
const PROCESSING_FEES_PERCENT=1
const tenureYears = 20

function numberWithCommas(x:string) {
    if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

export default function Index() {
 
  const [amount,setAmount] = useState({
    loan:0,
    downPayment:0,
    rate:6,
    tenure:0
  })

  const [emi,setEmi] = useState(0)

  const {loan,downPayment,tenure,rate} = amount


  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    const value = e.target.name === 'tenure' ? Number(e.target.value) : e.target.value;
    setAmount((amount) => ({ ...amount, [e.target.name]: value }));
  }
  

  function calculate() {
    const ratePercent = rate / 100;
    const actualLoanAmount = loan - downPayment;
    const processingFees = (actualLoanAmount * PROCESSING_FEES_PERCENT) / 100;
    const emiAmount = ((actualLoanAmount + processingFees) * ratePercent * (1 + ratePercent) **tenure)/((1 + ratePercent)**(tenure - 1));
    setEmi(emiAmount);
  }

  useEffect(()=>{
    calculate()
  },[loan,downPayment,tenure,rate])

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      <div className='w-1/3 border border-gray-200 p-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-2xl font-semibold'>Loan Amount</p>
            <input
              type='number'
              className='border border-gray-400 p-2'
              value={amount.loan}
              onChange={handleChange}
              name='loan'
            />
          </div>
          <div>
            <input
              className='w-full'
              type='range'
              value={amount.loan}
              onChange={handleChange}
              min={0}
              max={100000000}
              name='loan'
            />
            <div className='flex flex-row justify-between'>
              <p>0</p>
              <p>10,00,00,000</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-2xl font-semibold'>Down payment</p>
            <input
              type='number'
              className='border border-gray-400 p-2'
              value={amount.downPayment}
              onChange={handleChange}
              name='downPayment'
            />
          </div>
          <div>
            <input
              className='w-full'
              type='range'
              value={amount.downPayment}
              onChange={handleChange}
              min={0}
              max={10000000}
              name='downPayment'
            />
            <div className='flex flex-row justify-between'>
              <p>0</p>
              <p>1,00,00,000</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between items-center'>
            <p className='text-2xl font-semibold'>Rate of Interest</p>
            <input
              type='number'
              className='border border-gray-400 p-2'
              value={amount.rate}
              onChange={handleChange}
              name='rate'
            />
          </div>
          <div>
            <input
              className='w-full'
              type='range'
              value={amount.rate}
              onChange={handleChange}
              min={0}
              max={100}
              name='rate'
            />
            <div className='flex flex-row justify-between'>
              <p>0</p>
              <p>100</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-2'>
            <p>Loan tenure</p>
            <select name="tenure" id="tenure" className='border border-gray-400 p-2' onChange={handleChange}>
                {Array(20).fill(1).map((item,index)=>(
                    <option value={index+1}>{`${index+1} ${index===0 ? 'year' : 'years'}`}</option>
                ))}
            </select>
            </div>
            <div className='flex flex-col gap-2'>
            <p>Processing Fees</p>
            <input type="text" name="fees" id="" value={`1%`} disabled className='border border-gray-400 p-2 cursor-not-allowed'/>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-xl font-semibold'>
                Monthly EMI: {numberWithCommas(emi.toFixed())}
            </p>
            <p className='text-xl font-semibold'>
                Monthly EMI: {"193123"}
            </p>
            <p className='text-xl font-semibold'>
                Monthly EMI: {"193123"}
            </p>
{tenure}
        </div>
      </div>
    </div>
  );
}
