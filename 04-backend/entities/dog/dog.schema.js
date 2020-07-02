/**
 * mongoose schema of dog collection
 * how a document in the dog collection looks like
 * how our table look like (fields / columns)
 */

const {Schema} = require('mongoose');

const DogSchema = new Schema({
    name: String,
    age: Number,
    hobbies: String
});

module.exports = DogSchema;