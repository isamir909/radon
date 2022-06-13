const mongoose = require('mongoose');
let ObjectId= mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId:
    {
      type:  ObjectId,
      ref:"User"
    },
    productId:
    {
        type:ObjectId,
       ref: "Product"
    },
    amount: Number,
    isFreeAppUser:Boolean,
   
    Date:String

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
