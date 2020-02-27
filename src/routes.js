const express = require('express');
const userController = require(`./controller/UserController`)
const AddressController = require(`./controller/AddressController`)

const router = express.Router();

router.get(`/users`,userController.index)
router.post('/users', userController.store);

router.get('/users/:user_id/addresses', AddressController.index);
router.post('/users/:user_id/addresses', AddressController.store);


module.exports = router