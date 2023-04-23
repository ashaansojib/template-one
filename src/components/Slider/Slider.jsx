import React from 'react';

const Slider = () => {
    return (
        <div style={{backgroundImage : "url(https://dtguru.wpenginepowered.com/wp-content/uploads/2014/05/bg2.jpg)"}} className='lg:h-full bg-cover'>
            <div className='my-container '>
                <div className='w-1/3 space-y-2 py-6'>
                    <h2 className='font-bold text-[#355c7d] text-5xl'>Study With Group Of Professional</h2>
                    <p className='text-2xl font-medium text-sky-500'>Take Your Ultimate chance!!</p>
                    <button className='inline px-4 py-3 hover:bg-gray-600 rounded-md bg-[#355c7d] text-white'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;