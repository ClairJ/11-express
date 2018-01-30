'use strict'

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

const storage = module.exports = {}

storage.create = (schema, item) => {
  let json = JSON.stringify(item)
  return fs.writeFileProm(`${__dirname}/../data/${schema}/${item._id}.json`, json)
    .then(() => item)
}

storage.fetchOne = (schema, itemId) => {
  return fs.readFileProm(`${__dirname}/../data/${schema}/${itemId}.json`);
}

storage.fetchAll = (schema) => {
  return fs.readFileProm(`${__dirname}/../data/${schema}`);
}

storage.update = (schema, itemId, item) => {
  let json = JSON.stringify(item);
  return fs.readFileProm(`${__dirname}/../data/${schema}/${itemId}.json`, json)
    .then(() => item)
}

storage.destroy = (itemId) => {
  return fs.unlinkProm(`${__dirname}/../data/note/${itemId}.json`)
}
