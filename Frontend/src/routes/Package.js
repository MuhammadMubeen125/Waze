import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Packages from "../components/Package_current";
const Hotel = () => {
    const selectedPackageId = sessionStorage.getItem('selectedPackageId') + ".png";
    const selectedPackage = sessionStorage.getItem('selectedPackage');
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                Homeimage={selectedPackageId}
                title={selectedPackage}
                btnClass="hide"
            />
            <Packages />
            <Footer />
        </>
    );
};

export default Hotel;
