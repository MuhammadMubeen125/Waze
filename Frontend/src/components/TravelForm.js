import { useEffect, useState } from 'react';
import './TravelForm.css';
import { useNavigate } from 'react-router-dom';

const HotelFields = [
  {
    type: 'text',
    placeholder: 'Location',
    label: 'Location',
    name: 'Location',
    id: 'location',
    value: 'Location',
  },
  {
    type: 'number',
    placeholder: 'Occupancy',
    label: 'Occupancy',
    name: 'Occupancy',
    id: 'occupancy',
    value: 'Occupancy',
  },
  {
    type: 'date',
    placeholder: 'Check-in',
    label: 'Check in',
    name: 'checkin',
    id: 'checkin',
    value: 'checkin',
  },
  {
    type: 'date',
    placeholder: 'Check-out',
    label: 'Check out',
    name: 'checkout',
    id: 'checkout',
    value: 'checkout',
  },
];

const CarFields = [
  {
    type: 'text',
    placeholder: 'Pick-up Location',
    label: 'Pick up Location',
    name: 'PickupLocation',
    id: 'pick-up-location',
    value: 'PickupLocation',
  },
  {
    type: 'text',
    placeholder: 'Drop-off Location',
    label: 'Drop off Location',
    name: 'DropoffLocation',
    id: 'drop-off-location',
    value: 'DropoffLocation',
  },
  {
    type: 'date',
    placeholder: 'Pick-up Date',
    label: 'Pick up Date',
    name: 'PickupDate',
    id: 'pick-up-date',
    value: 'PickupDate',
  },
  {
    type: 'date',
    placeholder: 'Drop-off Date',
    label: 'Drop off Date',
    name: 'DropoffDate',
    id: 'drop-off-date',
    value: 'DropoffDate',
  },
];

const BudgetFields = [
  {
    type: 'number',
    placeholder: 'Budget',
    label: 'Budget',
    name: 'Budget',
    id: 'budget',
    value: null,
  },
  {
    type: 'number',
    placeholder: 'Number of Travellers',
    label: 'Number of Travellers',
    name: 'NumberofTravellers',
    id: 'number-of-travellers',
    value: null,
  },
  {
    type: 'number',
    placeholder: 'Number of Days',
    label: 'Number of Days',
    name: 'NumberofDays',
    id: 'numberofdays',
    value: null,
  },
];

function TravelForm({ formType, setFormType, submitText }) {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState([]);
  const [formErrors, setFormErrors] = useState('');
  const [value, setValue] = useState({
    Location: '',
    Occupancy: '',
    checkin: '',
    checkout: '',
    PickupLocation: '',
    DropoffLocation: '',
    PickupDate: '',
    DropoffDate: '',
    Budget: null,
    NumberofTravellers: null,
    NumberofDays: null,
  });

  useEffect(() => {
    setFormErrors('');
    if (formType === 'hotel') {
      setFormFields(HotelFields);
    }
    if (formType === 'car') {
      setFormFields(CarFields);
    }
    if (formType === 'budget') {
      setFormFields(BudgetFields);
    }
  }, [formType]);

  const handleInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const checkIfAllFieldsAreFilled = () => {
    let errorMsg = '';
    let allFieldsFilled = true;
    formFields.forEach(({ label, name: fieldIdentifier }) => {
      if (!value[fieldIdentifier]) {
        errorMsg += errorMsg.length ? `,${label}` : `${label}`;
        allFieldsFilled = false;
      }
    });

    if (allFieldsFilled) setFormErrors('');
    else setFormErrors(errorMsg);

    return allFieldsFilled;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (!checkIfAllFieldsAreFilled()) return;
    const data = value;
    console.log(data);
    if (formType === 'hotel' && data.Budget) {
      navigate('/hotel', { state: data });
    } else if (formType === 'hotel' && !data.Budget) {
      setFormType('budget');
      setFormErrors('Set Your Budget First');
    } else if (formType === 'car') {
      navigate('/transport');
    } else if (formType === 'budget' && data.Location) {
      sessionStorage.setItem('budget', data.Budget);
      sessionStorage.setItem('days', data.NumberofDays);
      sessionStorage.setItem('people', data.NumberofTravellers);
      navigate('/hotel', { state: data });
    } else if (formType === 'budget' && !data.Location) {
      sessionStorage.setItem('budget', data.Budget);
      sessionStorage.setItem('days', data.NumberofDays);
      sessionStorage.setItem('people', data.NumberofTravellers);
      setFormType('hotel');
      // navigate('/hotel', { state: data });
      // do something with budget data
    }
  };

  return (
    <div className="travel-container">
      <form className="travel-form" noValidate>
        {formFields.map((field) => {
          return (
            <div key={field.id}>
              <label className="travel-label form-label" htmlFor={field.id}>
                {field.label}
              </label>
              <input
                className="travel-input form-control"
                placeholder={field.placeholder}
                value={value[field.name]}
                type={field.type}
                name={field.name}
                id={field.id}
                onChange={handleInput}
                required
              />
            </div>
          );
        })}
      </form>
      {formErrors.length && (
        <div className="alert alert-danger" role="alert">
          {formErrors} {formErrors?.length > 1 ? 'are' : 'is'} required field/s
        </div>
      )}
      <button type="button" className="travel-button" onClick={handleSubmit}>
        {submitText}
      </button>
    </div>
  );
}

export default TravelForm;
