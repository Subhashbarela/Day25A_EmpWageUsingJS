let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let FULL_TIME_HR = 8;
let PART_TIME_HR = 4;
let WAGE_PER_HR = 20;
let empHrs = 0;
let NUM_OF_WORKING_DAYS = 10;
let fullTime = 0;
let partTime = 0;
let Absent = 0;

for (var i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    let empCheck = Math.floor(Math.random() * 3);

    switch (empCheck) {
        case IS_FULL_TIME:
            {
                fullTime++;
                empHrs += FULL_TIME_HR;
                break;
            }
        case IS_PART_TIME:
            {
                partTime++;
                empHrs += PART_TIME_HR;
                break;
            }
        default: console.log("Employee is absent");
            Absent++;
            empHrs += 0;
            break;
    }
}
let empWage = empHrs * WAGE_PER_HR;
console.log("total full time : "+fullTime);
console.log("total part time : "+partTime);
console.log("total absent  : "+Absent);
console.log("EmpWage Is : " + empWage);

