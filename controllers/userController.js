const User = require('../models/User')
var bcrypt = require('bcryptjs');

exports.getAllUser = async (req, res) => {

    const users = await User.find({},['-email','-password'])
    res.send(users).status(200)

}


exports.getAllUserById = async (req, res) => {
            const id = req.params.id

    const user = await User.find({_id:id},['-email','-password'])
    res.send(user).status(200)

}



exports.createuser = async (req, res) => {

    const { firstName, lastName, email, password} = req.body

    const user = await new User({
        firstName, lastName, email, password
    })

    try { 
        user.save()
        
        res.status(201).send(user)
        
    }
    catch(err){
        res.status(500).send(err)
    }
}