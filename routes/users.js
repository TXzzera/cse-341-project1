const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const validateUser = require('../middlewares/userValidate');

router.get('/', 
    //#swagger.tags = ['Users']
    usersController.getAll);
router.get('/:id',
    //#swagger.tags = ['Users']
    usersController.getSingle);
router.post('/', 
    //#swagger.tags = ['Users']
    validateUser.saveUser, usersController.userCreate);
router.put('/:id', 
    //#swagger.tags = ['Users']
    validateUser.saveUser, usersController.userUpdate);
router.delete('/:id', 
    //#swagger.tags = ['Users']
    usersController.userDelete);

module.exports = router;