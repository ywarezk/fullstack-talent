/**
 * server application with express
 */

const createApplication = require('express');
const dogsRouter = require('./routes/dog');
const {connect} = require('mongoose');

connect('mongodb://localhost:27017/dogs-demo').then((mongoose) => {
    console.log('we are connected to the database');
});

// app : Application
const app = createApplication();

app.use(createApplication.json());

// express identifies a function
// method: get, post, put, delete
// path: /piglet
// /sweetness
// hello
app.get('/piglet', (req, res, next) => {
    res.send('hello piglet')
});

// middleware jobs:
// 1 - response
// 2 - do some logic and then call next
// 3 - report an error -  next(new Error(...))

// /api/dogs - get send all the dogs
// /api/dogs - post create a new dog
// /api/dogs/:id - get a certain dog, put - update a dog, delete dog
// 

app.use('/api/dogs', dogsRouter);

app.listen(3000, function() {
    console.log('we are now listening to port 3000');
})
