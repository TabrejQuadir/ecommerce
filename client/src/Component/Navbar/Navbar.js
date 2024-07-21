import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.user.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  return (
    <>
      <div className='navbar'>
        <div className='nav_logo'>
          <img src={logo} alt="Shopper Logo" />
          <p>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>SHOPPER</Link>
          </p>
        </div>


        <ul className={`nav_menu ${menuActive ? 'active' : ''}`}>
          <li>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/" onClick={() => setMenuActive(false)}>Shop</Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/mens" onClick={() => setMenuActive(false)}>Mens</Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/womens" onClick={() => setMenuActive(false)}>Women</Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/kids" onClick={() => setMenuActive(false)}>Kids</Link>
          </li>
        </ul>

        <div className='nav_login_cart'>
        {localStorage.getItem("auth-token") ? (
            <>
              <span className='nav_username'>Hii {username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login"><button>Login</button></Link>
          )}
          <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
          <div className='nav_cart_count'>{getTotalCartItems()}</div>
        </div>

        <div className={`nav_toggle ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </>
  );
}

export default Navbar;
