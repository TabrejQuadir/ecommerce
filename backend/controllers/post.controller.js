const Product = require("../model/ProductSchema");
const Users = require("../model/UserSchema");

//CREATING API FOR ADDING PRODUCTS
const addProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    }
    else { id = 1; }

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log("New Product:", product);
    await product.save();
    console.log("Product Saved");

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: product // Respond with the added product
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

//CREATING API FOR DELETING PRODUCTS
const deleteProduct = async (req, res) => {
  const deletedProduct = await Product.findOneAndDelete({ id: req.body.id });
  if (!deletedProduct) {
    return res.status(404).json({ success: false, error: "Product not found" });
  }
  console.log("Removed");
  res.json({
    success: true,
    deletedProduct: deletedProduct
  });
};

//CREATING API FOR GETTING ALL PRODUCTS
const allProduct = async (req, res) => {
  try {
    let products = await Product.find({}); // Wait for the query to execute
    console.log("All Product Fetched");
    res.json(products); // Send the products data in JSON format
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

// Define the newCollection function
const newCollection = async (req, res) => {
  try {
    let products = await Product.find({});
    let newCollection = products.slice(-8); // Get the last 8 products
    console.log("New Collection fetched");
    res.send(newCollection);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Define the popularInWomen function
const popularInWomen = async (req, res) => {
  try {
    let products = await Product.find({ category: "women" }).limit(4);
    console.log("Popular in Women Fetched");
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Adding to cart
const addToCart = async (req, res) => {
  console.log("Added", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Added");
}

// Removing from cart
const removeFromCart = async (req, res) => {
  try {

    const userId = req.user.id;
    const itemId = req.body.itemId;

    // Fetch user data
    let userData = await Users.findById(userId);

    // Check if user data and cartdata exist
    if (!userData || !userData.cartData) {
      return res.status(400).send("User data or cart data not found");
    }

    // Check if the item exists in the cart
    if (!userData.cartData[itemId] || userData.cartData[itemId] <= 0) {
      return res.status(400).send("Item not found in cart or invalid quantity");
    }

    // Update cart data
    userData.cartData[itemId] -= 1;

    // Save the updated cart data
    const result = await Users.findByIdAndUpdate(
      userId,
      { cartData: userData.cartData },
      { new: true }
    );

    res.status(200).send("Item removed from cart");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// Get Cart Data
const getCartData = async (req, res)=>{
  const userId = req.user.id;

  try {
      let user = await Users.findById(userId);
      if (!user) return res.status(404).send("User not found");

      res.json(user.cartData || {}); // Send cart data or an empty object if none
  } catch (error) {
      res.status(500).send("Server error");
  }
}

module.exports = { addProduct, deleteProduct, allProduct, newCollection, popularInWomen, addToCart, removeFromCart, getCartData };