import React from 'react';
import Image from 'next/image';
import PropertyCarousel from '../components/PropertyCarousel';

const MainSection = () => {
    return (
        <div className="">

            <section className='main-section flex  text-center md:text-left  text-pretty items-center justify-center'>
                <div>
                    <p className="text-2xl font-medium text-pretty md:text-4xl">
                        Investing made real. Real easy, real returns with <span className='font-bold  text-primary animate-fade-in  animate-delay-300'>Brickz!</span>
                    </p>
                </div>

            </section>



        </div>
    );
}

export default MainSection;
