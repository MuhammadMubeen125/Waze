  import { Component,useState, useEffect } from "react";
  import "./NavbarStyles.css";
  import { MenuItems } from "./MenuItems";
  import { Link, NavLink } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  const Navbar = () =>  {
    const [loggedIn, setLoggedin] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
    let loginInfo = localStorage.getItem('login')
    let login = loginInfo === 'null' ? null : JSON.parse(loginInfo);
    setLoggedin(login);
    },[])
    const [clicked, setClicked] = useState(false)
    const login = localStorage.getItem("login");
      const name = localStorage.getItem("firstName");
      
    const handleClick = () => {
      setClicked(!clicked)
    };

  const logout =  () => {
    localStorage.setItem('firstName',null);
    localStorage.setItem('lastName',null);
    localStorage.setItem('login',null);
    localStorage.setItem('email',null);
    navigate("/login");
  }
      return (
        <nav className="NavbarItems">
          <a href="/"><h1 className="navbar-logo">WanderWise</h1></a>

          <div className="menu-icons" onClick={handleClick}>
            <i
              className={clicked ? "fas-fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                  <Link key={index} className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
              );
            })}
            <NavLink className="nav-links" to="/review">Review</NavLink>
            {(loggedIn === null) && <Link to="/signup" className="nav-links">SignUp</Link>}
            {(loggedIn !== null) && <Link to="/" className="nav-links">{name}</Link>}
            {(loggedIn !== null) && <button onClick={logout} className="nav-link">Logout</button> }
          </ul>
        </nav>
      )
  }

  export default Navbar;
