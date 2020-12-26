const router = require('express').Router()

const asocciateController = require('./../controller/asocciate')
router.post('/addAsocciate',asocciateController.addSocciate)




module.exports = router