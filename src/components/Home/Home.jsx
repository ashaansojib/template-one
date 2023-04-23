import React from 'react';
import Slider from '../Slider/Slider';
import Subscribe from '../Subscribe/Subscribe';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Category from '../Category/Category';
import Courses from '../Courses/Courses';
import FooterHead from '../FooterHead/FooterHead';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Subscribe></Subscribe>
            <Services></Services>
            <Team></Team>
            <Category></Category>
            <Courses></Courses>
            <FooterHead></FooterHead>
        </div>
    );
};

export default Home;