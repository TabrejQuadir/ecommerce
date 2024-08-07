const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken")
require('dotenv').config();

const postRoute = require("./routes/post.route.js");
const userRoute = require("./routes/user.route.js");

const app = express();

// Middleware to parse JSON
app.use(express.json());
// CORS configuration
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin, like mobile apps or curl requests
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log("Not Connected", error);
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Upload Endpoint
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
});


// Routes
app.use('/api/post', postRoute);
app.use('/api/auth', userRoute);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server running on port ${PORT}`);
    } else {
        console.log("Error: " + error);
    }
});
