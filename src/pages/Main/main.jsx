import React from 'react';
import Hero from '../../components/heroSection/hero';
import Services from '../../components/carosel/carosel';
import IntroSection from '../../components/intro/into';
import Footer from '../../components/footer/footer';
function Main(props) {
    return (
        <div>
            <Hero />
            <IntroSection />
            <Services />
            <Footer />
        </div>
    );
}

export default Main;