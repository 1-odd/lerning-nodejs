const axios = require('axios');



// promises syntax

// axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=7e1ea5b5')
// .then(function process(response){

//     // for print the whole response
   
//    // console.log(response); 

//     // for print the actual data
//     console.log(response.data);
// });



// async await syntax


async function fetch(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=2');

    console.log(response.data);

}
fetch();