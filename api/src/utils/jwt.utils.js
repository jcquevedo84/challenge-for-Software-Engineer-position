const config = require('../config');
const jwt = require('jsonwebtoken')
const error = require("../utils/response.utils");


const generateToken = (userRol, userName, userUuid) => {

  const data = {
    rol: userRol,
    username: userName,
    useruuid: userUuid
  }

  const token = jwt.sign(data,config.token.secretKey,{
          expiresIn: config.token.expiration
      }
  )
  return token;
};

function authorize(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User') 
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === 'string') {
      roles = [roles];
  }

  return [
      // authenticate JWT token and attach user to request object (req.user)
      //jwt({ secret, algorithms: ['HS256'] }),
      
      // authorize based on user role
      (req, res, next) => {

        if(req.headers.authorization) {
          const token = req.headers.authorization.split(' ')[1];
          console.log("token: "+token);
          let payload 
          try {
            
            payload = jwt.verify(token, config.token.secretKey)
          } catch (error) {

            const response = new error.Unauthorized("Invalid Token");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
          }

          if (roles.length && !roles.includes(payload.rol)) {
            
            // user's role is not authorized
            const response = new error.Unauthorized("Unauthorized");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
          }

          // authentication and authorization successful
          next();
        } else {
          const response = new error.Unauthorized("Token missing");
          console.log('error:%s', JSON.stringify(response.get()));
          return res.status(response.code).send(response.get());
        }
      }
  ];
}

module.exports = {
  generateToken,
  authorize
}