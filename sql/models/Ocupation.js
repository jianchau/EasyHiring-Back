const mongoose  = require('./../db')

const OcupationSchema = mongoose.Schema({
    ocupationID:{type:String,required:true},
    ocupationName:{type:String,required:true},
    inWhichDepartment:{type:String,retuired:true},
    ocupationQuantity:{type:Number,default:0}
})
const OcupationModel = mongoose.model('Ocupation',OcupationSchema)


module.exports = OcupationModel