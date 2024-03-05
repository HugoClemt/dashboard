const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    console.log('Token reçu par le middleware:', token);
    console.log(token);
    if (!token) {
        return res.status(401).send("Unauthorized: No token provided");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(403).send("Forbidden: Invalid token");
        }
        req.user = decoded;
        next();
    });
}

module.exports = authenticateToken;
