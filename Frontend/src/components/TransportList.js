// import "./HotelListStyles.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HotelLister() {
    const [selectedType, setSelectedType] = useState('');
    const transType = [{
        label: 'By car',
        value: 'car'
    },
    {
        label: 'By train',
        value: 'train'
    },
    {
        label: 'By airplane',
        value: 'airplane'
    }
    ];
    const handleCarChange = (event) => {
        const transType = event.target.value;
        setSelectedType(transType)
    };
    let bud = parseInt(sessionStorage.getItem('budget'));
    let days = parseInt(sessionStorage.getItem('days'));
    let people = parseInt(sessionStorage.getItem('people'));

    const budget = sessionStorage.getItem('budget');

    return (
        <div className="hotel-container">
            <div className="sidebar m-3">
                <div className="hotel_city">
                    <h1 className='mb-5'>Transport Info</h1>
                    <label htmlFor="carSelect" className='text-white'>Type:</label>
                    <select id="citySelect" onChange={handleCarChange}>
                        <option value="">All</option>
                        {
                            transType.map((trans, i) =>
                                <option value={trans.value} key={i}>
                                    {
                                        trans.label
                                    }
                                </option>)
                        }
                    </select>

                </div>

                {budget && <div className="budget">
                    <h2 id="budget">Budget : Rs {bud}</h2>
                    <h2>Number of days : {days}</h2>
                    <h2>Number of people : {people}</h2>
                </div>}
                {
                    !budget && <div className="budget">
                        <Link to={"/budget"} className="bud" style={{ backgroundColor: "white" }}>Add a Budget</Link>
                    </div>}
            </div>

            <div className="hotel_lister row" style={{ marginLeft: '300px' }}>

                {
                    (selectedType == 'car' || selectedType == '') &&
                    <ul className="hotel_list col-md-6" id="hotel_list">
                        <li className="item">
                            <a href="https://www.budget.com/en/cars/vehicles/us/xh">
                                <div id="Lahore">
                                    <img src="/1.png" className="hotel_img w-100" alt="hotel3"></img>
                                    <h2 className='mt-2'>Sedan (5 Seats)</h2>
                                    {budget !== null && <h3>{"Rs " + 1500}</h3>}
                                    {budget !== null && <h4 style={{ color: "grey" }}>Rs {bud - 1500} left</h4>}
                                    <p className='text-center'>The Lincoln Continental is an iconic, high-end sedan packed with premium features. With a Lincoln Continental rental, you’ll enjoy both luxury and dependability. </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                }
                {
                    (selectedType == 'car' || selectedType == '') &&
                    <ul className="hotel_list col-md-8" id="hotel_list">
                        <li className="item">
                            <a href="https://www.budget.com/en/cars/electric-car-rental">
                                <div id="Lahore">
                                    <img src="2.png" className="hotel_img w-100" alt="hotel3"></img>
                                    <h2 className='mt-2'>Lent a Lexas(4 Seats)</h2>
                                    {budget !== null && <h3>{"Rs " + 1200}</h3>}
                                    {budget !== null && <h4 style={{ color: "grey" }}>Rs {bud - 1200} left</h4>}
                                    <p>The Lincoln Continental is an iconic, high-end sedan packed with premium features. With a Lincoln Continental rental, you’ll enjoy both luxury and dependability. </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                }
                {
                    (selectedType == 'train' || selectedType == '') &&
                    <ul className="hotel_list col-md-6" id="hotel_list">
                        <li className="item">
                            <a href="https://bookme.pk/train-tickets-booking-online">
                                <div id="Lahore">
                                    <img src="train.jpg" className="hotel_img w-100" alt="hotel3"></img>
                                    <h2 className='mt-3'>By Train</h2>
                                    {budget !== null && <h3>{"Rs " + 300}</h3>}
                                    {budget !== null && <h4 style={{ color: "grey" }}>Rs {bud - 300} left</h4>}
                                    <p className='text-center'>The Lincoln Continental is an iconic, high-end sedan packed with premium features. With a Lincoln Continental rental, you’ll enjoy both luxury and dependability. </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                }
                {
                    (selectedType == 'airplane' || selectedType == '') &&
                    <ul className="hotel_list col-md-8" id="hotel_list">
                        <li className="item">
                            <a href="https://piac.com.pk/">
                                <div id="Lahore">
                                    <img src="plance.jpg" className="hotel_img" style={{ width: '400px' }} alt="hotel3"></img>
                                    <h2 className='mt-2'>By airplane</h2>
                                    {budget !== null && <h3>{"Rs " + 1500}</h3>}
                                    {budget !== null && <h4 style={{ color: "grey" }}>Rs {bud - 1500} left</h4>}
                                    <p>The Air Pakistan is an iconic, high-end sedan packed with premium features. With a Lincoln Continental rental, you’ll enjoy both luxury and dependability. </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                }
            </div>
        </div>
    );

}

export default HotelLister;

