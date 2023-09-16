"use strict";

/*---------------------------------------
NODEJS


-----------------------------------------*/

const http = require("http");

const app = http.createServer((request, response) => {
  response.end("welcome to nodejs server");
});
app.listen(8000, () => console.log("server runned : <http://127.0.0.1:8000"));
