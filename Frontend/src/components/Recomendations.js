import React, { useEffect, useState } from 'react';
import axios from 'axios';
import nullImage from '../assets/not-available.png';

const Recommendations = () => {
  const [hotels, setHotels] = useState([]);

  const getHotels = async (cities) => {
    try {
      if (cities) {
        const response = await axios.get(
          `http://localhost:8000/api/hotels?location=${cities}`
        );
        console.log(response.data);
        setHotels(response.data.filter((hotel) => hotel.rating > 4.1));
        // console.log(hotels.name);
        // setHotels(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getHotels('current location');
    console.log(hotels);
    // setHotels(data.results);
  }, []);

  return (
    <div>
      <h1>Hotel Recommendations</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <div className="d-flex justify-content-center">
            <div className="card border-2 mb-5 p-3 shadow w-75">
              <div className="hotel">
                <img
                  src={
                    hotel.img === null
                      ? nullImage
                      : `http://localhost:8000${hotel.img}`
                  }
                  className="hotel_img"
                  alt="hotel"></img>
                <ul>
                  <li>
                    <h2>{hotel.name}</h2>
                  </li>
                  <li>
                    <p>{hotel.address}</p>
                  </li>
                  <li>
                    <p style={{ marginTop: '1rem' }}>
                      {hotel.price} PKR Per Night <br />
                      Rating: {hotel.rating}
                    </p>
                  </li>
                  {/* <li><a className="booker" href="/hotel">Book</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
