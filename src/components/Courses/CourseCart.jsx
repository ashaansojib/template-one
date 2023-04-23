import React from 'react';
import { Link } from 'react-router-dom';

const CourseCart = ({course}) => {
    const {image, title, lession, price, tag} = course;
    return (
        <div className='border m-2'>
            <div>
                <img src={image} alt="" />
            </div>
            <p className='text-orange-500 p-2'>{tag}</p>
            <h2 className='p-2 text-xl font-medium text-[#3557dc]'>{title}</h2>
            <div className='p-2 flex justify-between items-center'>
                <Link className='py-2 px-4 text-white bg-[#3557dc] hover:bg-orange-500 inline-block'>{price}</Link>
                <span className='text-[#3557d4]'>{lession}</span>
            </div>
        </div>
    );
};

export default CourseCart;