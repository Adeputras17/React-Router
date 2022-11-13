import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"


const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w[1440px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full flex flex-col shadow-xl my-4 py-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
                <h2 className='text-2xl font-bold py-8 text-center'>Single User</h2>
                <p className='text-4xl font-bold text-center'>Rp.100k</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Sent Up To 2Gb</p>
                </div>
                <button className='bg-[#26c96a] item-center font-medium text-black rounded-md w-[200px] mx-auto my-6 py-3 px-6'>Lets Order</button>
            </div>
            <div className='w-full flex flex-col shadow-xl bg-gray-100 my-8 md:my-0 py-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparant' src={double} alt="/" />
                <h2 className='text-2xl font-bold py-8 text-center'>Double User</h2>
                <p className='text-4xl font-bold text-center'>Rp.150k</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'>1000GB Storage</p>
                    <p className='py-2 border-b mx-8'>2 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Sent Up To 4Gb</p>
                </div>
                <button className='bg-[#000000] item-center font-medium text-[#26c96a] rounded-md w-[200px] mx-auto my-6 py-3 px-6'>Lets Order</button>
            </div>
            <div className='w-full flex flex-col shadow-xl my-4 py-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
                <h2 className='text-2xl font-bold py-8 text-center'>Triple User</h2>
                <p className='text-4xl font-bold text-center'>Rp.200k</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'>1500GB Storage</p>
                    <p className='py-2 border-b mx-8'>3 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Sent Up To 8Gb</p>
                </div>
                <button className='bg-[#26c96a] item-center font-medium text-black rounded-md w-[200px] mx-auto my-6 py-3 px-6'>Lets Order</button>
            </div>
        </div>
    </div>
  )
}

export default Cards