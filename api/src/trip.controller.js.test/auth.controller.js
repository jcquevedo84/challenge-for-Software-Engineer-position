const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const validation = require("../utils/validation.utils");
const error = require("../utils/response.utils");
const jwt = require("../utils/jwt.utils")


class AuthController {

    static async postSignin(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));

        var inputData = req.body 
        var user = await userModel.findOne({username: inputData.username}).exec();

        if(inputData.username == "" || inputData.password == "" ){

            response = error.BadRequestError("some field are mandatory");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else if(!user){

            response = error.NotFoundError("user not found");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else{
            try{

                var isEqual= await bcrypt.compare(inputData.password, user.password)
    
                if((isEqual)){
                    
                    const accessToken = jwt.generateToken(user.rol,user.username,user.uuid)
                    let datos= {
                        id:user.uuid,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username
                    }
                   
                    res.setHeader('authid',accessToken);
                    return res.status(200).send({datos})
                }
                else{

                    response = error.NotMatchError("Credential invalid");
                    console.log('error:%s', JSON.stringify(response.get()));
                    return res.status(response.code).send(response.get());
                    
                }
            }catch(err){
                console.log("error: ", err);
                const response = new InternalServerError('Internal Server Error');
                res.status(response.code).send(response);
            }
        }
    }
}

module.exports = AuthController;