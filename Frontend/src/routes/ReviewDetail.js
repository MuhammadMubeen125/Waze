import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewItem from '../components/ReviewList';
const ReviewDetail = () => {

    return (<>
        <Navbar />
        <ReviewItem />
        <Footer />
    </>)
}
export default ReviewDetail;