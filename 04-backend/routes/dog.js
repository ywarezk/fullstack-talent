/**
 * min express app that will deal
 * /api/dogs
 */

const {Router} = require('express');
const DogModel = require('../entities/dog/dog.model');

const dogsRouter = Router();

// /api/dogs/
dogsRouter.get('/', async (req, res) => {
    const dogs = await DogModel.find();
    res.json(dogs);
});

dogsRouter.post('/', async (req, res, next) => {
    try {
        const newDog = new DogModel(req.body);
        await newDog.save();
        res.status(201).json(newDog);
    } catch(err) {
        next(err);
    }
})

module.exports = dogsRouter;
