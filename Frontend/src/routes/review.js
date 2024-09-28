import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReviewList from '../components/review'

const Review = () => {
    return (
        <>
            <Navbar />
            <ReviewList />
            <Footer />
        </>)
}

export default Review