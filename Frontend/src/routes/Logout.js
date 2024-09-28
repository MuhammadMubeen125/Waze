import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  localStorage.setItem('firstName',null);
  localStorage.setItem('lastname',null);
  localStorage.setItem('email',null);
  localStorage.setItem('login',false);
  useNavigate('/login');
  return
    <> 
    <div>Logout</div>
    </>
  )
}

export default Logout;