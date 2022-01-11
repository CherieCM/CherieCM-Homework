import express from 'express';
import { v4 as uuidv4 } from 'uuid';

//initialize the router
const router = express.Router();
let users = [
  // {
  //   firstName: 'Mary',
  //   lastName: 'Jane',
  //   age: 26,
  // },
  // {
  //   firstName: 'Jim',
  //   lastName: 'Hansen',
  //   age: 23,
  // },
];
//all routes in here are starting with creating /users
router.get('/', (req, res) => {
  res.send(users);
});

//we need to send data from the front end to the server
router.post('/', (req, res) => {
  // console.log('Post Route Reached');
  const user = req.body;

  // const userId = uuidv4(); ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  //create object that represents the user
  users.push({ ...user, id: uuidv4() });
  //add new users to the array
  //users.push();
  res.send(`User with the name ${user.firstName} added to the database!`);
});

//expects anything after the user path
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

//delete the user with an id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  //filter function removes the elements or id that the function returns false
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
});

//update the user information
router.patch('/:id', (req, res) => {
  //send info from the client side to update information
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
});

//helps us to access this module
export default router;
