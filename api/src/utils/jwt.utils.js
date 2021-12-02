//const config = require('../config');
const jwt = require('jsonwebtoken')
const { ResponseError } = require('./response.utils');


const generateToken = (userRol, userName, userUuid) => {

  const data = {
    rol: userRol,
    username: userName,
    useruuid: userUuid
  }

  const token = jwt.sign(data,SECRET_KEY,{
          expiresIn: "7d"
      }
  )
  return token;
};

const validateToken = (token) => {
  try {

      //const token = req.headers.authorization.split(' ')[1];
      const payload = jwt.verify(token, SECRET_KEY)
      
      //validar si el valor del rol es  el correcto
      //validar que tenga el rol y el identificador
      //validar si el tiempo es de 7 dias

      return payload.rol;
    } catch (error){
      const resp = new ResponseError(401,'JWT is not valid or is missing');
      res.status(401).json(resp);
    }
};