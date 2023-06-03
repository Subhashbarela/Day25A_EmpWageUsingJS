let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let FULL_TIME_HR = 8;
let PART_TIME_HR = 4;
let WAGE_PER_HR = 20;
let empHrs = 0;
let NUM_OF_WORKING_DAYS = 10;
let MAX_HRS=100;
let totalEmphrs=0;
let totalWorkingDays=0;


while(totalEmphrs<MAX_HRS && totalWorkingDays<=NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    switch (empCheck) {
        case IS_FULL_TIME:
            {               
                empHrs += FULL_TIME_HR;
                break;
            }
        case IS_PART_TIME:
            {               
                empHrs += PART_TIME_HR;
                break;
            }
        default:          
            empHrs += 0;
            break;
    }
    totalEmphrs +=empHrs;
}
console.log(totalWorkingDays);
let empWage = totalEmphrs * WAGE_PER_HR;
console.log("EmpWage Is : " + empWage);

