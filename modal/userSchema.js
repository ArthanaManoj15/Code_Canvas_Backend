//modal for users collection

//import mongoose

const mongoose = require('mongoose')

//schema/structure

const userSchema = mongoose.Schema({
    //schema method , while login, we have to input uname,email,psswrd
    username: {                       //key
        require: true,     //uname is required, so true
        type: String
    },
    mailId: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    },
    profilepic: {
        type: String
    }
}

)


//call modal
const users = mongoose.model('users', userSchema) //users-collection name in mongodb we created , userschema-we created just above , store in variable users, 
//imp---****************model name and collection name should be same*************


module.exports= users