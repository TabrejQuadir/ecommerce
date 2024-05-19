import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const [menu, setMenu] = useState("");
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
            <Link to={"/"} style={{ textDecoration: "none", color:"black"}}>SHOPPER</Link>
          </p>
        </div>

        <ul className='nav_menu'>
          <li onClick={() => { setMenu("shop") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/">Shop</Link>
            {menu === "shop" ? <hr /> : null}</li>

          <li onClick={() => { setMenu("mens") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/mens">Mens</Link>
            {menu === "mens" ? <hr /> : null}</li>

          <li onClick={() => { setMenu("womens") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/womens">Women</Link>
            {menu === "womens" ? <hr /> : null}</li>

          <li onClick={() => { setMenu("kids") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : null}</li>
        </ul>

        <div className='nav_login_cart'>
          {localStorage.getItem("auth-token") ? (
            <>
              <span className='nav_username'>Hello, {username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login"><button>Login</button></Link>
          )}
          <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
          <div className='nav_cart_count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;