var DepartmentModel = require('../sql/models/Department')
var {getUuid} = require('./../utils/index')
var sql = require('./../sql/index')


const newDepartment = (req,res,next)=>{
    const insertData = req.body
    sql.find(DepartmentModel,{departmentCode:insertData.departmentCode},{_id:0,__v:0})
    .then(data=>{
        if(data.length>0){
            res.status(200).send({
                code:5001,
                message:'该部门代号已存在'
            })
        }
        else{
            insertData.departmentID = 'department-'+ getUuid()
            console.log(insertData);
            sql.insert(DepartmentModel,insertData).then(data=>{
                res.status(200).send({
                    code:200,
                    message:'添加部门',
                    departmentCode:insertData.departmentCode
                })
            })
        }
    })
}

const lookUpDepartment = (req,res,next)=>{
    sql.find(DepartmentModel,{},{_id:0,__v:0}).then(data=>{
        res.status(200).send({
            code:200,
            message:'查看部门',
            data:data,
            totalCount:data.length
        })
    }).catch(err=>console.log(err))
}

const deleteDepartment = (req,res,next)=>{
    const {departmentID} = req.query
    sql.delete(DepartmentModel,{departmentID:departmentID},0).then(data=>{
        res.status(200).send({
            code:200,
            data,
            id:departmentID,
            message:'删除一个部门'
        })
    }).catch(err=>console.log(err))
}







module.exports = {
    newDepartment,lookUpDepartment,deleteDepartment
}