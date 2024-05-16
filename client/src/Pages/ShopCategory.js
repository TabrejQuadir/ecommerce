import React from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Css/ShopCategory.css'
import { useContext } from 'react';
import dropdown_icon from '../Component/Asset/dropdown_icon.png'
import Item from '../Component/Item/Item';


  const ShopCategory = (props) => {
  const {all_Product} = useContext(ShopContext);
  // console.log(all_Product);
  return (

    <>
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt='Banner'/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className='shopCategory-sort'>
          Sort by <img src={dropdown_icon} />
        </div>
      </div>

      <div className='shopCategory-products'>
        {all_Product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      </div> 
    </>
         
      
      
  )
}

export default ShopCategory