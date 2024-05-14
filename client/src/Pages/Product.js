import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import {useParams} from "react-router-dom";
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import ReleatedProducts from '../Component/ReleatedProducts/ReleatedProducts';

const Product = () => {

  const response = useContext(ShopContext);
  
  const all_Product = (response.all_Product);
  // console.log(all_Product)

  const {productId} = useParams();
  // console.log(Number(productId));

  const product = all_Product.find((e)=> e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <ReleatedProducts/>
    </div>
  )
}

export default Product;