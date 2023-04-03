const Product = require('../models/product.model')

exports.findall = function(req, res) {
    Product.find({}, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
        } else {
            res.status(200).json({ status: true, data: results })
        }
    })
}

exports.findone = function(req, res) {
    const product = req.params.product

    Product.findOne({product:product}, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
        } else {
            res.status(200).json({ status: true, data: results })
        }
    })
}

exports.create = function(req, res) {
    const newProduct = new Product({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    })

    newProduct.save((err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
        } else {
            res.status(200).json({ status: true, data: results })
        }
    })
}

exports.update = function (req, res) {
    const product = req.body.product

    const updatedProduct = {
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    }

    Product.findOneAndUpdate({product: product}, updatedProduct, {new:true}, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
        } else {
            res.status(200).json({ status: true, data: results })
        }
    })
}

exports.delete = function (req, res) {
    const product = req.params.product

    Product.findOneAndDelete({product: product}, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
        } else {
            res.status(200).json({ status: true, data: results })
        }
    })
}