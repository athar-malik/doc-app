
const userModel = require('../models/userModels')
const bcrypt = require('bcryptjs');

// register callack
const registerControllers = async(req, res) => {

    try{
        const existingUser = await userModel.findOne({email: req.body.email})
        if(existingUser){
            return res.status(200).send({message: 'user already exists', success: false})
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({message: 'Register successfuly', success: true})
    } catch (error){
        console.log(error)
        res.status(500).send({success: false, message: `Register Controller ${error.message}`})
    }
};

const loginControllers = () => {};

module.exports = {loginControllers, registerControllers}