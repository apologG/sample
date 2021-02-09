const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')
const customMiddleware = require('../middleware/customMiddleware')

router.post('/users',
customMiddleware.checkUser,
UserController.create)

router.get('/profile', 
UserController.get)

router.get('/users', 
UserController.getAll)

router.put('/profile', 
UserController.update)

router.delete('/profile', 
UserController.delete)

module.exports = router;