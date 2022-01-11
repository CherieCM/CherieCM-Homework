//GET /users finds all users
//POST /users create a user
//GET /user/:id finds user details
//DELETE /users/:id deletes user
//PATCH /users/:id updates user

import express from 'express';
import bodyParser from 'body-parser'; //allows us to take in incoming post request bodies

import usersRoutes from './routes/users.js';

//initialize express application
const app = express(); //whole application lies in the app variable
const PORT = 3000;

//initialize bodyParser middleware
app.use(bodyParser.json());

app.use('/users', usersRoutes);

//create route for requests to go to
app.get('/', (req, res) => res.send('Welcome to the Homepage'));

app.listen(PORT, () => console.log(`The listening port is: http://localhost:${PORT}`));
