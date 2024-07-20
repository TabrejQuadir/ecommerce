const express = require("express");
const { addProduct, deleteProduct, allProduct, newCollection, popularInWomen, addToCart, removeFromCart, getCartData } = require("../controllers/post.controller.js");
const verifyUser = require("../middilwares/verifyUser.js");  // Correct path to middleware
const router = express.Router();

router.post('/addproduct', addProduct);
router.post('/removeproduct', deleteProduct);
router.get('/allproducts', allProduct);
router.get("/newCollection", newCollection);
router.get("/popularinwomen", popularInWomen);
router.post("/addtocart", verifyUser, addToCart);  
router.post("/removefromcart", verifyUser, removeFromCart);  
router.get("/getcartdata", verifyUser, getCartData);  

module.exports = router;
