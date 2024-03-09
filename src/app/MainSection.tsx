import React from 'react';
import Image from 'next/image';

const MainSection = () => {
    return (
        <section className="main-section flex  text-center md:text-left  text-pretty items-center justify-center">
            <div className='   '>
                <p className="text-3xl font-medium text-pretty md:text-4xl">
                    Discover real estate investment opportunities with <span className='font-bold text-primary animate-fade-in  animate-delay-300'>Brickz!</span>
                </p>
                <p className='text-lg pt-3 text-pretty md:text-2xl'>Our platform empowers you to find and seize deals with the highest ROI potential in the market. Start building your wealth with Brickz today</p>
            </div>

            <Image src="/home.jpg" className="shadow-xl hidden md:block" alt="hero" width={600} height={600} />
        </section>
    );
}

export default MainSection;
