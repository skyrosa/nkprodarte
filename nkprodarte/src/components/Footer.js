import React from 'react'
import { logoWhite, pay } from '../assets'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHome } from 'react-icons/fa'
import { MdLocationOn, MdHelp } from 'react-icons/md'
import { BsPerson, BsPersonFill, BsDoorClosed, BsDoorClosedFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-gray-400 py-20 font-titleFont'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                    <div className='flex flex-col gap-7'>
                        <img className='w-32' src={logoWhite} alt='logoWhite' />
                        <p className='text-white text-sm tracking-wide'>© NK Prodarte</p>
                        <img className='w-36' src={pay} alt='payment' />
                        <div className='flex gap-5 text-lg text-gray-500'>
                            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
                            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2l font-semibold text-white mb-4'>locate us</h2>
                        <div className='text-base flex flex-col gap-2'>
                            <p>Barcelona, Spain</p>
                            <p>Phone: 93 655 13 11</p>
                            <p>info@nkprodarte.com</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2l font-semibold text-white mb-4'>profile</h2>
                        <div className='text-base flex flex-col gap-2'>
                            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                                <span>
                                    <BsPerson />
                                </span>
                                my account
                            </p>
                            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                                <span>
                                    <BsDoorClosed />
                                </span>
                                checkout
                            </p>
                            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                                <span>
                                    <MdHelp />
                                </span>
                                help
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <input type='text' className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail'/>
                        <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
