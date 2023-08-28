const http = require("http");

/**
 * Http module contains a function called createServer()
 * this function takes a callback function as input
 * Now inside the callback we pass 2 arguments-:
 *  - request -> this argument contains all the info(url,request method,message/data) about incoming request.
 *  - response -> this argument contains functions using which we can prepare the response.
 *
 * createServer function return us a server object
 */

let PORT = 8080;
// lets create a server

const server = http.createServer(function callback(request, response) {
  // console.log(request);

  console.log(request.method); // it will print the method name by which user sending request(set,get,patch etc)

  // request  contains lots of data url is one of them
  // let apply some condition according to url

  if (request.url == "/home") {
    // you can put any logic here

    response.end("Home page"); // response your result or any message
  } else if (request.url == "/about") {
    response.end("welcome to my about section");
  } else {
    response.end("Hemlo my domst "); // when someone request then reply this using .end() function of responce
  }
});

// turn on the server

server.listen(PORT, function process() {
  // once the server turn on this callback will executed
  console.log("Server has started at port", PORT);
  // the usecase of this callback is if you want to do some task or connection just after the server turns on then you can do it using this callback.
});
