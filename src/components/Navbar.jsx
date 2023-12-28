import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
               {navLinks.map((link) => (
                <li key={link.label}>
                    <a className='font-montserrat leading-normal text-lg text-slate-gray' href={link.href}>{link.label}</a>
                </li>
               ))} 
            </ul>
            <div className='hidden max-lg:block cursor-pointer' onClick={() => setOpenMenu(true)}>
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
        <section className={`flex flex-col bg-white fixed top-0 ${ openMenu ? 'right-0' : 'right-[-100%]' } z-50 h-full duration-500 w-[60%] sm:w-[330px] px-4 py-5`}>
                <button className="bg-none border-none" onClick={() => setOpenMenu(false)}>
                    <IoMdClose className='text-xl hover:scale-105 duration-200 ease-in-out' />
                </button>
                <ul className='flex-1 flex flex-col mt-11 gap-5'>
               {navLinks.map((link) => (
                <li key={link.label} onClick={() => setOpenMenu(false)}>
                    <a className='font-montserrat leading-normal text-xl text-slate-gray duration-200 hover:text-black' href={link.href}>{link.label}</a>
                </li>
               ))} 
            </ul>
        </section>
        <div className={`bg-black opacity-50 fixed w-full h-full top-0 left-0 z-20 duration-300 ${openMenu ? 'block' : 'hidden'}`}></div>
    </header>
  )
}

export default Navbar