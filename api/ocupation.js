const  ocupationController = require('./../controller/ocupation')

const router = require('express').Router()


/**
 * @api {post} api/ocupation/addOcupation Add ocupation
 * @apiName addOcupation
 * @apiGroup ocupation
 *
 * @apiParam {String} ocupationName Ocupation's name.
 * @apiParam {String} inWhichDepartment Department's Name.
 *
 * @apiSuccess {Number} code status of response.
 * @apiSuccess {String} message message of response.
 * @apiSuccess {String} departmentID ID of new ocupation
 * 
 * @apiSampleRequest /api/ocupation/addOcupation
 */
router.post('/addOcupation',ocupationController.addOcupation)

/**
 * @api {get} api/ocupation/lookUpOcupation Look up ocupations
 * @apiName lookUpOcupation
 * @apiGroup ocupation
 *
 * @apiSuccess {Number} code status of response.
 * @apiSuccess {String} message message of response.
 * @apiSuccess {Number} totalCount length of data
 * @apiSuccess {Array} data data of response
 * 
 * @apiSampleRequest /api/ocupation/lookUpOcupation
 */
router.get('/lookUpOcupation',ocupationController.lookUpOcupation)

/**
 * @api {get} api/ocupation/deleteOcupation Delete ocupation
 * @apiName deleteOcupation
 * @apiGroup ocupation
 *
 * @apiParam {String} ocupationID Ocupation's ID.
 *
 * @apiSuccess {Number} code status of response.
 * @apiSuccess {String} message message of response.
 * @apiSuccess {String} deleteOcupationID ID of deleted ocupation
 * 
 * @apiSampleRequest /api/ocupation/deleteOcupation
 */
router.get('/deleteOcupation',ocupationController.deleteOcupation)

module.exports = router