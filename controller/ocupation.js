const OcupationModel = require('./../sql/models/Ocupation')
const DepartmentModel = require('./../sql/models/Department')
const sql = require('./../sql/index')
const {getUuid} = require('./../utils')

const addOcupation = (req,res,next)=>{
    const insertData = req.body
    sql.find(OcupationModel,{ocupationName:insertData.ocupationName},{_id:0,__v:0}).then(data=>{
        if(data.length>0){
            res.status(200).send({
                code:5001,
                message:'该职位名称已存在',
                ocupationName:insertData.ocupationName
            })
        }
        else{
            insertData.ocupationID = 'ocupation-' + getUuid()
            const arr = []
            arr.push(sql.update(DepartmentModel,{departmentName:insertData.inWhichDepartment}
                ,{$push:{departmentOcupations:insertData.ocupationName}},0))
            arr.push(sql.insert(OcupationModel,insertData))
            Promise.all(arr).then(data=>{
                res.status(200).send({
                    code:200,
                    message:'添加职位',
                    ocupationID:insertData.ocupationID
                })
            }).catch(err=>console.log(err))
        }
    })
}

const lookUpOcupation = (req,res,next)=>{
    let whereData = {}
    if(req.query.departmentName){
        whereData = {inWhichDepartment:departmentName}
    }
    sql.find(OcupationModel,whereData,{_id:0,__v:0}).then(data=>{
        res.status(200).send({
            code:200,
            message:'查看职位',
            totalCount:data.length,
            data
        })
    }).catch(err=>console.log(err))
}

const deleteOcupation = (req,res,next) =>{
    const {ocupationID} = req.query
    sql.delete(OcupationModel,{ocupationID},0).then(data=>{
        res.status(200).send({
            code:200,
            message:'删除一条职位信息',
            deletedOcupationID:ocupationID
        })
    }).catch(err=>console.log(err))
}

module.exports = {
    addOcupation,lookUpOcupation,deleteOcupation
}