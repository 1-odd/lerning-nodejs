const express = require("express");

const server = express(); // creating express server object
const port = 8080;

// now handle the request according to url and request methods

server.get("/", function (request, responce) {
  // do your calculation etc

  responce.send("result of get method request at url /");
});

server.post("/home", function (request, responce) {
  // do your calculation etc

  responce.send("result of post method request at url /home");
});

server.patch("/about", function (request, responce) {
  // do your calculation etc

  responce.send("result of patch method request at url /home");
});

server.patch("/aboutme", function (request, responce) {
    // do your calculation etc
    
    // send response in json format
    responce.json({ 
        "name": "Ritik",
        "age":"20",
        success: true

    });

  });
// lets turn on the server

server.listen(port, function process() {
  console.log(`Server has started at port`, port);
});
