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
    category :{
      type:  Number,
        default :1
    },
    images:{
        type:Array,
        default: []
    },
    populate:{
        type : Number,
        maxLength: 100,
        default: 0
    },

}, { timestamp: true})

productSchema.index({
    title:'text',
    description:'text'
},{
    weight:{
        title:5,
        category: 3,
        description :1
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }