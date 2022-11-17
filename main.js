// const config = { 
//     Headers: [
//         {
//             name: 'employee id',
//             inputName: 'employeeID',
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
//         }

        
//     ]

// }




// const URLwithData = 'https://storage.googleapis.com/custom-hris/data.html'

// // console.log(Papa.parse(csvData))

// console.log(Papa.parse( URLwithData, {
//     download: true,
//     header: true,

// } 

// ))



const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('DoubleFinInterviewAssignmentData.csv')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', () => {
    console.log(results)
}
)
;

console.log(results)