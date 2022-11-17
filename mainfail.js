
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const CSVFileValidator = require('csv-file-validator')

// const config = { 
//     headers: [
//         {
//             name: 'employee id',
//             inputName: 'employee id',
//             required: true,
//             requiredError: function (headerName, rowNumber, columnNumber) {
//                 return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
//             }
//         },
//         {
//             name: 'employee first name',
//             inputName: 'employeeFirstName',
//             required: true,
//             requiredError: function (headerName, rowNumber, columnNumber) {
//                 return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
//             }
//         },
//         {
//             name: 'employee last name',
//             inputName: 'employeeLastName',
//             required: true,
//             requiredError: function (headerName, rowNumber, columnNumber) {
//                 return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
//             }
//         },
//         {
//             name: 'is manager',
//             inputName: 'isManager',
//             required: false
//         },
//         {
//             name: 'Email',
//             inputName: 'email',
//             unique: true,
//             uniqueError: function (headerName) {
//                 return `${headerName} is not unique`
//             },
//             validate: function(email) {
//                 return isEmailValid(email)
//             },
//             validateError: function (headerName, rowNumber, columnNumber) {
//                 return `${headerName} is not valid in the ${rowNumber} row / ${columnNumber} column`
//             } 
//         },
//         {
//             name: 'start date',
//             inputName: 'startDate', //this input type needs to be a date
//             required: true
//         },
//         {
//             name: 'end date',
//             inputName: 'endDate',//this input type needs to be a date
//             required: false
//         },
//         {
//             name: 'function',
//             inputName: 'function',
//             required: true
//         },
//         {
//             name: 'job level',
//             inputName: 'jobLevel',
//             required: false
//         },
//         {
//             name: 'employee job title',
//             inputName: 'employeeJobTitle',
//             required: true
//         },
//         {
//             name: 'job location',
//             inputName: 'jobLocation',
//             required: true
//         },
//         {
//             name: 'job family',
//             inputName: 'jobFamily',
//             required: false
//         },
//         {
//             name: 'cost center',
//             inputName: 'costCenter',
//             required: true
//         },
//         {
//             name: 'employment type',
//             inputName: 'employmentType',
//             required: false
//         },
//         {
//             name: 'managers employee id',
//             inputName: 'mamagersEmployeeId',
//             required: false
//         }
        
//     ],
//     isHeaderNameOptional: false

// }

const config = {
    headers: [], // required
    isHeaderNameOptional: false 
}

fs.createReadStream('DoubleFinInterviewAssignmentData.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results)
    //access results as it is an array
    //use a webpack or api to validate the data
    CSVFileValidator(results, config)
    .then(csvData => {
        console.log(csvData)
        csvData.data // Array of objects from file
        // console.log(data)
        csvData.inValidMessages // Array of error messages
    })
    .catch(err => {})
}
)
;

console.log(results)

