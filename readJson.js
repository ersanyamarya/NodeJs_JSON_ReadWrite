//read from the same file in which out prom the write file is saved
var fs = require("fs"); //importing fs
var data = fs.readFileSync("json.txt"); //reading file
var obj = JSON.parse(data); //parsing JSON
console.log(obj); // printing js object
console.log("hardware id: "+obj.hardwareid); //printing a perticular property
