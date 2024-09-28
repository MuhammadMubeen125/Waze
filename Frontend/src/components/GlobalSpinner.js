import React, { useContext } from 'react';
import { GlobalSpinnerContext } from '@/context/GlobalSpinnerContext';
import './GlobalSpinner.style.css';

const GlobalSpinner = () => {
  const { isSpinnerVisible } = useContext(GlobalSpinnerContext);
  
  return (
    <div className="relative">
      <div
        className={`spinner-overlay ${isSpinnerVisible ? 'visible' : 'hidden'}`}
      >
        <div className="spinner-container">
          <svg
            className="spinner-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="spinner-circle"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="spinner-path"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GlobalSpinner;
