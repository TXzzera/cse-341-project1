const express =  require ('express');
const router = express.Router();
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.ignore = true
    res.send('Hello World!');
});

router.use('/users', require('./users'));
router.use('/cars', require('./cars'));

module.exports = router;

