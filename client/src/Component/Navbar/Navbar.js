import './Navbar.css'
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("");
 const {getTotalCartItems} = useContext(ShopContext);
  return (
    <>
      <div className='navbar'>


        <div className='nav_logo'>
          <img src={logo} />
          <p>SHOPPER</p>
        </div>

        <ul className='nav_menu'>

          <li onClick={() => { setMenu("shop") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}</li>

          <li onClick={() => { setMenu("mens") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/mens">Mens</Link>
            {menu === "mens" ? <hr /> : <></>}</li>

          <li onClick={() => { setMenu("womens") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/womens">Women</Link>
            {menu === "womens" ? <hr /> : <></>}</li>

          <li onClick={() => { setMenu("kids") }}>
            <Link style={{ textDecoration: "none", color: "yellow" }} to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}</li>

        </ul>

        <div className='nav_login_cart'>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} /></Link>
          <div className='nav_cart_count'>{getTotalCartItems()}</div>
        </div>

      </div>
    </>
  )
}

export default Navbar;