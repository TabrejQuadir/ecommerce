const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;  // Ensure this line correctly sets req.user
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using valid token" });
    }
}

module.exports = verifyUser;
