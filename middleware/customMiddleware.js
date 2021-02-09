const {to, responseError } = require('../services/util.service')

const {User} = require('../models');

module.exports = {
 async checkUser(req, res, next){
  const [error,user] = await to (User.findOne({where: {email: req.body.email}}))
  if (error) return responseError(res, 'Error', 422);
  
  if (user) return responseError(res, 'User already exist', 409)
  if (!user) return next();
 }
}