module.exports = {
    insert(whichModel,insertData,type=0){
        return whichModel(insertData).save()
    },
    delete(whichModel,whereData,type=0){
        const deleteType = type === 0?'updateOne':type===1?'updateMany':'wrongType'
        deleteType === 'wrongType'&& console.error('delete函数参数传递错误');
        whichModel[deleteType](whereData)
    },
    update(whichModel,whereData,updateData,type){
        const updateType = type===0?'updateOne':type===1?'updateMany':'wrongType'
        updateType === 'wrongType'&&  console.error('update函数参数传递错误');
        return whichModel[updateType](whereData,updateData)
    },
    find(whichModel,whereData,showData){
        return whichModel.find(whereData,showData)
    }
}

