import React from 'react'

const Newslater = () => {
  return (
    <div className='text-white w-full py-16 px-4'>
        <div className='max-w[1440px] mx-auto grid lg:grid-cols-3 px-8'>
            <div className='lg:col-span-2 my-5'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-3 font-bold '>Wants To Boost Your Product</h1>
                <p>Sign Up To Our Newslater And Stay Up To Date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 w-full rounded-md text-black' type="Email" placeholder='Enter Your Email' />
                    <button className='bg-[#26c96a] font-medium rounded-md text-black w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p >We Care And We Know What You Needs Read Our <span className='text-[#26c96a]'>Privacy Police.</span> </p>
            </div>
        </div>
    </div>
  )
}

export default Newslater