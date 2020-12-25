define({ "api": [
  {
    "type": "get",
    "url": "api/department/lookUpDepartment",
    "title": "Look up department",
    "name": "LookUpDepartment",
    "group": "department",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>status of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>of data</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/department/lookUpDepartment"
      }
    ],
    "version": "0.0.0",
    "filename": "api/department.js",
    "groupTitle": "department"
  },
  {
    "type": "get",
    "url": "api/department/deleteDepartment",
    "title": "Delete a department",
    "name": "deleteDepartment",
    "group": "department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentID",
            "description": "<p>Department's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>status of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message of response.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/department/deleteDepartment"
      }
    ],
    "version": "0.0.0",
    "filename": "api/department.js",
    "groupTitle": "department"
  },
  {
    "type": "post",
    "url": "api/department/newDepartment",
    "title": "new Department",
    "name": "newDepartment",
    "group": "department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentName",
            "description": "<p>Department's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentCode",
            "description": "<p>Department's unique Code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>status of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "departmentCode",
            "description": "<p>of new department</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/department/newDepartment"
      }
    ],
    "version": "0.0.0",
    "filename": "api/department.js",
    "groupTitle": "department"
  }
] });
