const fs = require('fs'); // import file system for read write the data from files

const transformation = require('stream');

const inputStream = fs.createReadStream('./input.txt');    // create a input stream , read data from file create a stream and pass it to input stream.

const outputStream = process.stdout; // here we create a output stream which is currently empty .


let middleStream = new transformation.Transform ( { // do some changes in input stream while reading the data
    transform(chunk, encoding, nextCallback) {
        let modifiedData = chunk.toString().toUpperCase();
        this.push(modifiedData);
        setTimeout(nextCallback,1000);
        // nextCallback();
    }
} );


// now lets start reading our input file and writing to our output stream . using pipe() function

//inputStream.pipe(outputStream);

let newReadableStream = inputStream.pipe(middleStream);// get a new data that is modified
newReadableStream.pipe(outputStream)// connect that new data to output stream

