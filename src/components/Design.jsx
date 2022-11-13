import React from 'react'
import kompu from "../assets/—Pngtree—hand drawn cartoon computer video_5364437.png"


const Design = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1440px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] my-3 mx-auto' src={kompu} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#26c96a] font-bold'>Design Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Your Data</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam labore pariatur exercitationem impedit necessitatibus reprehenderit, eos debitis ab nisi voluptate unde neque repellat quia, blanditiis numquam voluptatum dolorum facilis magnam!</p>
                <button className='bg-[#000000] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-3 py-3 text-white'>Lets Order</button>
            </div>
            
        </div>
    </div>
  )
}

export default Design