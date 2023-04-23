import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    return (
        <div className='my-container'>
            <p className='text-xl text-[#355c7d] text-center py-4'>Be the first to know about new Course and Discounts: Subscribe to Newsletter</p>
            <div className="flex justify-center items-center gap-4 p-4 border-b">
                <div>
                    <TextInput
                        id="small"
                        type="text"
                        sizing="sm"
                    />
                </div>
                <div>
                    <TextInput
                        id="base"
                        type="text"
                        sizing="md"
                    />
                </div>
                <button className='inline px-4 py-3 hover:bg-gray-600 rounded-md bg-[#355c7d] text-white'> <Link>Subscribe</Link></button>
            </div>
        </div>
    );
};

export default Subscribe;