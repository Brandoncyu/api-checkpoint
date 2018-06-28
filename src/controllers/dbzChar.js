const model = require('../models/dbzChar')

function getAll(req, res, next){
  let data = model.getAll()
  res.send({data})
}

function getOne(req, res, next){
  let data = model.getOne(req.params.id)
  if (data.errors) return next({status: 404, message: `could not find character with id of ${req.params.id}`})
  res.send({data})
}

function create(req, res, next){
  let data = model.create(req.body)

  if (data.errors) return(next({status: 404, message: 'You need name, race, strongest, and signature'}))

  res.status(200).send({data})
}

function update(req,res,next){
  let check = model.getOne(req.params.id)
  if (check.errors) return next({status: 404, message: `could not find character with id of ${req.params.id}`})

  let data = model.update(req.body, req.params.id)
  if (data.errors) return next({status: 404, message: 'You need name, race, strongest, and signature'})

  res.status(200).send({data})
}

function remove(req, res, next){
  let check = model.getOne(req.params.id)
  if (check.errors) return next({status: 404, message: `could not find character with id of ${req.params.id}`})
  let data = model.remove(req.params.id)
  res.status(204).send(data)
}

module.exports = {getOne, getAll, create, update, remove}
