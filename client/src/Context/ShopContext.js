import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_Product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/api/post/allproducts')
            .then((res) => res.json())
            .then((data) => setAll_product(data));
    }, []);

    useEffect(() => {
        // Fetch cart data if user is logged in
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch("http://localhost:4000/api/post/getcartdata", {
                method: "GET",
                headers: {
                    "auth-token": authToken,
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setCartItems(data);
            })
            .catch((error) => console.error("Error fetching cart data:", error));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch("http://localhost:4000/api/post/addtocart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "auth-token": authToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ itemId: itemId }),
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error adding to cart:", error));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch("http://localhost:4000/api/post/removefromcart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "auth-token": authToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ itemId: itemId }),
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error removing from cart:", error));
        }
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

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        all_Product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
