const router = require('express').Router()

const asocciateController = require('./../controller/asocciate')

/**
 * @api {post} api/asocciate/addAsocciate Add asocciate
 * @apiName addAsocciate
 * @apiGroup asocciate
 *
 * @apiParam {String} workID Asocciate's workID.
 * @apiParam {String} name Asocciate's name.
 * @apiParam {String} cardID Asocciate's identity card.
 * @apiParam {String} gender Asocciate's gender.
 * @apiParam {String} age Asocciate's age.
 * @apiParam {String} avatar Asocciate's avatar.
 * @apiParam {String} phoneNumber Asocciate's phone number.
 * @apiParam {String} ocupation Asocciate's ocupation.
 * @apiParam {String} inWhichDepartment Asocciate's department.
 * 
 * @apiSuccess {Number} code Status of response.
 * @apiSuccess {String} message Message of response.
 * @apiSuccess {String} workID WorkID of new department
 * 
 * @apiSampleRequest /api/department/newDepartment
 */
router.post('/addAsocciate',asocciateController.addAsocciate)


router.get('/lookUpAsocciate',asocciateController.lookUpAsocciate)


module.exports = router