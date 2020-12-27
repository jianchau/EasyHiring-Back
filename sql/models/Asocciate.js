var  mongoose = require('./../db')
var AsocciateSchema = mongoose.Schema({
    asocciateID:{type:String,required:true},
    workID:{type:String,required:true},
    name:{type:String,required:true},
    cardID:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    avatar:{type:String,required:true,default:''},
    phoneNumber:{type:String,required:true},
    startDate:{type:String,required:true},
    ocupation:{type:String,requried:true},
    inWhichDepartment:{type:String,required:true}
})
var AsocciateModel = mongoose.model('Asocciate',AsocciateSchema)

module.exports = AsocciateModel