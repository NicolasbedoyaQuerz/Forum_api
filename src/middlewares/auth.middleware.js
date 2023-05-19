const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers["access-token"];

        if(!token){
            return res.status(401).json({
                error: "not token provided",
            })
        }

        const decoded = jwt.verify(token, "loktar", {
            algorithms: 'HS512'
        });

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = authenticate;