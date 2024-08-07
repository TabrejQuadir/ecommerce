import "./AddProduct.css";
import upload_area from "../../assests/upload_area.svg"
import { useState } from "react";
import axios from "axios"

const AddProduct = () => {

  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
  })

  const imageHandler=(e)=>{
    setImage(e.target.files[0]);
  }

  const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
  
    let formData = new FormData();
    formData.append("product", image); // Use the same field name as in multer middleware
  
    try {
      const uploadResponse = await axios.post('https://ecommerce-greatstack-backendd.onrender.com/upload', formData, {
        headers: {
          'Accept': 'application/json'
        }
      });
      const responseData = uploadResponse.data;
      
      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
        
        const addProductResponse = await axios.post('https://ecommerce-greatstack-backendd.onrender.com/api/post/addproduct', product, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
    
        if (addProductResponse.data.success) {
          alert("Product Added");
        } else {
          alert("Failed");
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} 
        onChange={changeHandler} type="text" name="name" placeholder="Type Here..." />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} 
        onChange={changeHandler} type="text" name="old_price" placeholder="Type here.." />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} 
        onChange={changeHandler}  type="text" name="new_price" placeholder="Type here.." />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} 
        onChange={changeHandler}  name="category" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield ">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumbnail-img" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>
    </div>

  )
}

export default AddProduct