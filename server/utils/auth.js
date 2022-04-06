const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token =
            req.body.token || req.query.token || req.headers.authorization;
        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        // console.log("I should have not made it this far");
        try {
            // token - payload => jwt checks token with secret => if successful, returns encoded data (for data transfer)
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },

    //   creates token
    signToken: function ({ fullName, email, _id }) {
        const payload = { fullName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
