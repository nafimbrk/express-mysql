const express = require('express')

const UserController = require('../controller/users.js')

const router = express.Router()

// create - post
router.post('/', UserController.createNewUsers)

// read - get
router.get('/', UserController.getAllUsers)

// update - patch
router.patch('/:id', UserController.updateUser)

// delete - delete
router.delete('/:id', UserController.deleteUser)

module.exports = router