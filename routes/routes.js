const express = require('express')
const router = express.Router()
const homeRoutes = require('./home')
const userRoutes = require('./user')

router.use(homeRoutes)
router.use(userRoutes)

module.exports = router