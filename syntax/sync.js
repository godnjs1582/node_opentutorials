var fs =require("fs")

//readFileSync(동기적)
// console.log("a")
// var result = fs.readFileSync("syntax/sample.txt","utf-8")
// console.log(result);
// console.log("c")


//readFile(비동기)
console.log("a")
fs.readFile("syntax/sample.txt","utf-8",function(err,result){
    console.log(result)
})
console.log("c")

