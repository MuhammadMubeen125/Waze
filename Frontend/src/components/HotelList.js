import './HotelListStyles.css';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import nullImage from '../assets/not-available.png';
// import api from "../api/api";
import TravelPlanner from './TravelPlanner';
import { useLocation, useNavigate } from 'react-router-dom';

const HotelLister = () => {
  const [submitBudget, setSubmitBudget] = useState(false);
  const [budgetData, setBudgetData] = useState({
    budget: null,
    days: null,
    people: null,
  });

  const { state: routeData } = useLocation();
  const [cities, setCities] = useState('');
  const [hotels, setHotels] = useState([]);

  const getHotels = async (cities) => {
    try {
      if (cities) {
        const response = await axios.get(
          `http://localhost:8000/api/hotels?location=${cities}`
        );
        console.log(response.data);
        setHotels(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // console.log(state.Location);
    //   setCities(state)
    setBudgetData(() => ({
      budget: sessionStorage.getItem('budget'),
      days: sessionStorage.getItem('days'),
      people: sessionStorage.getItem('people'),
    }));
    if (routeData && routeData.Location) {
      getHotels(routeData.Location);
      setCities(routeData.Location);
    }

    // setHotels(data.results);
  }, [routeData]);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    const hotelList = document.getElementById('hotel_list');
    const hotelListItems = hotelList.getElementsByTagName('li');
    for (let i = 0; i < hotelListItems.length; i++) {
      const hotel = hotelListItems[i].getElementsByTagName('div')[0];
      const city = hotel.id;
      if (city === selectedCity || selectedCity === '') {
        hotelListItems[i].style.display = '';
      } else {
        hotelListItems[i].style.display = 'none';
      }
    }
  };
  // var bud = parseInt(sessionStorage.getItem('budget'));
  // var days = parseInt(sessionStorage.getItem('days'));
  // var people = parseInt(sessionStorage.getItem('people'));

  // const budget = sessionStorage.getItem('budget');
  const bud = budgetData.budget;
  const days = budgetData.days;
  const people = budgetData.people;
  const budget = budgetData.budget;

  const handleBooking = async (e) => {
    let hotel = e.target.id;
    let firstname = localStorage.getItem('firstName');
    let lastname = localStorage.getItem('lastName');
    let fullnamne = firstname + lastname;
    try {
      const response = await axios.post('http://localhost:8000/bookings', {
        name: fullnamne,
        hotel,
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  // const handleSetCity = (city) => {
  //   setCities(city);
  // };
  //   const handleCity = (city) => {
  //     debugger;
  //     setHotels(city);
  //     console.log(city, hotels, 'final');
  //     setCities(city);
  //     // navigate('/hotel');
  //   };

  return (
    <div className="hotel-container">
      <TravelPlanner setHotels={setHotels} />
      {/* <div className="sidebar">
                <div className="hotel_city">
                    <h1>Hotels List</h1>
                    <label htmlFor="citySelect">Select City:</label>
                    <select id="citySelect" onChange={handleCityChange}>
                        <option value="">All cities</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Skardu">Skardu</option>
                        <option value="Azad Kashmir">Azad Kashmir</option>
                        <option value="Hunza">Hunza</option>
                        <option value="Naran">Naran</option>
                    </select>
                </div>
                
                {budget !== null && <div className="budget">
                    <h2 id="budget">Budget : Rs {bud}</h2>
                    <h2>Number of days : {days}</h2>
                    <h2>Number of people : {people}</h2>
                </div>}
                {budget === null && <div className="budget">
                    <Link to={"/budget"} className="bud" style={{backgroundColor: "white"}}>Add a Budget</Link>
                </div>}
            </div> */}

      <div className="hotel_lister">
        <ul className="hotel_list" id="hotel_list">
          {cities &&
            hotels.map((hotels, index) => {
              return (
                <li key={index} id={hotels.id} className="item">
                  <a href={hotels.imgurl}>
                    <div id={hotels.id}>
                      <img
                        src={
                          hotels.img === null
                            ? nullImage
                            : `http://localhost:8000${hotels.img}`
                        }
                        className="hotel_img"
                        alt="hotel8"></img>
                      <h2>{hotels.name}</h2>
                      {budget !== null && (
                        <h3>Rs {hotels.price * people * days}</h3>
                      )}
                      {budget !== null && (
                        <h4 style={{ color: 'grey' }}>
                          Rs {bud - hotels.price * people * days} left
                        </h4>
                      )}
                      <p>
                        {hotels.address} <br /> Rating: {hotels.rating}
                      </p>
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <br />
        <h2> Hotels of User's Choice </h2>
        <br />
      </div>
      <div className="hotel_lister">
        <ul className="hotel_list" id="hotel_list">
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/park-lahore.en-gb.html">
              <div id="Lahore">
                <img
                  src="/park_lane_lahore.png"
                  className="hotel_img"
                  alt="hotel3"></img>
                <h2>Park Lane Hotel</h2>
                {budget !== null && <h3>{'Rs ' + 3600 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 3600 * people * days} left
                  </h4>
                )}
                <p>
                  Located in Lahore, within a 600 metres radius of Wagah Border
                  and Vogue Towers, Park Lane Hotel Lahore offers accommodation
                  with a seasonal outdoor swimming pool and a fitness centre,
                  and free WiFi throughout the property.{' '}
                </p>
              </div>
            </a>
            <button
              id="Lahore"
              className="btn btn-primary"
              onClick={handleBooking}>
              Book Now
            </button>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/pearl-continental-lahore.en-gb.html">
              <div id="Lahore">
                <img
                  src="/pearl_continental.png"
                  className="hotel_img"
                  alt="hotel4"></img>
                <h2>Pearl Continental Hotel</h2>
                {budget !== null && <h3>{'Rs ' + 6400 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 6400 * people * days} left
                  </h4>
                )}
                <p>
                  Located within Shahrah-e-Quaid-e-Azam (The Mall), Pearl
                  Continental Hotel Lahore offers 5-star accommodation with free
                  Wi-Fi and floor-to-ceiling windows. An outdoor pool and a
                  fitness centre are available.
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/islamabad-marriott.en-gb.html">
              <div id="Islamabad">
                <img
                  src="/islamabad_marriot.png"
                  className="hotel_img"
                  alt="hotel5"></img>
                <h2>Islamabad Continental Hotel</h2>
                {budget !== null && <h3>{'Rs ' + 4400 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 4400 * people * days} left
                  </h4>
                )}
                <p>
                  The Islamabad Marriott Hotel is the epitome of luxury and
                  convenience, offering a perfect blend of modern amenities and
                  traditional hospitality. Whether you are traveling for
                  business or leisure, our hotel is the perfect destination for
                  you.
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/eat-and-read.en-gb.html">
              <div id="Skardu">
                <img
                  src="/eat-read-skardu.png"
                  className="hotel_img"
                  alt="hotel6"></img>
                <h2>Eat and Read Hotel, Skardu</h2>
                {budget !== null && <h3>{'Rs ' + 3600 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 3600 * people * days} left
                  </h4>
                )}
                <p>
                  Set in Skardu, Eat and Read Hotel offers 2-star accommodation
                  with a garden, a terrace and a restaurant. The accommodation
                  offers a 24-hour front desk, airport transfers, room service
                  and free WiFi.{' '}
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/arish-luxury-suites.en-gb.html">
              <div id="Skardu">
                <img
                  src="/arish-luxury-skardu.png"
                  className="hotel_img"
                  alt="hotel7"></img>
                <h2>Arish Luxury Suites, Skardu</h2>
                {budget !== null && <h3>{'Rs ' + 6400 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 6400 * people * days} left
                  </h4>
                )}
                <p>
                  Situated in Skardu, Arish Luxury Suites offers 4-star
                  accommodation with a garden, a terrace and a restaurant. The
                  accommodation features a 24-hour front desk, airport
                  transfers, a shared kitchen and free WiFi throughout the
                  property.{' '}
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/ramada-islamabad.en-gb.html">
              <div id="Azad Kashmir">
                <img
                  src="/pearl-continental-kashmir.png"
                  className="hotel_img"
                  alt="hotel8"></img>
                <h2>Pearl Continental Hotel</h2>
                {budget !== null && <h3>{'Rs ' + 7500 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 7500 * people * days} left
                  </h4>
                )}
                <p>
                  Located atop a hill, Pearl Continental Hotel, Muzaffarabad
                  offers panoramic views of the Kashmir Mountains. This 5-star
                  property boasts a restaurant, fitness centre and free Wi-Fi.
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/ramada-islamabad.en-gb.html">
              <div id="Azad Kashmir">
                <img
                  src="/kashmir-heaven.png"
                  className="hotel_img"
                  alt="hotel8"></img>
                <h2>Kashmir Heaven Hotel</h2>
                {budget !== null && <h3>{'Rs ' + 2800 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 2800 * people * days} left
                  </h4>
                )}
                <p>
                  Kashmir Heaven Guest House is a 3-star property located in
                  Muzaffarabad. Featuring room service, this property also has a
                  restaurant and a terrace. Free private parking is available
                  and the hotel also provides car hire for guests who want to
                  explore the surrounding area{' '}
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/hikal-guest-house.en-gb.html">
              <div id="Hunza">
                <img
                  src="/hikal-hunza.png"
                  className="hotel_img"
                  alt="hotel8"></img>
                <h2>Hikal Hunza Hotel</h2>
                {budget !== null && <h3>{'Rs ' + 5600 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 5600 * people * days} left
                  </h4>
                )}
                <p>
                  Located in Hunza, Hikal Guest House features a garden, shared
                  lounge, terrace, and free WiFi. There is free private parking
                  and the property provides paid airport shuttle service.
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/pc-legacy-nasirabad-hunza.en-gb.html">
              <div id="Hunza">
                <img
                  src="/pc-legacy-hunza.png"
                  className="hotel_img"
                  alt="hotel8"></img>
                <h2>PC Legacy Hunza</h2>
                {budget !== null && <h3>{'Rs ' + 3400 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 3400 * people * days} left
                  </h4>
                )}
                <p>
                  PC Legacy Hunza features accommodation in Hunza. With free
                  WiFi, this 5-star hotel offers room service and a 24-hour
                  front desk. There is a restaurant serving American cuisine,
                  and free private parking is available..
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/kunhar-riverside-block.en-gb.html">
              <div id="Naran">
                <img
                  src="/kunhal-riverside-naran.png"
                  className="hotel_img"
                  alt="hotel8"></img>
                <h2>Kunhar Riverside Naran</h2>
                {budget !== null && <h3>{'Rs ' + 4900 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 4900 * people * days} left
                  </h4>
                )}
                <p>
                  Kunhar Hotel RiverSide Block has a garden, terrace, a
                  restaurant and bar in Nārān. This 4-star hotel offers room
                  service and a 24-hour front desk. The hotel features family
                  rooms.
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="https://www.booking.com/hotel/pk/mount-feast.en-gb.html">
              <div id="Naran">
                <img
                  src="/mount-feast.png"
                  className="hotel_img"
                  alt="hotel8"></img>
                <h2>Mount Feast Naran</h2>
                {budget !== null && <h3>{'Rs ' + 4400 * people * days}</h3>}
                {budget !== null && (
                  <h4 style={{ color: 'grey' }}>
                    Rs {bud - 4400 * people * days} left
                  </h4>
                )}
                <p>
                  Situated in Nārān, Mount Feast Hotel offers 4-star
                  accommodation with a terrace. Among the facilities of this
                  property are a restaurant, room service and a 24-hour front
                  desk, along with free WiFi throughout the property.{' '}
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotelLister;
