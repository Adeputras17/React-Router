import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[-1240px] px-7 text-white'>
        <h1 className="text-5xl font-signature font-bold ml-2 text-[#62f7be]">Cerca Trova</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='p-4 cursor-pointer'><Link to='./Design'>Design</Link></li>
            <li className='p-4 cursor-pointer'><Link to='./Newslater'>Newslater</Link></li>
            <li className='p-4 cursor-pointer'><Link to='./Cards'>Cards</Link></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ?  'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-out duration-700' : 'fixed left-[-100%]' }>
        <h1 className="w-full text-5xl font-signature font-bold ml-2 text-[#62f7be] m-4 mt-5">Cerca Trova</h1>
        <ul className='pt-24 uppercase'>
            <li className='p-4 border-b cursor-pointer border-gray-600'><Link to='/'>Home</Link></li>
            <li className='p-4 border- cursor-pointer border-gray-600'><Link to='./Design'>Design</Link></li>
            <li className='p-4 border-b cursor-pointer border-gray-600'><Link to='./Newslater'>Newslater</Link></li>
            <li className='p-4 cursor-pointer'><Link to='./Cards'>Cards</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar