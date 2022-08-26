var http = require("http");
var fs = require("fs");
var url =require("url");//url이라는 모듈의 사용

var app=http.createServer(function(request,response){
    var _url =request.url;
    var queryData =url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url=="/"){
      _url = "/index.html";
    }
    if(_url=="/favicon.ico"){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
});
app.listen(3000);