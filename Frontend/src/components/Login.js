import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function LoginForm() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }

    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('http://localhost:8000/users/login', {
        email,
        password,
      });
      if(response.status == 200) {
        toast.success('Successfully registered!', { theme: 'dark' })
        setTimeout(() => {
          navigate('/')  
        },3000)
      }
    }
    catch (err) {
      if(err.response.status == 403) {
        toast.error('You are not registered!', { theme: 'dark' })
      }
      else {
      toast.error('Internal server Error', { theme: 'dark' })
      }
    }
  };
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            Email:{" "}
          </label>
          <input
            className="form__input"
            style={{ marginLeft: '50px' }}
            type="email"
            value={email}
            onChange={handleInputChange}
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password:{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>

        <button onClick={handleSubmit} type="submit" class="log-btn">
          Login
        </button>
      </div>
      <ToastContainer />
    </div>

  );
}

export default LoginForm;
