import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ReviewList = () => {
    return (
        <>
           <div className="container">
            <div className="reviewList" style={{marginTop: '120px'}}>
                <h1 className="text-center">Review List</h1>
              <div className="row">
                  <div className="col-md-4 mt-5">
                    <div className="card p-2 border-5">
                        <img alt="image" style={{height:'200px'}}  src="islamabad_marriot.png"></img>
                        <h1>islamabad marrio</h1>
                        <button className="btn btn-primary bg-green text-center m-auto"><Link to={`/review/Islamabad`}>View</Link> </button>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div className="card p-2 border-5">
                        <img alt="image" style={{height:'200px'}} src="mehran(karachi).png"></img>
                        <h1>mehran(karachi)</h1>
                        <button className="btn btn-primary bg-green text-center m-auto">View</button>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div className="card p-2 border-5">
                        <img alt="image" style={{height:'200px'}} src="regent_plaza_hotel_karachi.png"></img>
                        <h1>regent plaza</h1>
                        <button className="btn btn-primary bg-green text-center m-auto">View</button>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div className="card p-2 border-5">
                        <img alt="image" style={{height:'200px'}} src="hikal-hunza.png"></img>
                        <h1>hikal hunza</h1>
                        <button className="btn btn-primary bg-green text-center m-auto">View</button>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div className="card p-2 border-5">
                        <img alt="image" style={{height:'200px'}} src="pearl_continental.png"></img>
                        <h1>pearl continental</h1>
                        <button className="btn btn-primary bg-green text-center m-auto">View</button>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div className="card p-2 border-5">
                        <img alt="image" style={{height:'200px'}} src="pearl-continental-kashmir.png"></img>
                        <h1>pearl continental</h1>
                        <button className="btn btn-primary bg-green text-center m-auto">View</button>
                    </div>
                  </div>
                  <div className="mt-5"></div>
              </div>
              
            </div>
           </div>
         </>
    )
}

export default ReviewList;