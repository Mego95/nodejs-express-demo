const User = require('../models/user.model')

const logger = require('../logger/logger')


exports.findAll = function(req, res) {
    console.log('find all users')

    User.find({}, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
            console.log('Problem in reading users', err)
            logger.error("Error in reading all users", err)
        } else {
            res.status(200).json({ status: true, data: results })
            console.log('Success in reading users')
            logger.info("Success in reading all users", results)
            logger.warn("Warn in reading all users")
            logger.error("Error in reading all users")
            logger.debug("Debug in reading all users")
        }
    })
}

exports.findOne = function(req, res) {

    const inputUsername = req.params.username
    
    console.log('Find user with username ', inputUsername)

    User.findOne({ username: inputUsername }, (err, results) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
            console.log(`Problem in finding user with username ${inputUsername}`, err)
        } else {
            res.status(200).json({ status: true, data: results })
            console.log(`Success in finding user with username ${inputUsername}`)
        }
    })
}

exports.create = function(req, res) {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        products: req.body.products
    })

    console.log('Insert user with username', req.body.username)

    newUser.save((err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
            console.log(`Problem in creating user with username ${req.body.username}`, err)
        } else {
            res.status(200).json({ status: true, data: result })
            console.log(`Success in finding user with username ${req.body.username}`)
        }
    })
}

exports.update = function(req, res) {
    const username = req.body.username

    const updateUser = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    }

    User.findOneAndUpdate({ username: username }, updateUser, {new: true}, (err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
            console.log(`Problem in updating user with username ${username}`, err)
        } else {
            res.status(200).json({ status: true, data: result })
            console.log(`Success in updating user with username ${username}`)
        }
    })
}

exports.delete = function(req, res) {
    const username = req.params.username

    console.log('Delete user with username', username)

    User.findOneAndDelete({ username: username }, (err, result) => {
        if (err) {
            res.status(400).json({ status: false, data: err })
            console.log(`Problem in deleting user with username ${username}`, err)
        } else {
            res.status(200).json({ status: true, data: result })
            console.log(`Success in updating user with username ${username}`)
        }
    })
}