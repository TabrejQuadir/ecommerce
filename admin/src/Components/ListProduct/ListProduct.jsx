import { useEffect, useState } from "react"
import "./ListProduct.css";
import cross_icon from "../../assests/cross_icon.png";
import axios from 'axios'
const ListProduct = () => {

  const [allProducts, setallProducts] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/api/post/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setallProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id) => {
    try {
      await axios.post('http://localhost:4000/api/post/removeproduct', {
        id: id
      }, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      await fetchInfo();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
    <hr />
    {allProducts.map((product, i)=>{
      return <>      
      <div className="listproduct-format-main listproduct-format" key={i}>
        <img src={product.image} className="listproduct-product-icon" alt="" />
        <p>{product.name}</p>
        <p>${product.old_price}</p>
        <p>${product.new_price}</p>
        <p>{product.category}</p>
        <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
      </div>
      <hr />
      </>
    })}
      </div>
    </div>
  )
}

export default ListProduct