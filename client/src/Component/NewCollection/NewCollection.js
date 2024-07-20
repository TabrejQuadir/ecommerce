import Item from '../Item/Item';
import './NewCollection.css';
import { useEffect, useState } from 'react';

const NewCollection = () => {

  const [newCollection , setNewCollection] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/api/post/newcollection")
    .then((res)=>res.json())
    .then((data)=>setNewCollection(data));
  },[])
  return (
    
    <div className='NewCollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr></hr>
      <div className='Collection'>
        {newCollection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
          {/* <Footer/> */}
      </div>
    </div>
  )
}

export default NewCollection