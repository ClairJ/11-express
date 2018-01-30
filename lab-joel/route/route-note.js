'use strict'

const Note = require('../model/note')
const storage = require('../lib/storage')
const bodyParser = require('body-parser').json()
const errorHandler = require('../lib/error-handler')

module.exports = function(router) {
  router.post('/note', bodyParser, (req, res) => {
    new Note(req.body.title, req.body.content)
      .then(note => storage.create('note', note))
      .then(item => res.status(201).json(item))
      .catch(err => errorHandler(err, res))
  })
  router.get('/note/:_id', (req, res) => {
    storage.fetchOne('note', req.params._id)
      .then(buffer => buffer.toString())
      .then(json => JSON.parse(json))
      .then(note => res.status(201).json(note))
      .catch(err => errorHandler(err, res))
  })
  router.get('/note', (req, res) => {
    storage.fetchAll('note')
      .then(note => res.status(201).json(note))
      .catch(err => errorHandler(err, res))
  })
  router.put('/note/:_id', bodyParser, (req ,res) => {
    storage.update(req.params._id, req.body)
      .then(item => res.status(201).json(item))
      .catch(err => errorHandler(err, res))
  })
  router.delete('/note/:_id', (req, res) => {
    storage.destory('note', req.params._id)
      .then(() => res.status(201).end())
      .catch(err => errorHandler(err, res));
  })

}
