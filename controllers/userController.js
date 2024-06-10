//logic to resolve register request

const users = require("../modal/userSchema");
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log('inside register controller');
    const { username, email, password } = req.body
    console.log(username, email, password);
    // res.status(200).json('register request received')

    try {
        const existingUser = await users.findOne({ mailId: email })
        if (existingUser) {
            res.status(406).json('Account Already Exist')
        }
        else {
            //object for the model
            const newUser = new users({                          //model name
                username,
                mailId: email,
                password,
                github: "",
                linkedin: "",
                profilepic: ""

            })
            //to save the data in mongodb
            await newUser.save()
            //reponse to frontend
            res.status(200).json(newUser)
        }
    }
    catch (error) {
        res.status(401).json(error)

    }
}



// login controller

exports.login = async (req, res) => {
    console.log('inside login function');
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUser = await users.findOne({ mailId: email, password })
        if (existingUser) {
            //only the existing user should be able to  login, so generate a token for that , unique id will be created for each document, so it will check that key, only then it will allow u to use all functionalitiesmof login
            const token = jwt.sign({ userId: existingUser._id }, 'supersecretkey') //payload
            res.status(200).json(
                {
                    existingUser,
                    token
                }
            )
        }
        else {
            res.status(401).json('Invalid Email Id or Password')
        }
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)
    }
}

//update 

exports.updateProfileController = async (req, res) => {
    const userId = req.payload

    const { username, email, password, github, linkedin, profile } = req.body

    ProfileImage = req.file ? req.file.filename : profile
    try {
        const existingUser = await users.findByIdAndUpdate({ _id: userId, username, mailId: email, password, github, linkedin, profile: ProfileImage }, { new: true })
        await existingUser.save()
        res.status(200).json(existingUser)
    } catch (error) {
        res.status(401).json(`Request failed due to ${error}`)

    }
}