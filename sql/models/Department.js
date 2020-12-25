var mongoose = require('../db')
var DepartmentSchema = mongoose.Schema({
    departmentID:{type:String,required:true},
    departmentCode:{type:String,required:true},
    departmentName:{type:String,required:true},
    departmentManager:{type:String,required:false},
    departmentQuantity:{type:Number,default:0},
    departmentOcupations:{type:Array,required:false},
})

var DepartmentModel = mongoose.model('Department',DepartmentSchema)

module.exports = DepartmentModel