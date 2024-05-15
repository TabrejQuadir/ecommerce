const express = require("express");
const {addProduct, deleteProduct, allProduct} = require("../controllers/post.controller.js")

const router = express.Router();

router.post('/addproduct', addProduct);
router.post('/removeproduct', deleteProduct);
router.get('/allproducts', allProduct);




module.exports = router;