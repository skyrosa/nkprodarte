import React from 'react'
import { cart, logoBlack, user } from "../assets/index"

const Header = () => {
    return (
        <div className='w-screen h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                    <img className='w-36' src={logoBlack} alt="logoDark" />
                <div>
                    <div className='items-center gap-8'>
                        <ul className='flex items-center gap-8 text-base text-black font-bold'>
                            <li className=' hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>INICIO</li>
                            <li className=' hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>ESPECTACULOS</li>
                            <li className=' hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>TICKETS</li>
                            <li className=' hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>BLOG</li>
                            <div className='relative'>
                            <img src={cart} alt='shopCart' className='w-6' />
                            <span className='absolute w-6 bottom-5 left-0 text-sm flex items-center justify-center font-semibold font-titleFont'>0</span>
                            </div>
                            <img src={user} alt='user' className='w-8 h-8 rounded-full bg-red-600 border-red-600 border-4' />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
