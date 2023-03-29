const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema


let productSchema = new Schema({
    product: {
        type: String,
        required: [true, 'Product name is required'],
        max: 500,
        unique: true,
        trim: true
    },

    cost: {
        type: Number,
        required: [true, 'Cost is required'],
    },

    description: {
        type: String,
        trim: true
    },

    quantity: {
        type: Number
    }
}, {
    collection: 'products',
    timestamps: true
})

productSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Product', productSchema)