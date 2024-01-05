// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs")
fs.promises
.readFile("4-write-to-file.txt","utf-8")
.then((data)=>console.log(data))

const data="hello from 4-write-to-file.js"
fs.writeFile("4-write-to-file.txt",data, function(err){
    if (err) throw err;
})
