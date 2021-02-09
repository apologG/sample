const {User} = require('../models')
const {to, responseError, responseSuccess} = require('../services/util.service');
const bcrypt = require('bcrypt');

module.exports = {
 async create(req, res){
  const body = req.body
  body.password = await bcrypt.hash(body.password, 10)
   
  const [error, user] = await to(User.create(body))
  if (error) return responseError(res, error, 422);
        
  return responseSuccess(res, user, 201);
 }, 
 async get(req, res){
  const [error, user] = await to(User.findOne({where: {id: 1}}));
  if (error) return responseError(res, error, 422);
  
  return responseSuccess(res, user, 200);
 },
 async getAll(req, res){
  const [error, users] = await to(User.findAll())
  if (error) return responseError(res, error, 422);
  
  return responseSuccess(res, users, 200);
 },
 async update(req, res){
  const {name} = req.body
  
  const [error, user] = await to(User.findOne({where: {id: 1}}));
  if (error) return responseError(res, error, 422);
  
  user.set({name})
  const [errorUpdate, userUpdate] = await to(user.save())
  if (errorUpdate) return responseError(res, error, 422);

  return responseSuccess(res, userUpdate, 200);
 },
 async delete(req, res){
  const [error, user] = await to(User.findOne({where: {id: 1}}));
  if (error) return responseError(res, error, 422);
  
  const [errorDelete] = await to(user.destroy());
  if (errorDelete) return responseError(res, "Error can't delete");

  return responseSuccess(res, { message: 'User was delete' }, 204);

 }
}