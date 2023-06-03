let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let FULL_TIME_HR = 8;
let PART_TIME_HR = 4;
let WAGE_PER_HR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 3);

switch (empCheck)
 {
    case IS_FULL_TIME:
        {
            console.log("Full Time Employee")
            empHrs = FULL_TIME_HR;
            break;
        }
    case IS_PART_TIME:
        {
            console.log("Part Time Employee");
            empHrs = PART_TIME_HR;
            break;
        }
        default: console.log("Employee is absent");
        empHrs=0;
        break;
}
let empWage=empHrs * WAGE_PER_HR;
console.log("EmpWage Is : "+empWage);

