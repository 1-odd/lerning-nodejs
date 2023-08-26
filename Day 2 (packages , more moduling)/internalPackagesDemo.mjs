//import { readFileSync } from "fs"; 


import {readFile,writeFile} from "fs/promises"  // import the fs module it is a internal module of node

const data = await readFile('./data.txt','utf-8'); // for read the data from that file
console.log(data); // print that data

// this  package use promises and callback . 

await writeFile("writeFileHere.txt",data); // writeFile used to write the data in a file 


