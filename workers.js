let workersData = [
{ firstName: "Vanessa" , lastName: "Rogers" ,	gender: "Female" ,	age: 19 ,	salary: 60193 },
{ firstName: "Charlotte" , lastName: "Hunt" , gender: "Female" , age: 24 , salary:	92383 },
{ firstName: "Marcus" , lastName: "Foster",	gender: "Male" ,	age: 21,	salary: 65760},
{ firstName: "Myra" , lastName: "Brooks" ,	gender:	"Female" ,	age:	21,	salary:	174036},
{ firstName: "Caroline", lastName: "Armstrong" ,	gender:	"Female" ,	age: 29,	salary:	149879},
{ firstName: "Belinda" , lastName: "Carroll" ,	gender:	" Female" ,	age: 19, salary: 188935},
{ firstName: "Olivia" , lastName: "Armstrong" ,	gender: "Female" , age:	26, salary: 34782},
{ firstName: "April" , lastName: "Cooper" , gender: "Female" ,  age: 20, salary: 68263},
{ firstName: "Edith" , lastName: "Harrison" ,	gender: "Female" , age: 23, salary: 54709},
{ firstName: "Vivian" , lastName: "Henderson" , gender: "Female" ,	age: 20, salary: 155709},
{ firstName: "Ashton" , lastName: "Martin" ,	gemder: "Male" ,	age: 27,	salary: 166647},
{ firstName: "Gianna" , lastName: "Moore" ,	gemder: "Female" ,	age:23,	salary: 191619},
{ firstName: "Camila" , lastName: "Allen" ,	gender: "Female" ,	age: 23,	salary: 85567},
{ firstName: "Gianna" , lastName: "Morrison" ,	gender: "Female" ,	age: 28, salary: 191509},
{ firstName: "Paul" , lastName: "Cooper" ,	gender: "Male" ,	age: 28,	salary:	39471},
{ firstName: "Tara" , lastName: "Mason"	, gender: "Female" ,	age: 19,	salary:	189780},
{ firstName: "Aida" , lastName: "Tucker"	, gender: "Female" , age:	21,	salary:	143187},
{ firstName: "Richard" , lastName: "Cameron" , gender: "Male" ,	age: 21,	salary:	116644},
{ firstName: "Amy" , lastName: "Stewart" ,	gender: "Female" ,	age: 29,	salary: 126961},
{ firstName: "Eleanor" , lastName: "Thompson" ,	gender: "Female" ,	age:	22,	salary:	159003},
{ firstName: "Alberta" , lastName: "Edwards" ,	gender: "Female" ,	age:	21,	salary:	105648},
{ firstName: "Gianna" , lastName: "Evans" ,	gender:	"Female" ,	age:	27,	salary:	183805},
{ firstName: "Florrie" , lastName: "Kelley" ,	gender:	"Female" ,	age: 24,	salary:	180568},
{ firstName: "Miranda" , lastName: "Harris" ,	gender:	"Female" ,	age: 19, salary: 185753},
{ firstName: "Henry" , lastName: "Davis" ,	gender:	"Male" ,	age: 18, salary: 83804},
{ firstName: "Kirsten" , lastName: "Barnes" ,	gender: "Female" , age: 26,  salary: 161833},
{ firstName: "Jack" , lastName: "Chapman" ,	gender:	"Male" , age:	19,	salary: 41007},
{ firstName: "Myra" , lastName: "Kelly" ,	gender:	"Female" , age:	27,	salary: 118346},
{ firstName: "Emma" , lastName: "Evans" ,	gender:	"Female" , age:	23,	salary:	126125},
{ firstName: "Blake" , lastName: "Evans" ,	gender:	"Male" , age: 24,	salary:	69702},
{ firstName: "Aldus" , lastName: "Armstrong" ,	gender:	"Male" , age: 26,	salary:	132491},
{ firstName: "Adelaide" , lastName: "Martin" ,	gender:	"Female" , age:	20,	salary:	175263},
{ firstName: "Victoria" , lastName: "Elliott" ,	gender:	"Female" , age:	21,	salary:	111645},
{ firstName: "Nicole" , lastName: "Harrison" ,	gender:	"Female" , age:	22,	salary:	54624},
{ firstName: "Edwin" , lastName: "Hamilton" ,	gender:	"Male" , age: 18,	salary:	152586},
{ firstName: "Jessica" , lastName: "Robinson" ,	gender:	"Female" , age:	29,	salary:	85446},
{ firstName: "Sofia" , lastName: "Turner" ,	gender:	"Female" , age:	20,	salary:	131564},
{ firstName: "Cadie" , lastName: "Higgins" ,	gender:	"Female" , age:	21,	salary: 138663},
{ firstName: "Jessica" , lastName: "Turner" ,	gender:	"Female" , age:	24,	salary:	91319},
{ firstName: "Walter" , lastName: "Hamilton" ,	gender:	"Male" , age: 25,	salary:	117408},
{ firstName: "Alexander" , lastName: "Farrell" ,	gender:	"Male" , age: 26,	salary:	65878},
{ firstName: "Justin" , lastName: "Howard" ,	gender:	"Male" , age: 21,	salary:	165575},
{ firstName: "Chelsea" , lastName: "Holmes" ,	gender:	"Female" , age:	21,	salary:	32690},
{ firstName: "Alberta" , lastName: "Wilson" ,	gender:	"Female" , age:	22,	salary: 143459},
{ firstName: "Miller" , lastName: "Murphy" ,	gender:	"Male" , age:	25,	salary:	163776},
{ firstName: "Adrianna" , lastName: "Hawkins" ,	gender:	"Female" , age:	29,	salary:	64412},
{ firstName: "Dominik" , lastName: "Reed" ,	gender:	"Male" , age:	23,	salary:	42643},
{ firstName: "Gianna" , lastName: "Craig" ,	gender:	"Female" , age:	18,	salary:	141944},
{ firstName: "Alissa" , lastName: "Cameron" , gender: "Female" , age: 25, salary: 101581},
{ firstName: "Aldus" , lastName: "Adams" , gender: "Male" , age: 28, salary: 132894},
]

// firstName and lastName of workers
for (let i = 0; i < workersData.length; i++) {
	console.log ( `the first name is ${workersData[i].firstName} and the last name is ${workersData[i].lastName}` )
};
// Total salaries
let totalWorkersSalary = 0;
for ( let i = 0; i < workersData.length; i++ ) {
	totalWorkersSalary += workersData[i].salary
};
console.log (totalWorkersSalary)
// Average worker's Age
let totalWorkersAge = 0
for ( let i = 0; i < workersData.length; i++ ) {
	totalWorkersAge += workersData[i].age
};
var averageWorkersAge = totalWorkersAge / workersData.length;
console.log (averageWorkersAge)
// personal info of the worker at index 33
console.log (workersData[33])
// salary of sophia Turner
console.log (`SofiaTurner's salary is $${workersData[36].salary}`)
// Length of the array
console.log (`The length of the array is ${workersData.length}`)

// Edited personal info
// Miller to milner
 let newName = workersData[44].firstName ="Milner";
  console.log ( `The edited name is ${workersData[44].firstName}`)
  console.log (workersData[44])
// Aldus: Male to female  
let newGender =  workersData[49].gender ="Female";
  console.log ( `The correct gender is ${workersData[49].gender}`)
  console.log (workersData[49])
// updated array
console.log (workersData)


