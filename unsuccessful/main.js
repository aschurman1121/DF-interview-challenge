const csval = require("csval");
 
const main = async () => {
  const csvString = await readCsv("DoubleFinInterviewAssignmentData.csv");
 
    console.log(csvString)


  const rules = {
    properties: {
      name: {
        type: "string"
      },
      
    }
  };
 
  const parsed = await csval.parseCsv(csvString);
  const valid = await csval.validate(parsed, rules);
 

};
 
main();
