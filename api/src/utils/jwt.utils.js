const config = require('../config');
const jwt = require('jsonwebtoken')
const { ResponseError } = require('./response.utils');


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

const validateToken = (token,methodName, rolUser) => {


      //const token = req.headers.authorization.split(' ')[1];
      const payload = jwt.verify(token, config.token.secretKey)
      const rol = payload.rol;
      console.log("rol: "+rol+" methodName: "+methodName+" rolUser: "+rolUser)
      if(rol=="Asesor" && ((rolUser != null && rolUser !="Cliente" && methodName == "postUser") || (methodName != "postUser" && methodName != "getUserById" && methodName != "getUser"))){
        
        return false;
      } else if (rol=="Cliente" && (methodName == "postUser" && methodName == "deleteUserById")){
        return false;
      } else {
        return true
      }

      //validar que tenga el rol y el identificador
      //validar si el tiempo es de 7 dias
};


module.exports = {
  generateToken,
  validateToken,
}