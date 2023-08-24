import searching from './deafultExport.js';

console.log("Start");

let arr = [1,2,3,4,5,6,7,8,8,9];
let x = 5;

const result = searching(arr,x);
console.log(result);
console.log('End');



// solution2 add a json file with data "type" : "module" and it consume only default export