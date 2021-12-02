const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const validation = require("../utils/validation.utils");
const error = require("../utils/response.utils");
const { generateUuid }   = require('../utils/uuid.utils');

class UserController {

    static async postUser(req, res) {

        //TODO: validate password
        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));

        var inputData = req.body 
        var userFound = await userModel.findOne({ email: inputData.email}).exec();
        var userFoundname = await userModel.findOne({ username: inputData.username}).exec();

        if(userFound || userFoundname){
            
            const response = new error.ConflictError("user or email already exist");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else if(inputData.name == "" || inputData.lastName == "" || inputData.password == "" || inputData.email == "" || inputData.username == ""){
            
            const response = new error.BadRequestError("Missing fields");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
            
        }
        else if(!validation.validateEmail(inputData.email)){
            const response = new error.PartialError("invalid format email");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else{

            const uuid = generateUuid();
            try{

                const user = new userModel({
                    username: inputData.username,
                    email: inputData.email,
                    password: bcrypt.hashSync(inputData.password, 8),
                    name: inputData.name,
                    lastname: inputData.lastname,
                    sexo: inputData.sexo,
                    status: true,
                    rol: inputData.rol,
                    uuid: uuid
                });
        
                var register = await user.save();
                res.setHeader('location', "http//localhost:8080/user/"+uuid);
                return res.status(201).send({user})

            } catch (err) {
                console.log("error: ", err);
                const response = new InternalServerError('Internal Server Error');
                res.status(response.code).send(response);
            }
        }
    }

    static async getUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.params));

        let id = req.params.id;
        var userFound = await userModel.findOne({ uuid: id}).exec();

        if(!userFound){
            const response = new error.NotFoundError("user not found");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else{
            let datos= {
                id:userFound.uuid,
                name: userFound.name,
                lastName: userFound.lastName,
                email: userFound.email,
                username: userFound.username,
                sexo: userFound.sexo,
                rol: userFound.rol
            }
            return res.status(200).send({datos})
        }
    }

    static async getUser(req, res) {

        try {

            var users = await userModel.find().exec();
            res.status(200).send(users);
        } catch (err) {
            console.log("error: ", err);
            const response = new InternalServerError('Internal Server Error');
            res.status(response.code).send(response);
        }
    }

    static async putUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));
        var inputData = req.body 
        let id = req.params.id
        var userFound = await userModel.findById({ uuid: id}).exec() //Consulta para ver si el usuario existe 

        if(!userFound){

            const response = new error.NotFoundError("user not found");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else if(inputData.name == "" || inputData.lastName == "" || inputData.password == "" || inputData.email == "" || inputData.username == ""){
            
            const response = new error.BadRequestError("Missing fields");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
            
        }
        else if(!validation.validateEmail(inputData.email)){

            const response = new error.PartialError("invalid format email");
            console.log('error:%s', JSON.stringify(response.get()));
            return res.status(response.code).send(response.get());
        }
        else{
            try{
                
                userModel.findByIdAndUpdate(userFound.id,inputData,{upsert:true},function(err, doc) {  
                    if (err) {
                        console.log("error: ", err);
                        const response = new InternalServerError('Internal Server Error try update user');
                        return res.status(response.code).send(response);
                    }
                    return res.status(200).send({inputData})
                })
            }catch(err){
                console.log("error: ", err);
                const response = new InternalServerError('Internal Server Error');
                res.status(response.code).send(response);
            }
        }
    }

    static async deleteUserById(req, res) {

        console.log('Call %s %s ', req.method, req.url);
        console.log('Body params: %s ', JSON.stringify(req.body));

        let inputData = req.params.id
        var userFound = await userModel.findOne({ uuid: inputData}).exec();

    if(!userFound){
        const response = new error.NotFoundError("user not found");
        console.log('error:%s', JSON.stringify(response.get()));
        return res.status(response.code).send(response.get());
    }
    else{
        try{
            userModel.findByIdAndRemove(userFound._id).exec((err, doc) => {
                if (err) {
                    console.log("error: ", err);
                    const response = new InternalServerError('Internal Server Error try delete user');
                    return res.status(response.code).send(response);
                } 
                else {
                    return res.status(200).send({})
                }
            });
        }catch(err){
            console.log("error: ", err);
            const response = new InternalServerError('Internal Server Error');
            res.status(response.code).send(response);
        }
    }
    }

}

module.exports = UserController;