import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container relative">
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
            <button className='block lg:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                { openMenu ? <IoMdClose className='text-xl' /> : <img src={hamburger} alt="Hamburger" width={25} height={25} /> }
            </button>
            <section className={`lg:hidden ${ openMenu ? 'flex' : 'hidden'} absolute top-[70px] right-0  flex-col items-end bg-white shadow-xl py-5 px-8 scale-up-center`}>
                <ul className='flex-1 flex flex-col my-5 gap-4'>
                    {navLinks.map((link) => (
                        <li key={link.label} onClick={() => setOpenMenu(false)}>
                            <a className='font-montserrat leading-normal text-xl text-slate-gray duration-200 hover:text-black' href={link.href}>{link.label}</a>
                        </li>
                    ))} 
                </ul>
            </section>
        </nav>    
    </header>
  )
}

export default Navbar