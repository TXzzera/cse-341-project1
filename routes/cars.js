const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars');
const validateCar = require('../middlewares/carValidate');

router.get('/', 
    //#swagger.tags = ['Cars']
    carsController.getAll);
router.get('/:id', 
    //#swagger.tags = ['Cars']
    carsController.getSingle);
router.post('/', 
    //#swagger.tags = ['Cars']
    validateCar.saveCar, carsController.carCreate);
router.put('/:id', 
    //#swagger.tags = ['Cars']
    validateCar.saveCar, carsController.carUpdate);
router.delete('/:id', 
    //#swagger.tags = ['Cars']
    carsController.carDelete);

module.exports = router;