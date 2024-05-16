import "./Navbar.css";
import navlogo  from "../../assests/nav-logo.svg";
import navProfile  from "../../assests/nav-profile.svg"


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="nav-logo" className="nav-logo"/>
        <img src={navProfile} alt="nav-profile" className="nav-profile" />
    </div>
  )
}

export default Navbar