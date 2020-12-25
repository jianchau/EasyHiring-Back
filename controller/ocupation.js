const OcupationModel = require('./../sql/models/Ocupation')
const sql = require('./../sql/index')
const {getUuid} = require('./../utils')

const addOcupation = (req,res,next)=>{
    const insertData = req.body
    insertData.ocupationID = 'ocupation-' + getUuid()
    sql.insert(OcupationModel,insertData).then(data=>{
        res.status(200).send({
            code:200,
            message:'添加职位',
            ocupationID:insertData.ocupationID
        })
    }).catch(err=>console.log(err))
}

const lookUpOcupation = (req,res,next)=>{
    sql.find(OcupationModel,{},{_id:0,__v:0}).then(data=>{
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