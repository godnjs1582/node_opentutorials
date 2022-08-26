var http = require("http");
var fs = require("fs");
var url = require("url"); //url이라는 모듈의 사용

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url,true).pathname;
  var title = queryData.id;
  if(pathname==="/"){
    fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
        var template = `
        <!doctype html>
    <html>
    
    <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
    </head>
    
    <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
            <li><a href="/?id=html">HTML</a></li>
            <li><a href="/?id=css">CSS</a></li>
            <li><a href="/?id=javascript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
    </body>
    </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
  }else{
        response.writeHead(404);
        response.end("NOT FOUND");
  }

  console.log()
//   if (_url == "/") {
//     title = "Welcome";
//   }
//   if (_url == "/favicon.ico") {
//     return response.writeHead(404);
//   }
  
  
});
app.listen(3000);
