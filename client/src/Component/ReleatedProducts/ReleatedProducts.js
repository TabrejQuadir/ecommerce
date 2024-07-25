import "./ReleatedProducts.css"
import Item from "../Item/Item";
import { useEffect, useState } from "react";

const ReleatedProducts = () => {

  const [popularProduct , setPopularProduct]= useState([]);

  useEffect(()=>{
    fetch("https://ecommerce-greatstack-backendd.onrender.com/api/post/popularinwomen")
    .then((res)=> res.json())
    .then((data)=> setPopularProduct(data))
  },[])

  return (
    <div className="releatedproducts">
        <h1>Releated Products</h1>
        <hr/>
        <div className="releatedproducts-item">
        {popularProduct.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
        </div>
    </div>
  )
}

export default ReleatedProducts