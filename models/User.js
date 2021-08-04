const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})


userSchema.pre('save',async function(next){


    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    this.password = await bcrypt.hash(this.password, salt);

    // const HASHED_PASSWORD = await bcrypt.hash(this.password,10)
  
    next()

})
const User = mongoose.model('User',userSchema)

module.exports = User