import "./SignUp.css";
import React, { useState, setState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import clsx from 'clsx';
import 'react-toastify/dist/ReactToastify.css';
import { isEmpty } from "../utils/isEmpty";
import api from "../api/api";
function RegistrationForm() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState({})

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError({
        email: 'Email is not correct'
      })
      return false;
    }
    if (password !== confirmPassword) {
      setError({
        password: 'Password does not match!'
      })
      return false;
    }
    if(!firstName) {
      setError({
           firstName: 'First Name must be provided!'
      })
      return false;
    }
    if(!lastName) {
      setError({lastName: 'Last Name must be provided!'})
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (error.email) {
      toast.error(error.email, { theme: 'dark' })
    }
    if (error.password) {
      toast.error(error.password, { theme: 'dark' })
    }
    if (error.firstName) {
      toast.error(error.firstName, { theme: 'dark' })
    }
    if (error.lastName) {
      toast.error(error.lastName, { theme: 'dark' })
    }
  }, [error])

  const handleSubmit = async () => {
    setError({});
    if(validateForm()) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("login", true);
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("password", password);
      try {
          const response = await api.post('http://localhost:8000/users', {
                name: firstName + ' ' + lastName,
                email,
                password
            });
            if(response) {
              toast.success('Successfully registered!', { theme: 'dark' })
              setTimeout(() => {
                navigate('/')
              },2000)
            }
      }
      catch(err) {
        toast.error('Internal Server Error', { theme: 'dark' })
      }
    }
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName" style={{ marginLeft: '70px' }}>
            First Name{" "}
          </label>
          <input
            className={clsx('form_empty',{'input_empty': (error.firstName == 'First Name must be provided!') })}
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className='form_label' for="lastName" style={{ marginLeft: '70px' }}>
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className={clsx('form_empty',{'input_empty': (error.lastName == 'Last Name must be provided!') })}
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email" style={{ marginLeft: '110px' }}>
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className={clsx('form_empty',{'input_empty': (error.email == 'Email is not correct') })}
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password" style={{ marginLeft: '80px' }}>
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword" >
            Confirm Password{" "}
          </label>
          <input
            className={clsx('form_empty',{'input_empty': (error.password == 'Password does not match!') })}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />

        </div>
        <a href="/login" style={{ display: 'block', marginTop: '30px', fontSize: '25px' }} >Already a customer?</a>
        <button onClick={handleSubmit} type="submit" class="btn" style={{ marginTop: '50px' }}>
          Register
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegistrationForm;
