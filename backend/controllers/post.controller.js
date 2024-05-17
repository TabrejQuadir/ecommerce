const Product = require("../model/ProductSchema");


//CREATING API FOR ADDING PRODUCTS
const addProduct = async (req, res)=>{
    try {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{id = 1;}

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
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

module.exports = {addProduct, deleteProduct, allProduct};