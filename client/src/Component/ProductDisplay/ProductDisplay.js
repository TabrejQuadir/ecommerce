import './ProductDisplay.css';
import Star_Icon from "../Asset/star_icon.png";
import Star_Dull_Icon from "../Asset/star_dull_icon.png";
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productDisplay'>
            <div className='productDisplay-left'>
                <div className='productDisplay-img-list'>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={product.image} alt={`product-${index}`} />
                    ))}
                </div>
                <div className='productDisplay-img'>
                    <img className='productDisplay-main-img' src={product.image} alt="Main product" />
                </div>
            </div>

            <div className='productDisplay-right'>
                <h1>{product.name}</h1>
                <div className='productDisplay-right-stars'>
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={Star_Icon} alt={`star-${index}`} />
                    ))}
                    <img src={Star_Dull_Icon} alt="star-dull" />
                    <p>(122)</p>
                </div>

                <div className='productDisplay-right-prices'>
                    <div className='productDisplay-right-price-old'>${product.old_price}</div>
                    <div className='productDisplay-right-price-new'>${product.new_price}</div>
                </div>

                <div className='productDisplay-right-description'>
                    These formal shirts are made out of 100% double ply premium cotton fabric with liquid ammonia and moisture cure treatment that will resist wrinkles, add lustre and make the fabric breathable. The superlative craftsmanship with semi-cutaway collar.
                </div>

                <div className='productDisplay-right-size'>
                    <h1>Select Sizes</h1>
                    <div className='productDisplay-right-sizes'>
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div key={size}>{size}</div>
                        ))}
                    </div>
                </div>

                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className='productDisplay-right-category'><span>Category:</span> {product.category}</p>
                <p className='productDisplay-right-category'><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
