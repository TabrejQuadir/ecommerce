import { createContext, useEffect, useState } from "react";
import all_Product from '../Component/Assest/all_product'

export const ShopContext = createContext();

// console.log(all_Product, "ajyfi,")

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_Product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCartItems = { ...prev };
            updatedCartItems[itemId] = (prev[itemId] || 0) - 1;
            if (updatedCartItems[itemId] <= 0) {
                delete updatedCartItems[itemId];
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_Product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };


   const getTotalCartItems=()=>{
    let totalItem = 0;
    for(const item in cartItems)
        {
         if(cartItems[item]>0) {
                totalItem += cartItems[item];
            }
         }
         return totalItem;
    }

    const contextValue = {
        all_Product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
