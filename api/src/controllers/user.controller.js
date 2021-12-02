const usermModel = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY="secretkey123456"

class UserController {

    static async postUser(req, res) {

        /*
        TODO:
            -validaciones de parametros
            -
        */

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));

        const user = new usermModel({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            name: req.body.name,
            lastname: req.body.lastname,
            sexo: req.body.sexo,
            status: true,
        })

        const data = {
            rol: req.body.rol,
            username: req.body.username
        }
    
        const token = jwt.sign(data,SECRET_KEY,{
                expiresIn: "7d"
            }
        )

        const decodedToken = jwt.verify(token, SECRET_KEY)

        var register = await user.save()
        return res.status(200).send({
            roldecode: decodedToken.rol,
            token:token,
            user,
            message: "Registro exitoso",
            id: register._id
        })
    }

    static async getUser(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async getUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async putUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

    static async deleteUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        const response = {
            success: true
          };
          console.log('call response:%s', JSON.stringify(response));
          res.status(200).send(response);

    }

}

module.exports = UserController;