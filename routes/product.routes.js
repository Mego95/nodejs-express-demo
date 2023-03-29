const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/findall', productController.findall)
router.get('/findone/:product', productController.findone)
router.post('/create', productController.create)
router.patch('/update', productController.update)
router.delete('/delete/:product', productController.delete)

module.exports = router