//1.import express
const express = require('express')
//import userController
const userController=require('./controllers/userController')
const projectController=require('./controllers/projectController')
const jwtMiddleware = require('./middleware/jwtMiddleware')
const multerConfig=require('./middleware/multerMiddleware')

//2.to create router, use a class Router in the express library
const router = new express.Router()

//path to resolve register request
//(from where to resolve, how to resolve(logic))
router.post('/user/register',userController.register)

//path to resolve login request
router.post('/user/login',userController.login)

//export router
module.exports=router

// path to add a project
router.post('/projects',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//path to get all project
router.get('/all-product',projectController.getAllProjectController)

//path to get home project
router.get('/home-project',projectController.getProjectController)

//path to get user project
router.get('/user/all-project',jwtMiddleware,projectController.getUserProject)

//path to delete a project
router.delete('/delete-project/:id',jwtMiddleware,projectController.deleteProjectController)

//path to edit project
router.put('/update-project/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjectController)

//path to edit profile
router.put('/update-profile',jwtMiddleware,multerConfig.single('profile'))


// export router
module.exports=router



