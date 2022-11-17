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




const csvData = 'hello, world, yes, no'

console.log(Papa.parse(csvString[ , config]))