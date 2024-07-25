import "./Breadcrum.css";
import arrow_icon from "../Asset/arrow.png";
import { useNavigate } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;
  const navigate = useNavigate()
  return (
    <div className='breadcrum'>
      <div onClick={()=>navigate("/")}>HOME</div>
      <img src={arrow_icon} alt="arrow"/>
      <div onClick={()=>navigate("/")}>SHOP</div>
      <img src={arrow_icon} alt="arrow"/>
      <div>{product?.category}</div>
      <img src={arrow_icon} alt="arrow"/>
      <div>{product?.name}</div>
    </div>
  )
}

export default Breadcrum;
