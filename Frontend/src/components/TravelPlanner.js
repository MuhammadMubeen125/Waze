import React, { useState, useEffect } from 'react';
import TravelForm from './TravelForm';
import './TravelPlanner.css';
import { Link } from 'react-router-dom';

function TravelPlanner(props) {
  const [formType, setFormType] = useState('hotel');
  const [buttonText, setButtonText] = useState('Find a Hotel');

  useEffect(() => {
    setFormType(formType);
  }, [formType]);
  const handleclick = (clicked) => {
    setFormType(clicked);
    if (clicked === 'hotel') {
      setButtonText('Find a Hotel');
    } else if (clicked === 'car') {
      setButtonText('Find a Transportation');
    } else if (clicked === 'budget') {
      setButtonText('Setup Your Budget');
    }
  };
  return (
    <div className="traveller-container">
      <h1>Plan your Trip!</h1>
      <br></br>
      <br />
      <br></br>
      <div className="buttons-div">
        <Link
          className={`form-type-button button ${
            formType === 'hotel' ? 'active' : ''
          }`}
          onClick={() => handleclick('hotel')}>
          Find a Hotel
        </Link>
        <Link
          className={`form-type-button button ${
            formType === 'car' ? 'active' : ''
          }`}
          onClick={() => handleclick('car')}>
          Find a Transportation
        </Link>
        <Link
          className={`form-type-button button ${
            formType === 'budget' ? 'active' : ''
          }`}
          onClick={() => handleclick('budget')}>
          Setup Your Budget
        </Link>
        <Link className={`form-type-button button`} to="/travelpackages">
          Find Travel Packages
        </Link>
        {/* {budget === null && <Link to={"/budget"} className="button">First Set Up a Budget</Link>} */}
      </div>
      <TravelForm
        formType={formType}
        setFormType={setFormType}
        submitText={buttonText}
      />
    </div>
  );
}

export default TravelPlanner;

// <div className="traveller-container">
// <h1>Plan your Trip!</h1><br></br>
// <br />
// <br></br>
// <div className="buttons-div">
//     <Link className="hotel-button button" to="/Hotel">Find a Hotel</Link>
//     <Link className="hotel-button button" to="/transport">Find a Transportation</Link>
//     <Link className="packages-button button" to="/travelpackages">Find Travel Packages</Link>
//     {budget === null && <Link to={"/budget"} className="button">First Set Up a Budget</Link>}
// </div>
// </div>
