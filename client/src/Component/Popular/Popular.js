import './Popular.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const Popular = () => {

  const [popularInWomen , setPopupalrInWomen]= useState([]);

  useEffect(()=>{
    fetch("https://ecommerce-greatstack-backendd.onrender.com/api/post/popularinwomen")
    .then((res)=> res.json())
    .then((data)=> setPopupalrInWomen(data))
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular_items'>
        {popularInWomen.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default Popular