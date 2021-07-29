const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = mongoose.Schema({
    writer:{
        type:Schema.Types.ObjectID,
        ref: 'User'
    },
    title : {   //상품제목
        type : String,
       maxLength : 50
    },
    description :{
        type : String
    },
    price :{
        type:Number,
        default: 0
    },
    continent :{
      type:  Number,
        default :1
    },
    images:{
        type:Array,
        default: []
    },
    sold:{
        type : Number,
        maxLength: 100,
        default: 0
    },
    views :{
        type: Number,
        default :0
    },

}, { timestamp: true})
const Product = mongoose.model('Product', productSchema);

module.exports = { Product }