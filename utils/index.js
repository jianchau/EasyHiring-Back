const {v4:uuidv4} = require('uuid')
module.exports={
    getUuid(){
        return uuidv4()
    }
}