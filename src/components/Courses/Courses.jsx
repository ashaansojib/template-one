import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';
import Marquee from "react-fast-marquee";

const Courses = () => {
    const [courses, SetCourses] = useState([]);
    useEffect(() => {
        fetch('/Courses.json')
            .then(res => res.json())
            .then(data => SetCourses(data))
    }, [])
    return (
        <div className='my-container'>
            <h2 className='text-2xl py-10 font-medium'>OUR FEATURED COURSES</h2>
            <Marquee pauseOnHover='true'>
                <div className='grid grid-cols-4'>
                    {
                        courses.map(course => <CourseCart
                            key={course.id}
                            course={course}
                        ></CourseCart>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Courses;