var router = require('express').Router()
var departmentController = require('./../controller/department')
/**
 * @api {post} api/department/newDepartment new Department
 * @apiName newDepartment
 * @apiGroup department
 *
 * @apiParam {String} departmentName Department's unique ID.
 * @apiParam {String} departmentCode Department's unique Code.
 *
 * @apiSuccess {Number} code Status of response.
 * @apiSuccess {String} message Message of response.
 * @apiSuccess {String} departmentCode DepartmentCode of new department
 * 
 * @apiSampleRequest /api/department/newDepartment
 */
router.post('/newDepartment',departmentController.newDepartment)
/**
 * @api {get} api/department/lookUpDepartment Look up department
 * @apiName LookUpDepartment
 * @apiGroup department
 *
 * @apiSuccess {Number} code status of response.
 * @apiSuccess {String} message message of response.
 * @apiSuccess {Array} data
 * @apiSuccess {Number} length of data
 * 
 * @apiSampleRequest /api/department/lookUpDepartment
 */
router.get('/lookUpDepartment',departmentController.lookUpDepartment)

/**
 * @api {get} api/department/deleteDepartment Delete a department
 * @apiName deleteDepartment
 * @apiGroup department
 *
 * @apiParam {String} departmentID Department's unique ID.
 *
 * @apiSuccess {Number} code status of response.
 * @apiSuccess {String} message  message of response.
 * 
 * @apiSampleRequest /api/department/deleteDepartment
 */
router.get('/deleteDepartment',departmentController.deleteDepartment)


module.exports = router