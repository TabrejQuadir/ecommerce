const express = require("express") 
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const postroute = require("./routes/post.route.js")

app.use(express.json()); 
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://tabrezquadir6:tabrez@cluster0.womhkss.mongodb.net/e-commerce").then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log("Not Connected", error );
});

//image Storage Engine
const storage = multer.diskStorage({
    destination:"./upload/images",
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single("product"),(req, res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:4000/images/${req.file.filename}`
    })
})

app.use('/api/post', postroute );


app.listen("4000", (error) => {
    if(!error){
        console.log("Server runing on port 4000")
    } else {
        console.log("Error: "  + error)
    }
})

