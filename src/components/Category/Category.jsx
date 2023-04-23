import React from 'react';
import './Category.css'
import { FaUser, FaTrophy, FaFlag, FaBookOpen } from "react-icons/fa";

const Category = () => {
    return (
        <div className='bg-[#355C7D] mb-10'>
            <div className='my-container grid grid-cols-4 gap-6'>
                <div className='category-cart'>
                    <div className='flex justify-center'>
                        <span className='transition'><FaUser className='catIcon'></FaUser></span>
                    </div>
                    <div>
                        <h2 className='text-5xl font-bold text-white'>1300</h2>
                        <p className='font-medium text-gray-100'>Learners Educated</p>
                    </div>
                </div>
                <div className='category-cart'>
                    <div className='flex justify-center'>
                        <span className='transition'><FaTrophy className='catIcon'></FaTrophy></span>
                    </div>
                    <div>
                        <h2 className='text-5xl font-bold text-white'>250</h2>
                        <p className='font-medium text-gray-100'>Categories Listed</p>
                    </div>
                </div>
                <div className='category-cart'>
                    <div className='flex justify-center'>
                        <span className='transition'><FaFlag className='catIcon'></FaFlag></span>
                    </div>
                    <div>
                        <h2 className='text-5xl font-bold text-white'>70</h2>
                        <p className='font-medium text-gray-100'>Languages Available</p>
                    </div>
                </div>
                <div className='category-cart'>
                    <div className='flex justify-center'>
                        <span className='transition'><FaBookOpen className='catIcon'></FaBookOpen></span>
                    </div>
                    <div>
                        <h2 className='text-5xl font-bold text-white'>3000</h2>
                        <p className='font-medium text-gray-100'>Courses Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;