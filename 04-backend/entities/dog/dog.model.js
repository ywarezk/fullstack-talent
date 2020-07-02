/**
 * based on DogSchema
 * create a model that will interact with the dogs collection
 */

const {model} = require('mongoose');
const DogSchema = require('./dog.schema');

const DogModel = model('Dog', DogSchema);

module.exports = DogModel;