import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
const ReviewList = () => {
    const { place } = useParams()
    return (
        <>
            <div className="container " style={{ marginTop: '120px' }}>
                <h1 className="text-center">{place}</h1>
                <div className="reviewRow row">
                    <div className="col-md-4 card p-2 border-3 mb-3">

                        <img alt="d" src="/playing.jpg" />
                        <h3 className="mt-4">This is really amazing</h3>
                        <StarRating />
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default ReviewList