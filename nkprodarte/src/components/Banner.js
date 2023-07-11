import React, { useState } from 'react';
import { banner1, banner2, banner3, banner4 } from '../assets/index';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        banner1, banner2, banner3, banner4
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div
                    style={{
                        transform: `translateX(-${currentSlide * 100}vw)`,
                        webkitMaskImage: 'linear-gradient(to top, transparent, rgba(0, 0, 0, 1))'
                    }}
                    className='w-[400vw] h-full flex transition-transform duration-1000'
                >
                    {data.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`imgBanner${index + 1}`}
                            className='w-screen h-[650px] object-cover object-center'
                            loading='priority'
                        />
                    ))}
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div
                        onClick={prevSlide}
                        className='w-14 h-12 border-[1px] border-gray-400 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className='w-14 h-12 border-[1px] border-gray-400 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
