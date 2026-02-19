import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Solution from '../components/Solution';
import Offer from '../components/Offer';
import TestimonialsAndFAQ from '../components/TestimonialsAndFAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Story />
            <Solution />
            <Offer />
            <TestimonialsAndFAQ />
            <Footer />
        </>
    );
};

export default Home;
