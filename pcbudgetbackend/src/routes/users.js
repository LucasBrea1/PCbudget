const express = require('express');

const router = express.Router();
const usercontroller = require('../controllers/usersController')

router.get('/', usercontroller.getUsers)
router.post('/login', usercontroller.login)
router.post('/register', usercontroller.register)
//router.delete('/:id', usercontroller.deleteUser)
//router.put('/:id', usercontroller.updateTask)



module.exports = router;