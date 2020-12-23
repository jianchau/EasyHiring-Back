var moogoose = require('../db')
var DepartmentSchema = mongoose.Schema({
    departmentID:{type:String,required:true},
    departmentCode:{type:String,required:true},
    departmentName:{type:String,required:true},
    departmentManager:{type:String,required:false},
    departmentNumber:{type:Number,default:0},
    departmentOcupations:{type:Array,required:false},
})