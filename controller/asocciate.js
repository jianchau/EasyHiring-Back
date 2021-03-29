const Asocciate = require('././../sql/models/Asocciate')
const AsocciateModel = require('./../sql/models/Asocciate')
const DepartmentModel = require('./../sql/models/Department')
const OcupationModel = require('./../sql/models/Ocupation')
const sql = require('../sql')
const {getUuid} = require('./../utils/index')


const addAsocciate = (req,res,next)=>{
    const insertData = req.body
    sql.find(Asocciate,{cardID:insertData.cardID},{_id:0,__v:0}).then(data=>{
        if(data.length>0){
            res.status(200).send({
                code:5001,
                message:'该身份证号已存在',
                cardID:insertData.cardID
            })
        }
        else{
            sql.find(Asocciate,{workID:insertData.workID},{_id:0,__v:0}).then(data=>{
                if(data.length>0){
                    res.status(200).send({
                        code:5002,
                        message:'该工号已存在',
                        workID:insertData.workID
                    })
                }
                else{
                    insertData.asocciateID = 'asocciate-' + getUuid()
                    sql.update(OcupationModel,{ocupationName:insertData.ocupation,inWhichDepartment:insertData.inWhichDepartment},{$inc:{ocupationQuantity:1}},0)
                    .then((data)=>{
                        sql.insert(Asocciate,insertData).then(()=>{
                            //同步更新部门集合
                            sql.update(DepartmentModel,{departmentName:insertData.inWhichDepartment},{$inc:{departmentQuantity:1}},0).then((data)=>{
                                res.status(200).send({
                                    code:200,
                                    message:'插入一条员工数据',
                                    workID:insertData.workID
                                })
                            })
                        }).catch(err=>console.log(err))
                    }).catch(err=>console.log(err))
                }
            })
        }
    })
}

const lookUpAsocciate = (req,res,next) => {
    sql.find(Asocciate,{},{_id:0,__v:0}).then(data=>{
        res.status(200).send({
            code:200,
            message:'查找员工数据',
            data:data
        })
    }).catch(err=>console.log(err))
}

const deleteAsocciate = (req,res,next) => {
    let {ocupation,inWhichDepartment,asocciateID} = req.query
    console.log(req.query);
    let arr = []
    arr.push(sql.delete(AsocciateModel,{asocciateID},0))
    arr.push(sql.update(DepartmentModel,{inWhichDepartment},{departmentQuantity:--departmentQuantity},0))
    // arr.push(sql.update(OcupationModel,{inWhichDepartment,ocupationName:ocupation},{ocupationQuantity:--ocupationQuantity},0))
    console.log(arr);
    Promise.all(arr)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
    
}



module.exports = {addAsocciate,lookUpAsocciate,deleteAsocciate}