const jwt = require('jsonwebtoken');

module.exports = 

    async function verifyJWT(req,res,next) {

        const token = req.headers['x-access-token'];
        if(!token) return res.status(401).json({ auth : false, message: 'No token provided' })

        jwt.verify(token, process.env.SECRET, function(err, ecnoded) {
            if(err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
        })

        next();
}

