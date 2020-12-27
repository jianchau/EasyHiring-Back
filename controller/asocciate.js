const Asocciate = require('././../sql/models/Asocciate')
const DepartmentModel = require('./../sql/models/Department')
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
                    sql.insert(Asocciate,insertData).then(()=>{
                        //同步更新部门集合
                        sql.update(DepartmentModel,{departmentName:insertData.inWhichDepartment},{$inc:{departmentQuantity:1}},0).then((data)=>{
                            console.log(data);
                            res.status(200).send({
                                code:200,
                                message:'插入一条员工数据',
                                workID:insertData.workID
                            })
                        })
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



module.exports = {addAsocciate,lookUpAsocciate}